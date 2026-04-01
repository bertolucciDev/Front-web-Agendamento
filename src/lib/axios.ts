import axios from "axios"
import { env } from "@/config/env"
import { getToken, removeToken } from "@/modules/user/auth/utils/token"

export const api = axios.create({
  baseURL: env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
  const token = getToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeToken()
    }

    return Promise.reject(error)
  },
)

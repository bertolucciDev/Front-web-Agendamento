const ACCESS_TOKEN_KEY = "accessToken"

export function saveToken(token: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export function getToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function removeToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

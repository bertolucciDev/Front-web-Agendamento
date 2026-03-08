export function saveToken(token: string){
  localStorage.setItem("token", token)
}

export function getItem() {
  return localStorage.getItem("token")
}

export function removeToken() {
  localStorage.removeItem("token")
}
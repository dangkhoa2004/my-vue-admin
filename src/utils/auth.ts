const TOKEN_KEY = "token";
const USER_INFO_KEY = "userInfo";

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function storageLocal() {
  return window.localStorage;
}
export function logout(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_INFO_KEY);
}

export function isLoggedIn(): boolean {
  const token = getToken();
  return token !== null;
}

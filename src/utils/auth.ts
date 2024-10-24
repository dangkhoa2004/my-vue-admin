// src/utils/auth.ts

const TOKEN_KEY = "token"; // Khóa lưu trữ token
const USER_INFO_KEY = "userInfo"; // Khóa lưu trữ thông tin người dùng

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY); // Lấy token từ localStorage
}

// Hàm lưu token vào localStorage
export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token); // Lưu token vào localStorage
}

export function storageLocal() {
  return window.localStorage;
}


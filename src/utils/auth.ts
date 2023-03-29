const key = 'Authorization';

export function getAuthToken() {
  return sessionStorage.getItem(key);
}

export function setAuthToken(token: string) {
  sessionStorage.setItem(key, token);
}

export function removeAuthToken() {
  sessionStorage.removeItem(key);
}

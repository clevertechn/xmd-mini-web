const API_BASE = import.meta.env.VITE_XMD_API_URL || '';

let token: string | null = localStorage.getItem('xmd_token');
let csrfToken: string | null = localStorage.getItem('xmd_csrf');

export function setAuth(t: string, csrf: string) {
  token = t;
  csrfToken = csrf;
  localStorage.setItem('xmd_token', t);
  localStorage.setItem('xmd_csrf', csrf);
}

export function clearAuth() {
  token = null;
  csrfToken = null;
  localStorage.removeItem('xmd_token');
  localStorage.removeItem('xmd_csrf');
}

export function getCsrf() {
  return csrfToken;
}

export function isAuthenticated() {
  return Boolean(token);
}

type ApiResult<T> = { ok: true; data: T } | { ok: false; error: string };

async function request<T>(path: string, options: RequestInit = {}): Promise<ApiResult<T>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (csrfToken && options.method && options.method !== 'GET') headers['X-CSRF-Token'] = csrfToken;

  try {
    const response = await fetch(`${API_BASE}${path}`, { ...options, headers, credentials: 'include' });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) return { ok: false, error: data.error || `Request failed (${response.status})` };
    return { ok: true, data: data as T };
  } catch {
    return { ok: false, error: 'Network error. Check your connection and try again.' };
  }
}

export type User = { id: string; username: string; businessName: string };
export type AuthResponse = { token: string; csrfToken: string; user: User };
export type BotStatus = {
  state: string;
  label: string;
  paired: boolean;
  number: string;
  pairingCode: string;
  qrDataUrl: string;
  processRunning: boolean;
  lastError: string;
};
export type Settings = {
  botName: string;
  previewDescription: string;
  prefix: string;
  autoRead: boolean;
  autoReact: boolean;
  mode: string;
};

export const api = {
  register: (username: string, password: string, businessName: string) =>
    request<AuthResponse>('/api/v1/register', { method: 'POST', body: JSON.stringify({ username, password, businessName }) }),
  login: (username: string, password: string) =>
    request<AuthResponse>('/api/v1/login', { method: 'POST', body: JSON.stringify({ username, password }) }),
  logout: () => request<{ ok: boolean }>('/api/v1/logout', { method: 'POST' }),
  me: () => request<User>('/api/v1/me'),
  status: () => request<BotStatus>('/api/v1/status'),
  pair: (phone: string) =>
    request<{ ok: boolean; message: string }>('/api/v1/pair', { method: 'POST', body: JSON.stringify({ phone }) }),
  resetSession: () =>
    request<{ ok: boolean }>('/api/v1/session/reset', { method: 'POST' }),
  control: (action: string) =>
    request<{ ok: boolean; message: string }>('/api/v1/worker/control', { method: 'POST', body: JSON.stringify({ action }) }),
  getSettings: () => request<Settings>('/api/v1/settings'),
  saveSettings: (settings: Partial<Settings>) =>
    request<{ ok: boolean; settings: Settings }>('/api/v1/settings', { method: 'POST', body: JSON.stringify(settings) }),
  saveProfile: (businessName: string) =>
    request<{ ok: boolean; user: User }>('/api/v1/account/profile', { method: 'POST', body: JSON.stringify({ businessName }) }),
};

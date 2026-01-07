import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VUE_APP_API_BASE_URL || 'http://localhost:5248/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // ou use Vuex
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
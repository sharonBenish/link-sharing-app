import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/",
    headers: {
        'Content-Type': 'application/json',
    },
    // withCredentials: true, // Enable cookies to be sent with requests
});

api.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    if (authStore.accessToken) {
        config.headers.Authorization = `Bearer ${authStore.accessToken}`;
    }
    return config;
})

// Response interceptor → handle token expiry
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const authStore = useAuthStore();
//     if (error.response?.status === 401 && !error.config._retry) {
//       error.config._retry = true;
//       try {
//         await authStore.refreshAccessToken();
//         error.config.headers.Authorization = `Bearer ${authStore.accessToken}`;
//         return api(error.config);
//       } catch (refreshError) {
//         authStore.logOut();
//       }
//     }
//     return Promise.reject(error);
//   }
// );

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const auth = useAuthStore();
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await auth.refreshAccessToken(); // get new access token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest); // retry original request
      } catch (err) {
        auth.logOut();
        // Optionally redirect to login with router.push("/login")
      }
    }
    return Promise.reject(error);
  }
);

export default api;
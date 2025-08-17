import type { Credentials } from '@/types/auth';
import type { ProfileDetails } from '@/types/profile';
import api from '@/utils/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        accessToken: localStorage.getItem('accessToken') || null,
        refreshToken: ref<string | null>(null), // Use ref for reactivity
        user: ref<ProfileDetails | null>(null), // Reactive user object
    }),

    actions: {
        // Define actions related to authentication here
        async login(credentials:Credentials) {
            try {
                const response = await api.post('/auth/login', credentials);
                this.accessToken = response.data.accessToken;
                this.refreshToken = response.data.refreshToken;
                localStorage.setItem('accessToken', this.accessToken as string);
                return response;
            } catch (error) {
                console.error('Login failed:', error);
                throw error;
            }
        },
        async refreshAccessToken(){
            try{
                const response = await api.post('/auth/refresh-token', this.refreshToken);
                this.accessToken = response.data.accessToken;
                localStorage.setItem('accessToken', this.accessToken as string);
            } catch (error) {
                console.error('Error refreshing token:', error);
                throw error;
            }
        },

        async logOut () {
            try{
                const response = await api.post('/auth/logout', this.refreshToken);
                console.log('Logout successful:', response);
                this.accessToken = null;
                this.refreshToken = null;
                this.user = null;
                localStorage.removeItem('accessToken');
            } catch (error) {
                console.error('Error logging out:', error);
            }
        }
    }
})
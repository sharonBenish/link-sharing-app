<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const authStore = useAuthStore();

const login = async () => {
    console.log('Attempting to log in with:', email.value, password.value);
    const credentials = {
        email: email.value,
        password: password.value
    };
    try {
        const res = await authStore.login(credentials);
        if (res) {
            console.log('Login successful:', res);
            // Redirect to the home page or dashboard after successful login
            router.push('/dashboard'); // Adjust the route as necessary
        }
    } catch (error) {
        console.error('Login failed:', error);
        // Handle error appropriately, e.g., show a notification
    }
};
</script>

<template>
    <div class="border-red-200 border-2 bg-light-grey h-screen flex items-center justify-center">
        <div>
            <div class="logo flex items-center justify-center mb-8">
                <img src="/src/assets/images/logo-devlinks-large.svg" />
            </div>

            <form @submit.prevent="login" class="bg-white rounded-md py-8 px-12 min-w-[500px]">
                <h1 class="text-3xl font-[600] mb-4">Login</h1>
                <p class="text-grey font-light">Add your details below to get back into the app</p>

                <div class="mt-8 flex flex-col gap-6">
                    <div class="flex flex-col">
                        <label class="text-sm font-extralight block pb-2">Email address</label>
                        <div class="flex gap-2.5 px-4 py-3 border border-borders rounded-md">
                            <img src="/src/assets/images/icon-email.svg" />
                            <input v-model="email" type="email" class="w-full outline-0 font-extralight text-sm" />
                        </div>
                        
                    </div>

                    <div class="flex flex-col">
                        <label class="text-sm font-extralight pb-2">Password</label>
                        <div class="flex gap-2.5 px-4 py-3 border border-borders rounded-md">
                            <img src="/src/assets/images/icon-password.svg" />
                            <input v-model="password" type="password" class="w-full outline-0" />
                        </div>
                    </div>

                    <button type="submit" class="w-full py-2.5 rounded-md bg-purple hover:bg-purple-hover cursor-pointer text-white font-[500]">Login</button>

                    <p class="text-center font-light">Don't have an account? <a href="/auth/signup">Create account</a></p>

                </div>
            </form>
        </div>
    </div>
</template>

<style lang="css">
.m4{
    margin-bottom: 30px;
}
</style>
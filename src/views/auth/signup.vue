<script setup lang="ts">

</script>

<template>
    <div class="border-red-200 border-2 bg-light-grey h-screen flex items-center justify-center">
        <div>
            <div class="logo flex items-center justify-center mb-8">
                <img src="/src/assets/images/logo-devlinks-large.svg" />
            </div>

            <form class="bg-white rounded-md px-12 py-8 min-w-[500px]">
                <h1 class="text-3xl font-[600] mb-4">Create account</h1>
                <p class="text-grey font-light">Let's get you started sharing your links!</p>

                <div class="mt-8 flex flex-col gap-6">
                    <div class="flex flex-col">
                        <label class="text-sm font-extralight block pb-2">Email address</label>
                        <div class="flex gap-2.5 px-4 py-3 border border-borders rounded-md">
                            <img src="/src/assets/images/icon-email.svg" />
                            <input type="email" class="w-full outline-0 font-extralight text-sm" />
                        </div>
                        
                    </div>

                    <div class="flex flex-col">
                        <label class="text-sm font-extralight pb-2">Password</label>
                        <div class="flex gap-2.5 px-4 py-3 border border-borders rounded-md">
                            <img src="/src/assets/images/icon-password.svg" />
                            <input type="password" class="w-full outline-0" />
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-sm font-extralight pb-2">Confirm password</label>
                        <div class="flex gap-2.5 px-4 py-3 border border-borders rounded-md">
                            <img src="/src/assets/images/icon-password.svg" />
                            <input type="password" class="w-full outline-0" />
                        </div>
                    </div>

                    <button type="submit" class="w-full py-2.5 rounded-md bg-purple hover:bg-purple-hover cursor-pointer text-white font-[500]">Create new account</button>

                    <p class="text-center font-light">Already have an account? <a href="/auth/login">Login</a></p>

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
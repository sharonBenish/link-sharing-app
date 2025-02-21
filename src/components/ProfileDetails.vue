<script setup lang="ts">
</script>

<template>
    <div class="bg-white flex-1 rounded-lg py-4 lg:py-8 px-4 lg:px-10">
        <h1 class="text-2xl lg:text-3xl font-[700] my-2">Profile Details</h1>
        <p class="text-grey my-2">Add your details to create a personal touch to your profile</p>

        <div class="">
            <div class="bg-light-grey rounded-lg my-8 py-5 px-5 flex items-center gap-10">
                <p class="text-grey">Profile Picture</p>
                <div class="flex gap-2 items-center">
                    <div class="bg-light-purple text-purple h-50 w-48 rounded-lg flex flex-col items-center justify-center gap-2 hover:cursor-pointer upload">
                        <img src="/src/assets/images/icon-upload-image.svg" />
                        <p class="font-[500]">+ Upload Image</p>
                    </div>
                    <p class="text-sm text-grey">Image must be below 1024x1024px. <br/>Use PNG or JPG format.</p>
                </div>
            </div>

            <div class="bg-light-grey rounded-lg my-8 py-5 px-5 flex flex-col items-center gap-4 text-grey">
                <div class="flex justify-between w-full items-center gap-6">
                    <label for="firstName" class="min-w-max">First Name</label>
                    <input type="text" id="firstName" class="w-[70%] outline-0 font-extralight text-sm border-borders border rounded-lg px-4 py-4" />
                </div>
                <div class="flex justify-between w-full items-center gap-6">
                    <label for="lastName" class="min-w-max">Last Name</label>
                    <input type="text" id="lastName" class="w-[70%] outline-0 font-extralight text-sm border-borders border rounded-lg px-4 py-4" />
                </div>
                <div class="flex justify-between w-full items-center gap-6">
                    <label for="email" class="min-w-max">Email</label>
                    <input type="email" id="email" class="w-[70%] outline-0 font-extralight text-sm border-borders border rounded-lg px-4 py-4" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.upload:hover img{
    transform: scale(1.2);
}
</style>
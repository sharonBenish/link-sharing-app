<script lang="ts" setup>
import { useRouter } from 'vue-router';

const props = defineProps<{
  activeTab: string
}>()
const router = useRouter();
const emit = defineEmits(['tabChanged'])

function changeTab (tab: string){
    emit('tabChanged', tab)
}

function goToLogin() {
    router.push({ name: 'login' });
}
</script>

<template>
    <div class="rounded-lg py-4 px-4 lg:px-6 bg-white flex items-center justify-between">
        <div>
            <img class="sm:hidden" src="/src/assets/images/logo-devlinks-small.svg" />
            <img class="max-sm:hidden" src="/src/assets/images/logo-devlinks-large.svg" />
        </div>
        <div class="flex gap-2 md:gap-4 items-center">
            <button class="w-min py-2.5 px-2.5 md:px-4 rounded-md cursor-pointer font-[500] flex gap-2 items-center justify-center" @click="changeTab('Links')" :class="activeTab === 'Links'? 'bg-light-purple text-purple': 'text-grey bg-white'">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" :class="activeTab === 'Links'? 'fill-purple': 'fill-grey'" viewBox="0 0 16 16"><path d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z"/></svg><span class="max-md:hidden font-[500]">Links</span>
            </button>
            <button class="w-max py-2.5 px-2.5 md:px-4 rounded-md cursor-pointer font-[500] flex gap-2 items-center" @click="changeTab('Profile Details')" :class="activeTab === 'Profile Details'? 'bg-light-purple text-purple': 'text-grey bg-white'">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path :class="activeTab === 'Profile Details'? 'fill-purple': 'fill-grey'" d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z"/></svg>
                <span class="max-md:hidden font-[500]">Profile Details</span>
            </button>
        </div>
        <div class="flex gap-4 md:gap-6 items-center">
            <RouterLink :to="{name: 'preview'}" class="w-full py-2.5 px-2.5 md:px-4 rounded-md border border-purple bg-white cursor-pointer text-purple font-[500] flex gap-2 items-center hover:bg-light-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="fill-purple md:hidden" viewBox="0 0 20 20"><path d="M19.61 9.62c-.03-.064-.714-1.583-2.225-3.095-2.023-2.02-4.572-3.088-7.385-3.088-2.812 0-5.362 1.068-7.382 3.088C1.106 8.037.422 9.556.391 9.62a.944.944 0 0 0 0 .761c.029.064.713 1.583 2.226 3.095 2.021 2.02 4.57 3.086 7.383 3.086 2.813 0 5.362-1.067 7.381-3.086 1.513-1.512 2.197-3.03 2.226-3.095a.946.946 0 0 0 .003-.761Zm-3.599 2.578c-1.677 1.651-3.7 2.49-6.01 2.49-2.313 0-4.334-.839-6.01-2.491A10.185 10.185 0 0 1 2.307 10a10.192 10.192 0 0 1 1.686-2.196C5.667 6.15 7.688 5.312 10 5.312s4.333.839 6.009 2.492c.659.652 1.226 1.39 1.685 2.196a10.19 10.19 0 0 1-1.685 2.197h.002Zm-6.01-5.636a3.438 3.438 0 1 0 0 6.876 3.438 3.438 0 0 0 0-6.876Zm0 5A1.562 1.562 0 1 1 10 8.438a1.562 1.562 0 0 1 0 3.124Z"/></svg><span class="max-md:hidden font-[500]">Preview</span>
            </RouterLink>
            <button @click="goToLogin">
                <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><circle cx="2.308" cy="2.308" r="2.308"/><circle cx="2.308" cy="10" r="2.308"/><circle cx="2.308" cy="17.692" r="2.308"/></g></svg>
            </button>
        </div>
    </div>
</template>
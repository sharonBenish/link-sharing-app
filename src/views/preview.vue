<script setup lang="ts">
import Codepen from '@/components/Icons/Codepen.vue';
import Codewars from '@/components/Icons/Codewars.vue';
import Dev from '@/components/Icons/Dev.vue';
import Facebook from '@/components/Icons/Facebook.vue';
import FreeCodeCamp from '@/components/Icons/FreeCodeCamp.vue';
import FrontendMentor from '@/components/Icons/FrontendMentor.vue';
import GitHub from '@/components/Icons/GitHub.vue';
import GitLab from '@/components/Icons/GitLab.vue';
import Hashnode from '@/components/Icons/Hashnode.vue';
import LinkedIn from '@/components/Icons/LinkedIn.vue';
import StackOverflow from '@/components/Icons/StackOverflow.vue';
import Twitch from '@/components/Icons/Twitch.vue';
import Twitter from '@/components/Icons/Twitter.vue';
import YouTube from '@/components/Icons/YouTube.vue';
import { useProfileStore } from '@/stores/profileStore';
import { onMounted, ref } from 'vue';

const profileStore = useProfileStore()
const { firstName, lastName, email, profileImage, links } = profileStore

const linkOptions = [
    {
        icon: GitHub,
        name: 'GitHub',        
    },
    {
        icon: YouTube,
        name: 'YouTube',        
    },
    {
        icon: Twitter,
        name: 'Twitter',        
    },
    {
        icon: LinkedIn,
        name: 'LinkedIn',        
    },
    {
        icon: Facebook,
        name: 'Facebook',        
    },
    {
        icon: FrontendMentor,
        name: 'Frontend Mentor',        
    },
    {
        icon: Twitch,
        name: 'Twitch',        
    },
    {
        icon: Dev,
        name: 'Dev.to',        
    },
    {
        icon: Codewars,
        name: 'Codewars',        
    },
    {
        icon: Codepen,
        name: 'Codepen',        
    },
    {
        icon: FreeCodeCamp,
        name: 'FreeCodeCamp',        
    },
    {
        icon: GitLab,
        name: 'GitLab',        
    },
    {
        icon: Hashnode,
        name: 'Hashnode',        
    },
    {
        icon: StackOverflow,
        name: 'Stack Overflow',        
    },
]

// Function to return the correct icon
const getIcon = (name: string) => {
  const found = linkOptions.find((link) => link.name === name);
  return found?.icon
};

const getBg = ((name: string)=>{
    switch (name){
        case 'GitHub':
        return 'bg-[#1a1a1a]'

        case 'GitLab':
        return 'bg-[#eb4824]';

        case 'Hashnode':
        return 'bg-[#0230d4]';

        case 'LinkedIn':
        return 'bg-[#2e69ff]';
        
        case 'Facebook':
        return 'bg-[#2442ae]';

        case 'Codewars':
        return 'bg-[#891a50]';

        case 'Dev.to':
        return 'bg-[#333333]';

        case 'Stack Overflow':
        return 'bg-[#ec7200]';

        case 'Frontend Mentor':
        return 'bg-[#ffffff] border border-borders text-dark-grey!';

        case 'FreeCodeCamp':
        return 'bg-[#302267]';

        case 'Twitter':
        return 'bg-[#44b8e9]';

        case 'Twitch':
        return 'bg-[#ff3fc9]';

        case 'Codepen':
        return 'bg-[#1a8948]';

        case 'YouTube':
        return 'bg-[#ee3a3a]'
}})

const imagePreview = ref()

onMounted(()=>{
    if (profileImage){
        imagePreview.value = URL.createObjectURL(profileImage as File)
    }
})
</script>

<template>
    <div class="h-screen">
        <div class="h-65 bg-purple rounded-b-4xl block pt-4 relative">
            <div class="bg-white flex justify-between py-4 px-4 mt-4 mx-10 rounded-xl">
                <RouterLink :to="{name: 'dashboard'}" class="border-purple border bg-white text-purple py-2 px-5 rounded-lg font-[600]">Back to Editor</RouterLink>
                <RouterLink :to="{name: 'dashboard'}" class="border-purple border bg-white text-purple py-2 px-5 rounded-lg font-[600]">Share Link</RouterLink>
            </div>

            <div class="bg-white rounded-2xl mt-8 py-8 px-8 min-h-30 flex items-center justify-center min-w-110 absolute top-30 drop-shadow-lg left-1/2 -translate-x-1/2">
                 <div v-if="firstName" class="flex flex-col gap-2 items-center">
                    <img v-if="profileImage" :src="imagePreview" class="h-30 w-30 rounded-full" />
                    <p>{{ firstName }}  {{ lastName }}</p>
                    <p>{{ email }}</p>
                    <div v-for="link in links" class="h-12 w-100 flex text-sm gap-4 rounded-lg px-4 items-center text-white mt-4" :class="getBg(link.title)">
                        <component :is="getIcon(link.title)" :class="link.title === 'Frontend Mentor'? 'text-dark-grey!': 'text-white!'" />
                        <p>{{ link.title }}</p>
                    </div>
                 </div>
                 <p v-else>This person doesn't have anything to show!</p>
            </div>
        </div>

    </div>
</template>
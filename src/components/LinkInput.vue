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
import YouTube from '@/components/Icons/YouTube.vue';import { computed, ref } from 'vue';

const props = defineProps<{
  number: number,
  linkDetails: Link
}>()

type Link = {
    name: string
    link: string
}

const emit = defineEmits(['remove', 'linkTypeChosen'])

// const linkName = ref(props.linkDetails.name)
const link = defineModel()

const show = ref(false);

const toggleDropdown = ()=>{
    show.value = !show.value
}

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

// const link = ref({
//     name: 'GitHub',
//     link: ''
// })

const selectedLink = computed(()=>{
    switch (props.linkDetails.name){
        case 'GitHub':
        return GitHub;

        case 'GitLab':
        return GitLab;

        case 'Hashnode':
        return Hashnode;

        case 'LinkedIn':
        return LinkedIn;
        
        case 'Facebook':
        return Facebook;

        case 'Codewars':
        return Codewars;

        case 'Dev.to':
        return Dev;

        case 'Stack Overflow':
        return StackOverflow;

        case 'Frontend Mentor':
        return FrontendMentor;

        case 'FreeCodeCamp':
        return FreeCodeCamp;

        case 'Twitter':
        return Twitter;

        case 'Twitch':
        return Twitch;

        case 'Codepen':
        return Codepen;

        case 'YouTube':
        return YouTube

    }
})

function selectLink (name: string, idx: number){
    // linkName.value = name;
    show.value = false;
    emit('linkTypeChosen', { name, idx})
}

function removeLink (idx: number){
    emit('remove', idx)
}
</script>

<template>
    <div class="bg-light-grey rounded-lg my-8 py-6 px-4 lg:px-6 ">
        <div class="flex justify-between text-grey">
            <div class="flex items-center gap-2 hover:cursor-grab">
                <img src="/src/assets/images/icon-drag-and-drop.svg" />
                <p class="font-[600]">Link #{{number + 1}}</p>
            </div>
            <p class="cursor-pointer" @click="removeLink(number)">Remove</p>
        </div>
        <div class="flex flex-col gap-4 mt-2 text-dark-grey">
            <div class="relative">
                <small>Platform</small>
                <div @click="toggleDropdown" class="flex justify-between px-4 py-3 border border-borders rounded-md hover:cursor-pointer mt-1">
                    <div class="flex items-center gap-4">
                        <component :is="selectedLink" />
                        <p>{{ linkDetails.name }}</p>
                    </div>
                    <img src="/src/assets/images/icon-chevron-down.svg" />
                </div>
                <ul v-if="show" class="absolute w-full mt-4 max-h-[200px] overflow-scroll bg-white border border-borders rounded-lg px-4 py-1">
                    <li v-for="option, n of linkOptions" :key="n" class="flex items-center text-[#737373] hover:text-purple! gap-4 border-b-1 border-borders py-3" @click="selectLink(option.name, number)">
                        <!-- <img src="/src/assets/images/icon-devto.svg" /> -->
                            <component :is="option.icon" class="hover:text-inherit!"/>
                        <p>{{option.name}}</p>
                    </li>
                </ul>
            </div>
            
            <div>
                <small>Link</small>
                <div class="flex gap-2.5 px-4 py-3 border border-borders rounded-md mt-1">
                    <img src="/src/assets/images/icon-link.svg" />
                    <input class="w-full outline-0 font-extralight" v-model="link"/>
                </div>
            </div>
        </div>
    </div>
</template>
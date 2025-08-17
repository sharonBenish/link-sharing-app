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
import LinkInput from '@/components/LinkInput.vue';
import ProfileDetails from '@/components/ProfileDetails.vue';
import YouTube from '@/components/Icons/YouTube.vue';
import TopNav from '@/components/TopNav.vue';
import { computed, ref, type Component } from 'vue';
import draggableComponent from 'vuedraggable';
import { useProfileStore } from '@/stores/profileStore';

const profileStore = useProfileStore();

const { saveDetails } = profileStore

const tabs = ['Links', 'Profile Details'];

const activeTab = ref('Links')

const links= ref<Array<Link>>([])

function addLink (){
    links.value.push({
        name: 'GitHub',
        link: ''
    })
}

function removeLink (idx:number){
    links.value.splice(idx, 1)

}

function updateLinkName (obj: {name: string, idx: number}){
    links.value[obj.idx].name = obj.name;
}

function changeActiveTab (tab: string){
    activeTab.value = tab
}

function changeProfileImage (file: File | null){
    profileDetails.value.profileImage = file
}

type Link = {
    name: string
    link: string
}

type ProfileDetails = {
    profileImage: File | null
    firstName: string
    lastName: string
    email: string
}

const profileDetails = ref<ProfileDetails>({
    profileImage: null,
    firstName: '',
    lastName: '',
    email: ''
})

const imagePreview = computed(()=>{
    if (profileDetails.value.profileImage){
        return URL.createObjectURL(profileDetails.value.profileImage)
    }
})

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
const profileDetailsRef = ref()
function saveProfileDetails(){
    const isValid = profileDetailsRef.value.validateForm()
    // if (isValid){
    //     saveDetails(profileDetails.value, links.value)
    // }
}
</script>

<template>
    <div class="min-h-screen bg-light-grey flex flex-col gap-6 px-4 py-6">
        <TopNav :active-tab="activeTab" @tab-changed="changeActiveTab" />
        <div class="rounded-lg py-4 lg:py-6 flex items-stretch gap-8">
            <div class="lg:flex max-lg:hidden w-[40%] h-full bg-white rounded-lg py-4 lg:py-6 px-4 lg:px-6 items-center justify-center relative">
                <!-- <div class="h-full border w-full bg-auto bg-center bg-no-repeat bg-[url(src/assets/images/illustration-phone-mockup.svg)]"></div> -->
                <img :src="imagePreview" class="h-25 w-25 rounded-full absolute top-22" />
                <div class="absolute top-50.5 z-10 bg-white min-w-50 text-center" v-if="profileDetails.firstName || profileDetails.lastName">{{profileDetails.firstName}} {{ profileDetails.lastName }}</div>
                <div class="absolute w-60 max-h-80 overflow-scroll top-75">
                    <div v-for="link in links" class="h-12 flex text-sm gap-4 rounded-lg px-4 items-center text-white mb-4" :class="getBg(link.name)">
                        <component :is="getIcon(link.name)" :class="link.name === 'Frontend Mentor'? 'text-dark-grey!': 'text-white!'" />
                        <p>{{ link.name }}</p>
                    </div>
                </div>
                <div class="absolute top-57 z-10 bg-white min-w-50 text-center text-sm text-grey" v-if="profileDetails.email">{{profileDetails.email}}</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-full!" width="308" height="632" fill="none" viewBox="0 0 308 632"><path stroke="#737373" d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"/><path fill="#fff" stroke="#737373" d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"/><circle cx="153.5" cy="112" r="48" fill="#EEE"/><rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8"/><rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4"/><rect width="237" height="44" x="35" y="278" fill="#EEE" rx="8"/><rect width="237" height="44" x="35" y="342" fill="#EEE" rx="8"/><rect width="237" height="44" x="35" y="406" fill="#EEE" rx="8"/><rect width="237" height="44" x="35" y="470" fill="#EEE" rx="8"/><rect width="237" height="44" x="35" y="534" fill="#EEE" rx="8"/></svg>
            </div>
            <div class="flex-1 bg-white flex flex-col rounded-lg py-4 lg:py-8 px-4 lg:px-10">
                <ProfileDetails ref="profileDetailsRef" v-show="activeTab === 'Profile Details'" @changeImage=changeProfileImage v-model:first-name="profileDetails.firstName" v-model:last-name="profileDetails.lastName" v-model:email="profileDetails.email" :file="profileDetails.profileImage"/>
                <div  v-show="activeTab === 'Links'">
                    <h1 class="text-2xl lg:text-3xl font-[700] my-2">Customize your links</h1>
                    <p class="text-grey my-2">Add/edit/remove links below and then share all your profiles with the world!</p>
                    <button class="w-full mt-8 py-2.5 rounded-md bg-white border-purple border hover:bg-light-purple cursor-pointer text-purple font-[500]" @click="addLink">+ Add new link</button>

                    <draggableComponent v-if="links.length" v-model="links" class="h-[400px] overflow-scroll">
                        <template #item="{element, index}">
                            <LinkInput :key="index" :number="index" :linkDetails="element"  @remove="removeLink" @link-type-chosen="updateLinkName" v-model="links[index].link"/>
                        </template>
                    </draggableComponent>
                    
                    <div class="bg-light-grey rounded-lg my-8 py-8" v-else>
                        <div class="flex flex-col items-center px-4 lg:px-6">
                            <img src="/src/assets/images/illustration-empty.svg" class="max-sm:max-w-[120px]" />

                            <h2 class="font-[700] text-2xl lg:text-3xl mb-6">Let's get you started</h2>
                            <p class="text-grey text-center">Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</p>
                        </div>
                    </div>
                </div>
                <button class="flex ml-auto justify-center items-center rounded-lg py-3 px-8 bg-purple text-white font-[500] cursor-pointer hover:bg-purple-hover" @click="saveProfileDetails()">Save</button>
            </div>
        </div>
    </div>
</template>
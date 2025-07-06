import { defineStore } from "pinia";

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

export const useProfileStore = defineStore('profileStore', {
    state: () =>({
        profileImage: null as File | null,
        firstName: '',
        lastName: '',
        email: '',
        links: [] as Link[]
    }),

    actions: {
        saveDetails(profileDetails: ProfileDetails, links: Link[]){
            this.profileImage = profileDetails.profileImage
            this.firstName = profileDetails.firstName
            this.lastName = profileDetails.lastName
            this.email = profileDetails.email
            this.links = links
        }
    }
})
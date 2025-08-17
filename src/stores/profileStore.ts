import type { Link } from "@/types/link";
import type { ProfileDetails } from "@/types/profile";
import { defineStore } from "pinia";

export const useProfileStore = defineStore('profileStore', {
    state: () =>({
        profileImage: null as File | null | undefined | string,
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
import type { Link } from "@/types/link";
import { defineStore } from "pinia"; 

export const useLinkStore = defineStore('linkStore', {
    state: () => ({
        links: [] as Link[]
    }),

    actions: {
        addLinks(name: string, link: string) {
            
        },
    }
});
import { defineStore } from "pinia"; 

export const useLinkStore = defineStore('linkStore', {
    state: () => ({
        links: [] as { name: string, link: string }[]
    }),

    actions: {
        addLinks(name: string, link: string) {
            this.links.push({ name, link });
        },
    }
});
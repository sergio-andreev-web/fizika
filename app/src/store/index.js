import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
    }),
    actions: {
        setName(name) {
            this.name = name;
            localStorage.setItem('username', name);
        },
    },
});

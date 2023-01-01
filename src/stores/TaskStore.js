import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id:1, title: 'Learn Laravel9', isFav: true},
            {id:2, title: 'Learn Pinia', isFav: false}
        ],
        name: 'Haikal'
    })
})
import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id:1, title: 'Learn Laravel9', isFav: true},
            {id:2, title: 'Learn Pinia', isFav: false}
        ],
    //    name: 'Haikal'
    }),

    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount(){
            return this.tasks.reduce((p, c) => {
                return c.isFav? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    }
})
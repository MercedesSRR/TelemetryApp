/*
Pinia Data Store.
Copyright (c) 2023. Scott Henshaw, Kibble Game Studios Inc. All Rights Reserved.
*/
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('info', {

    state: () => ({
        mainVersion: 0,
        subVersion: 0,
        today: new Date(),
    }),

    getters: {
        name: state => { return "Final Project" },
        version: state => {

            const month = state.today.getUTCMonth() + 1;  // Jan = 0
            const day = state.today.getUTCDate();
            return `v${state.mainVersion}`+
            `.${month}`+
            `.${day}`+
            `.${state.subVersion}`
        },
    },

    actions: {

        increment() {
            this.subVersion++;
            if (this.subVersion > 9) {
                this.mainVersion++;
                this.subVersion = 0
            }
        }
    }
})

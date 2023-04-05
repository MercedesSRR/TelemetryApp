/*
Pinia Data Store.
Copyright (c) 2023. Scott Henshaw, Kibble Game Studios Inc. All Rights Reserved.
*/
import Axios from 'axios';
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
        },

        pingDataserver() {
            let server = "http://127.0.0.1:5001/finalproject-efd0d/us-central1"
            if (this.development)
                server = "http://127.0.0.1:4000"
            
            Axios.post(`${server}/helloWorld`, {})
                .then( response => {
                    console.log( response )
                })
        }
    }
})

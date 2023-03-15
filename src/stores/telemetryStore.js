/*
Pinia Data Store.
Copyright (c) 2023. Scott Henshaw, Kibble Game Studios Inc. All Rights Reserved.
*/
import { defineStore } from 'pinia'
import { FirebaseCloudService } from './remote/FirebaseCloudService.js'

const cloud = new FirebaseCloudService();
cloud.connect();

export const useTelemetryStore = defineStore('telemetryStore', {

    state: () => ({
        recordList: [{
            row: 0,
            col: 0,
            playerAction: 0,
            deltaTime: new Date().getMilliseconds(),
            buildId: '0.0.0.1 build 1234'
        },{
            row: 2,
            col: 2,
            playerAction: 2,
            deltaTime: new Date().getMilliseconds(),
            buildId: '0.0.2.1 build 1235'
        },{
            row: 3,
            col: 3,
            playerAction: 3,
            deltaTime: new Date().getMilliseconds(),
            buildId: '0.0.3.1 build 1236'
        },{
            row: 4,
            col: 4,
            playerAction: 4,
            deltaTime: new Date().getMilliseconds(),
            buildId: '0.0.4.1 build 1237'
        }]
    }),

    getters: {
        trecList( state ) {
            return state.recordList;
        },

        recordCount( state ) {
            return state.recordList.length;
        }
    },

    actions: {
        addItem( anItem ) {
            this.recordList.push( anItem )
        },

        fetch() {
            //fetch all telemetry data from external source
            return new Promise((resolve, reject) => {
                cloud.fetchThen()
                    .then( data => {
                        this.recordList = data;
                        resolve( true )
                    })
                    .catch( error => {
                        console.log("Boom, fetch failed");
                        reject()
                    })
            });
                
        }
    }
})
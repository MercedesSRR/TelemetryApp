/*Copyright (c) 2023. Mercedes Senties, All Rights Reserved*/

import CloudService from "./CloudService";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export class FirebaseCloudService extends CloudService{
    
    #_firebaseConfig;

    constructor() {
        super();

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        this.#_firebaseConfig = {
            apiKey: "AIzaSyBBCEwk49eflEvOPqYPR1rOCRQUnFQKvM8",
            authDomain: "finalproject-efd0d.firebaseapp.com",
            projectId: "finalproject-efd0d",
            storageBucket: "finalproject-efd0d.appspot.com",
            messagingSenderId: "910021269817",
            appId: "1:910021269817:web:8ef37514205f52dc6db0e8",
            measurementId: "G-LDD8PM5MHS"
        };

        this.app = {}
        this.analytics = {}
        this.db = {}
    }
    
    
    connect() {
        //overload to connect with remote service
        // Initialize Firebase
        this.app = initializeApp(this.#_firebaseConfig);
        this.analytics = getAnalytics(this.app);
        this.db = getFirestore(this.app)
    }

    save() {
        //override to support CloudService save of record/struct
    }

    load() {
        //overload to upload a single record back to the service
    }

    loadAll() {
        //overload to use the CloudService to fetch a list of things
    }
}
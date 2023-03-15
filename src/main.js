import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

class Main {

    constructor () {

        this.vue = createApp( App );
        this.vue.use( createPinia() );
        this.vue.use( router );

        this.vue.component( App );
        this.vue.mount('#app')
    }
}

// Main entry point of the application
document.addEventListener('DOMContentLoaded', event => {

    const app = new Main()
})

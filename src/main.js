import './assets/main.css'
import './assets/fontawesome-free-6.7.2-web/css/all.min.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'


const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

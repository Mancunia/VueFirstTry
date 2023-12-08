import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const forumFirstTry = createApp(App)

forumFirstTry.use(router)// use router

forumFirstTry.mount('#app')

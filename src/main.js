import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import AppDate from './components/AppDate.vue'
import store from '@/store'

const forumFirstTry = createApp(App)

// register basecomponent
forumFirstTry.component('AppDate', AppDate)

forumFirstTry.use(router)// use router
forumFirstTry.use(store)// use store

forumFirstTry.mount('#app')

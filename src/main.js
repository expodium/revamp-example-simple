import { createApp } from 'vue'
import './tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes
})

// app.use(vuetify)
app.use(router)
app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { surveyPlugin } from "survey-vue3-ui";

import App from './App.vue'
import router from './router'

import "survey-core/defaultV2.min.css";

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(surveyPlugin)
app.mount('#app')
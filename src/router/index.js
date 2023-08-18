import { createRouter, createWebHistory } from 'vue-router'
import SurveyJS from "@/components/SurveyJS.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/surveyjs',
      name: 'surveyjs',
      component: SurveyJS
    }
  ]
})

export default router

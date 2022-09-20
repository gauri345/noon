import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import RecipeList from "@/components/RecipeList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: RecipeList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

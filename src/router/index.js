import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Twolive.vue'
import Livechat from "../views/Livechat.vue"
import Football from "../views/FootballUpdate.vue"
import Calender from "../views/Calender.vue"
import TwoCalender from "../views/TwoCalender.vue"
import ThreeCalender from "../views/ThreeCalender.vue"
import TwoAm from "../views/TwoAm.vue"
import TwoPm from "../views/TwoPm.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/livechat",
    name: "Livechat",
    component: Livechat
  },
  {
    path: "/football",
    name: "Football",
    component: Football
  },
  {
    path: "/highlights",
    name: "Highlights",
    component: Calender
  },
  {
    path:"/twocalender",
    name:"TwoCalender",
    component: TwoCalender
  },
  {
    path: "/twoam",
    name: "TwoAm",
    component:TwoAm
  },
  {
    path: "/twopm",
    name: "TwoPm",
    component:TwoPm
  },
  {
    path: "/threecalender",
    name: "ThreeCalender",
    component:ThreeCalender
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StaffInfo from '../views/StaffInfo.vue'
import Commands from '../views/Commands.vue'
import HallOfFame from '../views/HallOfFame.vue'
import Notices from '../views/Notices.vue'
import Schedule from '../views/Schedule.vue'
import EventDetails from '../views/EventDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/staff',
        name: 'StaffInfo',
        component: StaffInfo
    },
    {
        path: '/commands',
        name: 'Commands',
        component: Commands
    },
    {
        path: '/hall-of-fame',
        name: 'HallOfFame',
        component: HallOfFame
    },
    {
        path: '/notices',
        name: 'Notices',
        component: Notices
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: Schedule
    },
    {
        path: '/event/:id',
        name: 'EventDetails',
        component: EventDetails,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

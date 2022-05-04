import { createRouter, createWebHistory } from "vue-router";
const Main = () => import('@/views/Main/Main.vue')
const Day = () => import('@/views/Day/Day.vue')
const Date = () => import('@/views/DateMatter/Date.vue')
const Task = () => import('@/views/Task/Task.vue')
const Memorandum = () => import('@/views/Memorandum/Memorandum.vue')
const Setting = () => import('@/views/Setting/Setting.vue')
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Main',
        component: Main
    }, {
        path: '/day',
        name: 'Day',
        component: Day
    }, {
        path: '/task',
        name: 'Task',
        component: Task
    },
    {
        path: '/date',
        name: 'Date',
        component: Date
    },
    {
        path: '/memorandum',
        name: 'Memorandum',
        component: Memorandum
    },
    {
        path: '/setting',
        name: 'Setting',
        component: Setting
    },]
})
export default router

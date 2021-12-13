import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [{
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/pictures',
        name: 'Pictures',
        component: () => import('../views/Pictures.vue')
    },
    {
        path: '/videos',
        name: 'Videos',
        component: () => import('../views/Videos.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/contactsuccess',
        name: 'ContactSuccess',
        component: () => import('../views/ContactSuccess.vue')
    },
]

const router = createRouter({
    scrollBehavior() {
        // Scrolling to top on route change is not default; this goes to top on every change
        return {
            top: 0
        }
    },
    history: createWebHashHistory(),
    routes
})


export default router
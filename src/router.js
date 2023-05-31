import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue'
import AppContact from './pages/AppContact.vue'
import AppAbout from './pages/AppAbout.vue'
import ProjectList from './pages/ProjectList.vue'

const router = createRouter(
    {
        history: createWebHistory(),
        routes:[
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/Contact',
                name: 'Contact',
                component: AppContact
            },  
            {
                path: '/About',
                name: 'About',
                component: AppAbout
            }, 
            {
                path: '/Projects',
                name: 'Project',
                component: ProjectList
            }  

        ],
    }
);

export { router };
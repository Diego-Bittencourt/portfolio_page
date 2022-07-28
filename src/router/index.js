import {createRouter, createWebHistory} from 'vue-router';

import ProjectList from '../pages/ProjectList.vue';
import ContactInfo from '../pages/ContactInfo.vue';
import FrontPainel from '../pages/FrontPainel.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: FrontPainel
        },
        {
            path: '/projects',
            component: ProjectList
        },
        {
            path: '/contact',
            component: ContactInfo
        }
    ],
});

export default router;
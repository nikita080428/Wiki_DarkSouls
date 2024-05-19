import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import HomePage from './views/HomePage.vue';
import Page2 from './views/Page2.vue';


export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },
        {
            path: '/page2',
            name: 'page2',
            component: Page2
        }
    ]
})
import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import HomePage from './views/HomePage.vue';
import CardPage from './views/CardPage.vue';
import CategoryPage from './views/CategoryPage.vue';


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
            path: '/category',
            name: 'CategoryPage',
            component: CategoryPage,
        },
        {
            path: '/CategoryPage/card',
            name: 'CardPage',
            component: CardPage
        }
    ]
})
import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import HomePage from './views/HomePage.vue';
import CardPage from './views/CardPage.vue';
import CategoryPage from './views/CategoryPage.vue';
import CardCreatePage from './views/CardCreatePage.vue';
import ForumPage from './views/ForumPage.vue';



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
            path: '/category/:categors',
            name: 'CategoryPage',
            component: CategoryPage,
        },
        {
            path: '/category/:categors/:cardName',
            name: 'CardPage',
            component: CardPage
        },
        {
            path: '/cardCreate',
            name: 'CardCreatePage',
            component: CardCreatePage
        },
        {
            path: '/forum',
            name: 'ForumPage',
            component: ForumPage
        }
    ]
})
<script>
import axios from 'axios';
import { computed } from 'vue';

export default {
    data() {
        return {
            categors: '',
            cards: ''
        }
    },
    computed: {
            CategorsName() {
                return this.$route.params.categors
            }
        },
        mounted(){
            this.categors = this.CategorsName
        },
    methods: {
        goCardPage() {
            this.$router.push({name: 'CardPage'});
        },
        async loadCard(categors){
            let response = await axios.get(`/${categors}`);
            this.cards = response.data;
        }
    },
    watch: {
        $route(){
            this.categors = this.CategorsName
            this.loadCard(this.categors)
        }
    }
}
</script>

<template>
    <div class="container d-flex justify-content-between" style="margin-top: 5%;">
    <main style="max-width: 930px;" >
        <header class="d-flex justify-content-center">
            <h1 class="pb-3 border-bottom">Категории</h1>
        </header>
        <section class="container d-flex justify-content-center" style="margin-top: 5%;">
            <div class="d-flex flex-column align-items-center">
            <hr style="width: 930px;">
            <div class="row">
                <div class="col" v-for="card in cards">
                    <div class="card" style="width: 18rem; height: 22em; background-color: #F9F9F9;">
                        <img :src="`/src/assets/${categors}/${card.image}.webp`  " class="card-img-top" alt="..." style="max-height: 160px;">
                        <div class="card-body">
                            <h5 class="card-title">{{ card.title }}</h5>
                            <p class="card-text" style="margin: 0;">Тип: {{card.type}}</p>
                            <p class="card-text">Прокачка: {{ card.updeta }}</p>
                            <a @click="goCardPage()" class="btn btn-primary">Перейти</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
        

    </main>
    <aside>
        <h3>Доп меню</h3>
    </aside>
</div>
</template>


<style>

</style>
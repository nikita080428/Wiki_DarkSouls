<script>
import axios from 'axios';

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
        goCardPage(card) {
            this.$router.push({name: 'CardPage', params: {
                cardName: card.title
            }});
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
                            <a @click="goCardPage(card)" class="btn btn-primary">Перейти</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
        <div style="margin-top: 250px;">
            <form>
  <div class="mb-3">
    <label for="itex" class="form-label">Поиск предмета</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="itex">
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        

    </main>
    <aside class="container" style=" margin-left: 5%;">
        <div style="background-color: #F9F9F9; border-radius: 15px; box-shadow: -1px -12px 8px -4px rgba(34, 60, 80, 0.2) inset;">
            <section class="container  d-flex flex-column align-items-center">
            <h3>Дискорд</h3>
            <img style="max-width: 80px;" src="/src/assets/aside/discord.png" alt="Дискорд">
            <hr style="width: 276px;">
            <div>
                <p style="margin: 0;">Онлайн: 56/100</p>
            </div>
            <hr style="width: 276px;">
        </section>
        <section class="d-flex gap-3 ">
            <div>
                <p>Админы</p>
            </div>
            <div>
                <img style="margin-top: 15px;" src="/src/assets/aside/Arrow.png" alt="">
                <p style="font-size: 18px; font-weight: 600;">Dom rus<br>Константин</p>
            </div>
        </section>
        <hr style="width: 276px;">
        <section class="d-flex gap-3 ">
            <div>
                <p>Редакторы</p>
            </div>
            <div>
                <img style="margin-top: 15px;" src="/src/assets/aside/Arrow.png" alt="">
                <p style="font-size: 18px; font-weight: 600;">Саня Аморский<br>Sister 12 rus</p>
            </div>
        </section>
        </div>
    </aside>
</div>
</template>


<style>

</style>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            card: '',
            categors: '',
            cardName: '',
            good: false
        }
    },
    computed: {
            CategorsName() {
                return this.$route.params.categors
            },
            TitleName(){
                return this.$route.params.cardName
            }
        },
        mounted(){
            this.categors = this.CategorsName,
            this.cardName = this.TitleName,
            this.loadCardtitle(this.categors)
        },
        methods: {
            async loadCardtitle(categors){
                let response = await axios.get(`/${categors}/card`, {
                params: {
                    title: this.cardName
                }
            });
            this.card = response.data;
            this.good = true;
        }
        },
        watch: {
        $route(){
            this.cardName = this.TitleName,
            this.loadCardtitle(this.categors)
        }
    }
}
</script>

<template>

    <div v-if="good" class="container d-flex justify-content-between" style="margin-top: 5%;">
    <main v-if="categors != 'location'" style="max-width: 930px;" >
        <header class="d-flex justify-content-center" >
            <h1 class="pb-3 border-bottom">{{ card[0].title }}</h1>
        </header>
        <section class="container d-flex justify-content-center" style="margin-top: 5%; width: 930px; background-color: #F9F9F9; border-radius: 15px; box-shadow: -1px -12px 8px -4px rgba(34, 60, 80, 0.2) inset;">
            <div class="d-flex flex-column align-items-center">
                <!-- Контент -->
            <div style="margin-top: 1%;">
                <h3>Характеристика</h3>
            </div>

            <div style="height: 150px;">
               
            </div>
        </div>
        </section>
        <section class="container d-flex justify-content-center" style="margin-top: 5%; background-color: #F9F9F9; border-radius: 15px; box-shadow: -1px -12px 8px -4px rgba(34, 60, 80, 0.2) inset;">
            <div class="d-flex flex-column align-items-center">
                <!-- Контент -->
            <div style="margin-top: 1%;">
                <h3>Местонахождение</h3>
            </div>
            <div style="height: 150px;">
               
            </div>
        </div>
        </section>
        <section class="container d-flex justify-content-center" style="margin-top: 5%; background-color: #F9F9F9; border-radius: 15px; box-shadow: -1px -12px 8px -4px rgba(34, 60, 80, 0.2) inset;">
            <div class="d-flex flex-column align-items-center">
                <!-- Контент -->
            <div style="margin-top: 1%;">
                <h3>Примечание</h3>
            </div>
            <div style="height: 150px;">
               
            </div>
        </div>
        </section>
        

    </main>
    <aside class="container" style=" margin-left: 5%;">
        <div style="background-color: #F9F9F9; border-radius: 15px; box-shadow: -1px -12px 8px -4px rgba(34, 60, 80, 0.2) inset;">
            <section class="container  d-flex flex-column align-items-center">
            <img :src="`/src/assets/${categors}/${card[0].image}.webp`" alt="Картинка оружия">
            <h3>{{ card[0].title }}</h3>
            <p style="font-size: 18px; color: gray; font-weight: 600; margin: 0;" >
                Класс оружия: Меч
            </p>
            <hr style="width: 276px;">
            <div>
                <p style="margin: 0; font-size: 18px;">Улучшение: {{ card[0].updeta }}</p>
            </div>
            <hr style="width: 276px;">
        </section>
        <section class="d-flex gap-3 ">
            <div>
                <p>Где найти</p>
            </div>
            <div>
                <img style="margin-top: 15px;" src="/src/assets/aside/Arrow.png" alt="">
                <p style="font-size: 18px; font-weight: 600;">Лес Павших великанов<br>??????</p>
            </div>
        </section>
        <hr style="width: 276px;">
        <section class="d-flex gap-3 ">
            <div>
                <p>Требования</p>
            </div>
            <div>
                <img style="margin-top: 15px;" src="/src/assets/aside/Arrow.png" alt="">
                <p style="font-size: 18px; font-weight: 600;">{{ card[0].requirement[0] }}<br>{{ card[0].requirement[1] }}</p>
            </div>
        </section>
        </div>
    </aside>
</div>
</template>


<style>

</style>
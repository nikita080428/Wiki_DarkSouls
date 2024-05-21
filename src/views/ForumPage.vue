<script>
import axios from 'axios';
export default {
data(){
    return {
        forum: []
    }
},
methods: {
 async loadData(){
    let response = await axios.get('/forum');
    this.forum = response.data;
 }
},
mounted() {
this.loadData();
}
}
</script>

<template>
    <div class="container d-flex justify-content-between" style="margin-top: 5%;">
    <main style="max-width: 930px;" >
        <header class="d-flex justify-content-center">
            <h1 class="pb-3 border-bottom">Форум</h1>
        </header>
        <section class="container d-flex justify-content-center" style="margin-top: 5%; background-color: #F9F9F9;">
            <div class="d-flex flex-column align-items-center">
                <!-- Контент -->
            <div style="margin-top: 5%;">
                <h3>Основные разделы</h3>
            </div>
            <hr style="width: 930px;">
            <div class="row">
                <!---->
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{  }}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Перейти</a>
                        </div>
                    </div>
                </div>
                <!---->
                
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
.card-text{
    font-size: 18px !important;
}
</style>
<script>
import { computed } from 'vue';

export default {
    data() {
        return {
        }
    },
    computed: {
            CategorsName() {
                return this.$route.params.categors
            }
        }
}
</script>

<template>
    <div class="container d-flex justify-content-between" style="margin-top: 5%;">
    <main style="width: 930px;" >
        <header class="d-flex justify-content-center">
            <h1 class="pb-3 border-bottom">Категории</h1>
        </header>
        <section class="container d-flex justify-content-center" style="margin-top: 5%; background-color: #F9F9F9;">
            <div class="d-flex flex-column align-items-center">
                <!-- Контент -->
            <div style="margin-top: 5%;">
                <h3>{{  }}</h3>
            </div>
            <hr style="width: 930px;">

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
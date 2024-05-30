

<script>

export default {
    data(){
    return{
      categors: ['item', 'magic', 'location', 'character']
    }
  }
}
</script>


<template>
    <div class="container d-flex justify-content-between" style="margin-top: 5%;">
    <main style="width: 930px;"  >
        <header class="d-flex justify-content-center">
            <h1 class="pb-3 border-bottom">Добро пожаловать</h1>
        </header>
        <section class="container d-flex justify-content-center" style="margin-top: 5%; background-color: #F9F9F9; border-radius: 15px; box-shadow: -1px -12px 8px -4px rgba(34, 60, 80, 0.2) inset;">
            <div class="d-flex flex-column align-items-center">
                <!-- Контент -->
            <div style="margin-top: 5%;">
                <h3>Обновление</h3>
            </div>
            <hr style="width: 930px;">
            <div style="height: 150px;">
               
            </div>

        </div>
        </section>
        <section class="container d-flex justify-content-center" style="margin-top: 5%; background-color: #F9F9F9; border-radius: 15px; box-shadow: -1px -12px 8px -4px rgba(34, 60, 80, 0.2) inset;">
            <div class="d-flex flex-column align-items-center">
                <!-- Контент -->
            <div style="margin-top: 5%;">
                <h3>Категории</h3>
            </div>
            <hr style="width: 930px;">
            <div style="height: 150px;" class="d-flex justify-content-around gap-4">
               <div class="d-flex flex-column align-items-center" style="min-width: 150px;">
                <button 
                 class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed px-3" style="color: #6E7704;">
                    Экипировка
                </button>
                <hr style="width: 65px; margin: 0;">
                <p style="font-size: 18px;">Палаш</p>
                <p style="font-size: 18px;">Кинжал</p>
               </div>
               <div class="d-flex flex-column align-items-center" style="min-width: 150px;">
                <button 
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed px-3" style="color: #6E7704;">
                    Магия
                </button>
                <hr style="width: 65px; margin: 0;">
                <p style="font-size: 18px;">Стрела души</p>
                <p style="font-size: 18px;">Огненный шар</p>
               </div>
               <div class="d-flex flex-column align-items-center" style="min-width: 150px;">
                <button 
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed px-3" style="color: #6E7704;" >
                Локация
                </button>
                <hr style="width: 65px; margin: 0;">
                <p style="font-size: 18px;">Лес Павших</p>
                <p style="font-size: 18px;">Лагуна</p>
               </div>
            </div>

        </div>
        </section>
        

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
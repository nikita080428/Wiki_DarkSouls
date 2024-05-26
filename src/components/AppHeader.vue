<script>
export default {
  data(){
    return{
      categors: ['item', 'magic', 'location', 'character']
    }
  }
  ,
  methods: {
    goHomePage() {
            this.$router.push({name: 'HomePage'});
        },
        goCategoryPage(categors) {
          console.log(categors)
            this.$router.push({name: 'CategoryPage', params: {categors: categors}});
        },
        goForumPage() {
            this.$router.push({name:'ForumPage'});
        }
  }
}
</script>
<template>
    <div class="flex-shrink-0" style="width: 280px; min-height: 100%; background-color: #00000005 ;">
        <img src="/src/assets/darksouls.png" alt="">
        <div class="p-3">
      <p class="h3 pb-3 link-body-emphasis text-decoration-none border-bottom">Разделы</p>
    </div>
    <ul class="list-unstyled p-2 mb-0 pb-0">
      <li class="mb-1 d-flex align-items-center " @click="goHomePage">
        <img src="/src/assets/menu/home.png" alt="Домик">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed px-3">
          Главная
        </button>
      </li>

      <!-- категории -->

      <li class="mb-1">
        <img src="/src/assets/menu/Group.png" alt="Категории">
        <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed px-3" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Категории
        </button>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 p-3 pt-0 small">
            <li class="pt-2" @click="goCategoryPage(categors[0])">
              <a href="#" class="link-body-emphasis link-dark d-inline-flex text-decoration-none rounded">Экипировка</a>
            </li>
            <li class="pt-2" @click="goCategoryPage(categors[1])">
              <a href="#" class="link-body-emphasis link-dark d-inline-flex text-decoration-none rounded">Магия</a>
            </li>
            <li class="pt-2" @click="goCategoryPage(categors[2])">
              <a href="#" class="link-body-emphasis link-dark d-inline-flex text-decoration-none rounded">Локации</a>
            </li>
            <li class="pt-2 pb-2" @click="goCategoryPage(categors[3])">
              <a href="#" class="link-body-emphasis link-dark d-inline-flex text-decoration-none rounded">Персонажи</a>
            </li>
          </ul>
        </div>
      </li>
      <li class="mb-1 d-flex align-items-center">
        <img src="/src/assets/menu/create.png" alt="Создание">
        <p class="px-3 m-0">Создание</p>
      </li>
      <li class="mb-1 d-flex align-items-center" @click="goForumPage()">
        <img src="/src/assets/menu/forum.png" alt="Форум">
        <p class="p-2 px-3 m-0">Форум</p>
      </li>
      <li class="border-top my-3"></li>
    </ul>

    <!----->
    <div class="p-3">
      <p class="h3 pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">Дополнительное</p>
    </div>
    <ul class="list-unstyled p-2">
      <li class="mb-1 d-flex align-items-center">
        <img src="/src/assets/menu/donat.png" alt="Донат">
        <p class="px-3 m-0">Донат</p>
      </li>
      <li class="mb-1 d-flex align-items-center">
        <img src="/src/assets/menu/bug.png" alt="Баг">
        <p class="px-3 m-0">Баги</p>
      </li>
      <li class="mb-1 d-flex align-items-center">
        <img src="/src/assets/menu/ofSite.png" alt="Официальный сайт">
        <p class="px-3 m-0">Оф.сайт</p>
      </li>
      <li class="mb-1 d-flex align-items-center">
        <img src="/src/assets/menu/FAQ.png" alt="FAQ">
        <p class="px-3 m-0">FAQ</p>
      </li>
    </ul>
    
  </div>
  <!----->


</template>

<style>

</style>
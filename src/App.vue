<script>
import axios from 'axios';
// Компоненты
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router'

// Главная страница
export default {
	components: {
		AppHeader,
		RouterView
	}
};


</script>

<template>
	<div class="app">
		<div class="d-flex">
		<!-- Шапка -->
		<app-header></app-header>

		<!-- Меняющаяся часть -->
		<router-view></router-view>
		</div>
	</div>
</template>

<style>
@font-face {
	font-family: 'Actor'; 
	src: url(/src/assets/shrift/Actor-Regular.ttf); 
}
 
p {
	font-family: 'Actor' !important;
	font-weight: bolder;
	font-size: 22px;
}
.btn {
	font-family: 'Actor' !important;
	font-weight: bolder !important;
	font-size: 22px;
}

</style>

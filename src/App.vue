<template>
  <div class="container">
    <h1 class="container__h1">Заказ-наряд на фрезеровку</h1>
    <TeethMap :teeth1="teeth1" :teeth2="teeth2"/>
    <div class="container__info">

      <div class="info__wrapper">

        <span class="wrapper__flag"> 
        Мостовидная опора
        <img class="flag__img" src="./assets/img/info-icon.svg" alt="#">
        </span>

        <span class="wrapper__flag"> 
        Мостовидная опора
        <img class="flag__img" src="./assets/img/info-icon.svg" alt="#">
        </span>
      
      </div>

      <button class="container__finish-editing">
      Завершить редактирование
      </button> 

    </div>

    <div class="container__right-click-ivent">
      <!-- <img class="right-click-ivent__img" src="./assets/img/background-right-click.svg" alt="#"> -->
      <div class="right-click-ivent__item">Копировать</div>
      <div class="right-click-ivent__item">Вставить</div>
      <div class="right-click-ivent__item">Пометить зуб как <span class="red">отсутствующий</span></div>
      <div class="right-click-ivent__item">Пометить зуб как <span class="green">здоровый</span></div>
      <div class="right-click-ivent__item">Cбросить настройки зуба</div>
    </div>

    <button class="container__back-button">
      <img class="back-button__img" src="./assets/img/back-button.svg" alt="#">
    </button>

    <div class="container__wrapper">

      <div class="wrapper__chain">
      <!--<img class="chain__img" src="./assets/img/line-chain.svg" alt="#"> Надо продумать логику свг цепочек-->  
      <img class="chain__valid-img" src="./assets/img/valid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      </div>

      <div class="chain__title">
        <h2 class="title__h2">Тип конструкции</h2>
        <h2 class="title__h2">Система имплантатов и размеры</h2>
        <h2 class="title__h2">Материал изготовления</h2>
        <h2 class="title__h2">Цвет коронки</h2>
        <h2 class="title__h2">Десневая часть</h2>
        <h2 class="title__h2">Опак и карвинг</h2>
        <h2 class="title__h2">Параметры отступа</h2>
      </div>

    </div>

      <div class="info__wrapper flex-column">

        <span class="wrapper__flag "> 
          Как заполнить форму
        <img class="flag__img" src="./assets/img/info-icon.svg" alt="#">
        </span>

        <span class="wrapper__flag"> 
        Мостовидная опора
        <img class="flag__img" src="./assets/img/info-icon.svg" alt="#">
        </span>
      
      </div>

    

  </div>
</template>

<style lang='scss' src="./app.scss"></style>

<script>
import TeethMap from "@/components/TeethMap/TeethMap";
export default {
  components: {
    TeethMap
  },
  data() {
    return {
      teeth1: [
        {id: 1, value:18},
        {id: 2, value:17},
        {id: 3, value:16},
        {id: 4, value:15},
        {id: 5, value:14},
        {id: 6, value:13},
        {id: 7, value:12},
        {id: 8, value:11},
        {id: 9, value:21},
        {id: 10, value:22},
        {id: 11, value:23},
        {id: 12, value:24},
        {id: 13, value:25},
        {id: 14, value:26},
        {id: 15, value:27},
        {id: 16, value:28},
      ],
      teeth2: [
        {id: 17, value:48},
        {id: 18, value:47},
        {id: 19, value:46},
        {id: 20, value:45},
        {id: 21, value:44},
        {id: 22, value:43},
        {id: 23, value:42},
        {id: 24, value:41},
        {id: 25, value:31},
        {id: 26, value:32},
        {id: 27, value:33},
        {id: 28, value:34},
        {id: 29, value:35},
        {id: 30, value:36},
        {id: 31, value:37},
        {id: 32, value:38},
      ]
    }
  },
  methods: {

  }
}
</script>
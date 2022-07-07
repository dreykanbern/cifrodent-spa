<template>
  <div class="container">

    <h1 class="container__h1">Заказ-наряд на фрезеровку</h1>
    <TeethMap :teeth1="teeth1" :teeth2="teeth2"></TeethMap>

    <div class="container__info">

      <div class="info__wrapper">

          <span class="wrapper__flag">
          Мостовидная опора
          <img class="flag__img" src="~@/assets/img/info-icon.svg" alt="#">
          </span>

        <span class="wrapper__flag">
          Как заполнять карту
          <img class="flag__img" src="~@/assets/img/info-icon.svg" alt="#">
          </span>

      </div>

      <my-button class="btn">
        Завершить редактирование
      </my-button>

    </div>



  </div>
</template>

<style lang='scss' src="./screen1.scss" scoped></style>

<script>
import app from "@/App";
import TeethMap from "@/components/TeethMap/TeethMap";
import MyButton from "@/components/UI/MyButton/MyButton";
import router from "@/router/router";
export default {
  components: {
    MyButton,
    TeethMap,
    app,
    router,
  },
  name: "Screen1",
}
</script>


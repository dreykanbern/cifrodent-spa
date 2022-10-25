<template>
  <div class="container1">

    <h1 class="container__h1">Заказ-наряд на фрезеровку</h1>
    <TeethMap></TeethMap>

    <div class="container__info">

      <div class="info__wrapper">

        <flag-info id="flag1">

          <div id="flag-content1">
            Данный раздел находится в активной разработке и в ближайшее время будет дополнен
          </div>
          Мостовидная опора
        </flag-info>

        <flag-info id="flag2">

          <div id="flag-content2">
            Данный раздел находится в активной разработке и будет дополнен в ближайшее время
          </div>

          Как заполнять карту
        </flag-info>

      </div>

      <router-link to="/teeth-map/final-data" class="text-decoration-none">
        <my-button class="btn">
          Завершить редактирование
        </my-button>
      </router-link>

    </div>



  </div>
</template>

<style lang='scss' src="./screen1.scss" scoped></style>

<script>
import app from "@/App";
import TeethMap from "@/components/TeethMap/TeethMap";
import MyButton from "@/components/UI/MyButton/MyButton";
import router from "@/router/router";
import FlagInfo from "@/components/UI/FlagInfo/FlagInfo";
export default {
  components: {
    MyButton,
    TeethMap,
    app,
    router,
    FlagInfo
  },
  name: "Screen1",
  methods: {

  },
  computed: {

  }
}
</script>


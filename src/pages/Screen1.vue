<template>
  <div class="container1">

    <h1 class="container__h1">Заказ-наряд на фрезеровку</h1>
    <TeethMap></TeethMap>

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


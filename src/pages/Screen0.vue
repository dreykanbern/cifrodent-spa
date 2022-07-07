<template>
  <div class="container">

    <router-link to="/teeth-map">
      <my-button>
        <slot>Заказ-наряд на фрезеровку</slot>
      </my-button>
    </router-link>

 </div>
</template>

<style lang='scss' src="./screen0.scss" scoped></style>

<script>
import router from "@/router/router";
import MyButton from "@/components/UI/MyButton/MyButton";
import app from "@/App";
export default {
  name: "Screen0",
  components: {MyButton,app, router},

}
</script>


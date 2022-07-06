<template>

  <my-button>
    <slot>Заказ-наряд на фрезеровку</slot>
  </my-button>

</template>

<style lang='scss' src="./screen0.scss" scoped></style>

<script>
import MyButton from "@/components/UI/MyButton/MyButton";
import app from "@/App";
export default {
  name: "Screen0",
  components: {MyButton,app},

}
</script>


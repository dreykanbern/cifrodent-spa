<template>
  <div class="container-data">
    <div class="success-body">
        <div class="thanks-item">
          <img src="@/assets/img/success-icon.svg" alt="#">
          <p>Спасибо</p>
        </div>

        <div class="order-item">
          <h1>Заказ-наряд <strong>№{{orderNumber}}</strong> сформирован</h1>
          <p class="order-p">Нанесите номер заказ-наряда <br> на отправляемые модели</p>
        </div>

        <my-button class="success-btn" @click="this.$router.push({ name: 'MainPage'})">Вернуться к заказ-нарядам</my-button>

    </div>
  </div>
</template>

<style lang='scss' src="./success-page.scss" scoped></style>

<script>
import MyButton from "@/components/UI/MyButton/MyButton";
export default {
  name: "SuccessPage",
  components: {
    MyButton,
  },
  data() {
    return {
      orderNumber: this.$route.params.orderNumber,
    }
  }
}
</script>


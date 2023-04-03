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

        <my-button class="success-btn" @click="goToMainPage">Вернуться к заказ-нарядам</my-button>

    </div>
  </div>
</template>

<style lang='scss' src="./success-page.scss" scoped></style>

<script>
import MyButton from "@/components/UI/MyButton/MyButton";
import { mapMutations } from 'vuex';
export default {
  name: "SuccessPage",
  components: {
    MyButton, mapMutations
  },
  data() {
    return {
      orderNumber: this.$route.params.orderNumber,
      isReloaded: false // флаг для проверки выполнения перезагрузки
    }
  },
  mounted() {
    // проверяем, была ли выполнена перезагрузка страницы
    if (localStorage.getItem('isReloaded')) {
      this.isReloaded = true;
      localStorage.removeItem('isReloaded');
      // выполняем редирект на MainPage
      this.$router.push({name: 'MainPage'});
    }
  },
  methods: {
    ...mapMutations([
      'MUT_RESET_STATE',
    ]),
    goToMainPage() {
      if (this.$route.name === 'SuccessPage' && !this.isReloaded) {
        //this.MUT_RESET_STATE(); // вызываем мутацию для сброса стора
        localStorage.setItem('isReloaded', 'true'); // сохраняем флаг перезагрузки в localStorage
        window.location.reload(); // перезагружаем страницу один раз
      }
      else {
        this.$router.push({name: 'MainPage'})
      }
    },
  },
}
</script>


<template>
  <div class="container1">

    <h1 class="container__h1">Заказ-наряд на фрезеровку</h1>
    <TeethMap></TeethMap>

    <div class="container__info">

      <div class="info__wrapper">


        <flag-info id="flag1">

            <div id="flag-content1">
              <h3 class="flag-h3">Выполните следующие шаги:</h3>
              <ul>
                <li class="flag-li">Для указания протяженности изделия необходимо нажать на чек-бокс между зубами.</li>
                <li class="flag-li">Карта зубов схематически будет увеличивать протяженность соединительными линиями при выборе чек-боксов
                  <br> на соседних зубах.</li>
              </ul>
            </div>

          Мостовидная конструкция
        </flag-info>


        <flag-info id="flag2">

          <div id="flag-content2">
            <h3 class="flag-h3">Выполните следующие шаги:</h3>
            <ul>
              <li class="flag-li">При заполнении заказ-наряда необходимо выбрать «рабочий» зуб.</li>
              <li class="flag-li">После чего вы окажетесь на схеме, где можно выбрать определенный этап. (предусмотрено два этапа изготовления)</li>
              <li class="flag-li">Далее меню наряда предоставит вам возможность выбрать в хаотичном порядке нужные параметры,<br> предусматривающие данную конструкцию.</li>
              <li class="flag-li">Во избежание повторяющихся манипуляций, предусмотрена возможность копирования параметров зуба<br> на любой другой с идентичными характеристиками. (правая кнопка мыши на заполненном зубе)</li>
              <li class="flag-li">После заполнения всех необходимых разделов, все данные будут выведены в таблицу, которая будет направлена <br> в лабораторию и продублирована вам на электронную почту.</li>
            </ul>
            <h3 class="flag-h3">Перед отправкой необходимо перепроверить в таблице заполненную вами информацию. <br>
            Для качественного оказания услуг убедительная просьба максимально подробно заполнять заказ-наряд.</h3>
          </div>

          Как заполнять заказ-наряд?
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


<template>
  <div class="container-data">

    <router-link to="/teeth-map" class="text-decoration-none">
      <back-button>
        Карта зубов
      </back-button>
    </router-link>

    <h1 class="container__h1">Итоговые данные</h1>

    <EasyDataTable
        :headers="headers"
        :items="items"
        :rowsPerPage="rowsPerPage"
        :rowsItems="rowsItems"
        :rowsPerPageMessage="rowsPerPageMessage"
        :bodyItemClassName="bodyItemClassName"
        :bodyRowClassName="bodyRowClassName"
        :headerClassName="headerClassName"
        :headerItemClassName="headerItemClassName"
    />

    <h2 class="container__h2">Заполните данные полей формы</h2>

    <div class="final-form">
      <vue-base-input
          placeholder="ФИО пациента*"
          :is-required ="modelValue.isRequired"
          :value="modelValue.value"
          :is-validate="modelValue.isValidate"
      >
      </vue-base-input>
      <vue-base-input
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="Контактный номер телефона*"
          :is-required ="modelValue.isRequired"
          :value="modelValue.value"
          :is-validate="modelValue.isValidate"
          :input-type="modelValue.inputTypeTel.inputType"
      >
      </vue-base-input>
      <vue-base-input placeholder="Адрес доставки*"></vue-base-input>
      <vue-base-input placeholder="Желаемая дата доставки"></vue-base-input>
      <vue-base-input placeholder="Желаемое время доставки"></vue-base-input>
      <textarea placeholder="Дополнительная информация к заказу"></textarea>
      <div>
        <input type="checkbox">
        <label>Согласен на обработку персональных данных</label>
      </div>

      <div class="buttons-wrapper">
        <router-link to="/teeth-map" class="text-decoration-none">
          <my-button>Отправить в работу</my-button>
        </router-link>
        <router-link to="/teeth-map" class="text-decoration-none">
          <my-button class="disabled">Вернуться к карте зубов</my-button>
        </router-link>
      </div>

    </div>



  </div>
</template>

<style lang='scss' src="./screen3.scss" scoped></style>

<script>
import MyButton from "@/components/UI/MyButton/MyButton";
import BackButton from "@/components/UI/BackButton/BackButton";
import router from "@/router/router";
import EasyDataTable from "vue3-easy-data-table";
import 'vue3-easy-data-table/dist/style.css';
import vueBaseInput from "vue-base-input";
import 'vue-base-input/src/assets/vue-base-input.css';
import {mapGetters} from "vuex";
export default {
  name: "Screen3",
  components: {
    MyButton, BackButton, router, EasyDataTable, vueBaseInput,
  },
  data () {
    return {
      headers:[
       { text: "Номер этапа", value: "stageNumber", sortable: true },
        { text: "Номер зуба", value: "toothNumber", sortable: true },
        { text: "Тип конструкции", value: "typeConstruction"},
        { text: "Система имплантов и размеры", value: "implantSystem "},
        { text: "Материал изготовления", value: "material" },
        { text: "Цвет по шкале Vita", value: "colorVita" },
        { text: "Десневая часть", value: "gumPart" },
        { text: "Опак и карвинг", value: "carving" },
        { text: "Параметры отступа", value: "indentOptions" },
      ],
      items: [
      ],
      rowsPerPage: 6,
      rowsItems: [6,12,18],
      rowsPerPageMessage: 'Количество зубов на странице',
      bodyItemClassName: 'main-table-item',
      bodyRowClassName: 'main-table-row',
      headerClassName: 'main-table-header',
      headerItemClassName: 'main-table-header-item',
      modelValue:{
        isRequired: true,
        value:"",
        isValidate: null,
        inputTypeTel: {
          inputType:'tel'
        }
        ,
        inputClass: 'final-form-input',
        },
      }
    },
  computed: {
    ...mapGetters([
      'GET_STATE1',
      'GET_STATE2',
    ]),
    toothId() {
      return this.$route.params.id
    },
    stage1() {
      let teeth1Stage1 = [],
          teeth2Stage1 = [],
          concatStages = [];
      this.$store.state.module1.teeth1.forEach(el => {
        teeth1Stage1.push(el.stage1)
      })
      this.$store.state.module1.teeth2.forEach(el => {
        teeth2Stage1.push(el.stage1)
      })
      concatStages = teeth1Stage1.concat(teeth2Stage1)
      return concatStages
      },
    stage2() {
      let teeth1Stage2 = [],
          teeth2Stage2 = [],
          concatStages = [];
      this.$store.state.module1.teeth1.forEach(el => {
          teeth1Stage2.push(el.stage2)
      })
      this.$store.state.module1.teeth2.forEach(el => {
          teeth2Stage2.push(el.stage2)
      })
      concatStages = teeth1Stage2.concat(teeth2Stage2)
      return concatStages
      },
      compTooth1() {
        return this.stage1.find(el => el.toothNumber === this.toothId)
      },
      compTooth2() {
        return this.stage2.find(el => el.toothNumber === this.toothId)
      },
      teeth () {
        return this.teeth = [this.GET_STATE1, this.GET_STATE2]
      },
      stage () {
      return this.stage = [this.stage1, this.stage2]
      }
    },
  };
</script>


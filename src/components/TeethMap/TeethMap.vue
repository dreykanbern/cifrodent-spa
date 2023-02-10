<template>

<div class="teeth-map">

  <h2 class="teeth-map-header">Карта-зубов</h2>


  <div class="teeth-map-group">

    <div class="teeth-map__wrapper">

      <div class="teeth-map__container">

        <div class="checkbox-top">

          <div class="checkbox-item-container"  v-for="(checkbox, index) in checkboxsTop" :key="index">

            <div class="teeth-map__first-column">
              <Checkbox v-model="checkbox.checked" :value="true" :binary="true" class="first-column__item"/>
            </div>

            <div class="teeth-map__second-column">

              <div class="second-column__item">
                <div
                    :class="{'item-left': checkbox.checked === false ,'selectedTeeth': checkbox.checked || checkbox.left === checkbox.right,
                    'selectedTeeth-left': checkbox.checked && (!checkboxsTop[index - 1] || !checkboxsTop[index - 1].checked) && (!checkboxsTop[index + 1] || !checkboxsTop[index + 1].checked),
                    'left-border': checkbox.checked && (!checkboxsTop[index - 1] || !checkboxsTop[index - 1].checked)}">
                </div>
                <div
                    :class="{'item-right': checkbox.checked === false ,'selectedTeeth': checkbox.checked,
                   'selectedTeeth-right': checkbox.checked && (!checkboxsTop[index - 1] || !checkboxsTop[index - 1].checked) && (!checkboxsTop[index + 1] || !checkboxsTop[index + 1].checked),
                   'right-border': checkbox.checked && (!checkboxsTop[index + 1] || !checkboxsTop[index + 1].checked)}">
                </div>
              </div>

            </div>

          </div>


        </div>

        <div class="teeth-map__third-column" >

          <div
              v-for="tooth in this.$store.state.module1.teeth1"
              :class="[tooth.toothState,{ 'active': isFilledTeeth(tooth.stage1.toothNumber), 'is-copy': tooth.copyState,}]"
              @click="clickTooth(tooth.stage1.toothNumber)"
              @click.right="toothNumber = tooth.stage1.toothNumber"
              v-contextmenu:contextmenu
              :key="tooth.stage1.toothNumber"
          >
            <!--@click="$router.push(`/teeth-map/tooth/${tooth.stage1.toothNumber}`)" -->
            <code>{{tooth.stage1.toothNumber}}</code>
          </div>


        </div>

      </div>

      <!-- Выделить модификатор rotate-180 -->
      <div class="teeth-map__container rotate-180">

        <div class="checkbox-bottom">

          <div class="checkbox-item-container"  v-for="(checkbox, index) in checkboxsBottom" :key="index">

            <div class="teeth-map__first-column rotate-180-m">
              <Checkbox v-model="checkbox.checked" :value="true" :binary="true" class="first-column__item rotate-180"/>
            </div>

            <div class="teeth-map__second-column">

              <div class="second-column__item">
                <div
                    :class="{'item-left': checkbox.checked === false ,'selectedTeeth': checkbox.checked || checkbox.left === checkbox.right,
                    'selectedTeeth-left': checkbox.checked && (!checkboxsBottom[index - 1] || !checkboxsBottom[index - 1].checked) && (!checkboxsBottom[index + 1] || !checkboxsBottom[index + 1].checked),
                    'left-border': checkbox.checked && (!checkboxsBottom[index - 1] || !checkboxsBottom[index - 1].checked)}">
                </div>
                <div
                    :class="{'item-right': checkbox.checked === false ,'selectedTeeth': checkbox.checked,
                   'selectedTeeth-right': checkbox.checked && (!checkboxsBottom[index - 1] || !checkboxsBottom[index - 1].checked) && (!checkboxsBottom[index + 1] || !checkboxsBottom[index + 1].checked),
                   'right-border': checkbox.checked && (!checkboxsBottom[index + 1] || !checkboxsBottom[index + 1].checked)}">
                </div>
              </div>

            </div>

          </div>
        </div>

        <div class="teeth-map__third-column">


          <div v-for="tooth in this.$store.state.module1.teeth2"
               :class="[tooth.toothState,{ 'active': isFilledTeeth(tooth.stage1.toothNumber), 'is-copy': tooth.copyState,}]"
               @click="clickTooth(tooth.stage1.toothNumber)"
               @click.right="toothNumber = tooth.stage1.toothNumber"
               v-contextmenu:contextmenu
               class="rotate-180"
               :key="tooth.stage1.toothNumber"
          >
            <code>{{tooth.stage1.toothNumber}}</code>
          </div>


        </div>

      </div>

    </div>

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



</div>


  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item class="contextmenu-item" @click="copyTooth">
      <img class="contextmenu-img" src="~@/assets/img/сopy-icon.svg" alt="#">
      <p class="contextmenu-text">Копировать</p>
    </v-contextmenu-item>
    <v-contextmenu-item class="contextmenu-item" @click="insertTooth">
      <img class="contextmenu-img" src="~@/assets/img/paste-icon.svg" alt="#">
      <p class="contextmenu-text">Вставить</p>
      <p v-if="insertToothNumber" class="contextmenu-text">значение зуба {{insertToothNumber}}</p>
    </v-contextmenu-item >
    <v-contextmenu-item class="contextmenu-item" @click="selectMissingTooth">
      <img class="contextmenu-img" src="~@/assets/img/remote-tooth-icon.svg" alt="#">
      <p class="contextmenu-text">Пометить зуб как <span class="red">отсутствующий</span></p>
    </v-contextmenu-item>
    <v-contextmenu-item class="contextmenu-item" @click="selectHealthyTooth">
      <img class="contextmenu-img" src="~@/assets/img/healthy-tooth-icon.svg" alt="#">
      <p class="contextmenu-text">Пометить зуб как <span class="green">здоровый</span></p>
    </v-contextmenu-item>
    <v-contextmenu-item class="contextmenu-item" @click="resetTooth">
      <img class="contextmenu-img" src="~@/assets/img/reset-basket-icon.svg" alt="#">
      <p class="contextmenu-text">Сбросить настройки зуба</p>
    </v-contextmenu-item>
  </v-contextmenu>

</template>

<style lang='scss' src="./teeth-map.scss" scoped></style>

<script>
import Checkbox from 'primevue/checkbox';
import { directive, Contextmenu, ContextmenuItem } from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";
import {mapGetters, mapMutations, mapActions} from 'vuex';
import FlagInfo from "@/components/UI/FlagInfo/FlagInfo";
import MyButton from "@/components/UI/MyButton/MyButton";
export default {
  directives: {
    contextmenu: directive,
  },
  components: {
    [Contextmenu.name]: Contextmenu,
    [ContextmenuItem.name]: ContextmenuItem,
    mapGetters, mapMutations, mapActions, Checkbox, FlagInfo, MyButton
  },
  name: "TeethMap",
  // inject: ['teeth1','teeth2'],
  data() {
    return {
      checkboxsTop: [
        { checked: false, left: '18', right: '17' },
        { checked: false, left: '17', right: '16' },
        { checked: false, left: '16', right: '15' },
        { checked: false, left: '15', right: '14' },
        { checked: false, left: '14', right: '13' },
        { checked: false, left: '13', right: '12' },
        { checked: false, left: '12', right: '11' },
        { checked: false, left: '11', right: '21' },
        { checked: false, left: '21', right: '22' },
        { checked: false, left: '22', right: '23' },
        { checked: false, left: '23', right: '24' },
        { checked: false, left: '24', right: '25' },
        { checked: false, left: '25', right: '26' },
        { checked: false, left: '26', right: '27' },
        { checked: false, left: '27', right: '28' },
      ],
      checkboxsBottom: [
        { checked: false, left: '48', right: '47' },
        { checked: false, left: '47', right: '46' },
        { checked: false, left: '46', right: '45' },
        { checked: false, left: '45', right: '44' },
        { checked: false, left: '44', right: '43' },
        { checked: false, left: '43', right: '12' },
        { checked: false, left: '42', right: '41' },
        { checked: false, left: '41', right: '31' },
        { checked: false, left: '31', right: '32' },
        { checked: false, left: '32', right: '33' },
        { checked: false, left: '33', right: '34' },
        { checked: false, left: '34', right: '35' },
        { checked: false, left: '35', right: '36' },
        { checked: false, left: '36', right: '37' },
        { checked: false, left: '37', right: '38' },
      ],
      selectedTeethTop: [],
      selectedTeethBottom: [],
      isDefaultStyle: true,
      toothNumber: '',
      copyToothArr: [],
      insertToothNumber: null,
    }
  },
  methods: {
    ...mapMutations([
      'MUT_FILLED_TOOTH1',
      'MUT_FILLED_TOOTH2',
      'MUT_TOOTH_STATE',
      'MUT_COPY_STATE',
    ]),

    clickTooth (tooth) {
      // console.log(tooth)
      this.toothNumber = tooth
      this.$router.push(`/teeth-map/tooth/${tooth}`)
    },

    selectMissingTooth () {
      this.MUT_TOOTH_STATE( {
        newValue: 'is-missing',
        toothId: this.toothNumber,
      })
    },

    selectHealthyTooth () {
      this.MUT_TOOTH_STATE( {
        newValue: 'is-healthy',
        toothId: this.toothNumber,
      })
    },

    resetTooth () {
      this.MUT_TOOTH_STATE( {
        newValue: 'third-column__item',
        toothId: this.toothNumber,
      })
      let isActive = this.$store.state.module1.chooseTeeth.some(el => el.toothNumber === this.toothNumber)
      if (isActive === true) {
        let arr = this.$store.state.module1.chooseTeeth
        this.$store.state.module1.chooseTeeth = arr.filter(el => el.toothNumber !== this.toothNumber)
        //Обнуление значений глобал стора
        this.$store.state.module1.teeth1.forEach(el => {
                if (el.stage1.toothNumber === this.toothNumber) {
                    el.stage1.typeConstruction = '-';
                    el.stage1.implantSystem = '-';
                    el.stage1.material = '-';
                    el.stage1.colorVita = '-';
                    el.stage1.gumPart = '-';
                    el.stage1.carving = 'Нет';
                    el.stage2.typeConstruction = '-';
                    el.stage2.implantSystem = '-';
                    el.stage2.material = '-';
                    el.stage2.colorVita = '-';
                    el.stage2.gumPart = '-';
                    el.stage2.carving = 'Нет';
                }
            })
        this.$store.state.module1.teeth2.forEach(el => {
                if (el.stage1.toothNumber === this.toothNumber) {
                  el.stage1.typeConstruction = '-';
                    el.stage1.implantSystem = '-';
                    el.stage1.material = '-';
                    el.stage1.colorVita = '-';
                    el.stage1.gumPart = '-';
                    el.stage1.carving = 'Нет';
                    el.stage2.typeConstruction = '-';
                    el.stage2.implantSystem = '-';
                    el.stage2.material = '-';
                    el.stage2.colorVita = '-';
                    el.stage2.gumPart = '-';
                    el.stage2.carving = 'Нет';
                }
            })
        this.MUT_COPY_STATE( {
          newValue: false,
          toothId: this.toothNumber,
        })
        this.copyToothArr[0].copyState = false
      }
    },

    copyTooth () {
      let isActive = this.$store.state.module1.chooseTeeth.some(el => el.toothNumber === this.toothNumber)
      if (isActive === true) {
        // Копирование
        let teeth1Object = this.$store.state.module1.teeth1.filter(el => el.toothId === `tooth${this.toothNumber}`)
        // console.log(teeth1Object)
        let teeth2Object = this.$store.state.module1.teeth2.filter(el => el.toothId === `tooth${this.toothNumber}`)
        let copyTooth = [...teeth1Object, ...teeth2Object]
        // Создаем новый массив с экземплярами объектов без указанных свойств
        let newCopyTooth = copyTooth.map(obj => ({
          toothState: obj.toothState,
          copyState: obj.copyState,
          stage1: { ...obj.stage1 },
          stage2: { ...obj.stage2 }
        }))

        this.copyToothArr = newCopyTooth
        if (this.copyToothArr.length > 0) {
          this.MUT_COPY_STATE({
            newValue: true,
            toothId: this.toothNumber,
          })
        }
      }
    },

    insertTooth () {
      let teeth1Object = this.$store.state.module1.teeth1
      let teeth2Object = this.$store.state.module1.teeth2
      let teeth = [...teeth1Object, ...teeth2Object]
      let teethObject = teeth.filter(el => el.toothId === `tooth${this.toothNumber}`)
      let copyTooth = []
      for (let i = 0; i < this.copyToothArr.length; i++) {
        copyTooth.push(Object.assign({}, this.copyToothArr[i]))
      }
      // Обновляем свойства в копии объекта
      copyTooth[0].toothId = `tooth${this.toothNumber}`
      copyTooth[0].stage1.toothNumber = this.toothNumber
      copyTooth[0].stage2.toothNumber = this.toothNumber

      // Получаем индекс объекта в массиве teeth1Object
      let index = teeth1Object.indexOf(teethObject[0])
      if (index !== -1) {
        teeth1Object.splice(index, 1, copyTooth[0])
      }
      // Получаем индекс объекта в массиве teeth2Object
      let index2 = teeth2Object.indexOf(teethObject[0])
      if (index2 !== -1) {
        teeth2Object.splice(index2, 1, copyTooth[0])
      }
      this.copyToothArr.forEach(obj => {
        this.$store.state.module1.chooseTeeth.push(
          { ...obj.stage1 },
          { ...obj.stage2 }
        )
      })
    },

    // selectMissingTooth () {
    //   // console.log(this.teeth.forEach(el => console.log(el)))
    //   this.MUT_TOOTH_STATE( {
    //     newValue:  this.teeth.forEach(el => el.toothState = 'is-missing'),
    //     toothId: this.$store.state.module1.teeth1.forEach(el => el.toothId = `tooth${this.toothNumber}`),
    //   })
    // },

    isFilledTeeth(toothNumber) {
      // console.log(toothNumber)
      return this.$store.state.module1.chooseTeeth.some(el => el.toothNumber === toothNumber)
    },

    // FilledTooth () {
    //   this.$router.push(`/teeth-map/tooth/${tooth.stage1.toothNumber}`)
    //   this.$store.state.module1.teeth1.forEach(item => {
    //     if (item.typeConstruction !== '-' || item.implantSystem !== '-' || item.material !== '-' || item.colorVita !=='-'
    //         || item.gumPart !== '-' || item.carving !== '-' || item.indentOptions !== '-') {
    //       item.isFilledTooth = true
    //       // console.log(item.isFilledTooth)
    //       this.MUT_FILLED_TOOTH( {
    //         newValue:  item.isFilledTooth,
    //         toothId: this.toothId
    //       })
    //     }
    //   })
    //   this.$store.state.module1.teeth2.forEach(item => {
    //     if (item.typeConstruction !== '-' || item.implantSystem !== '-' || item.material !== '-' || item.colorVita !=='-'
    //         || item.gumPart !== '-' || item.carving !== '-' || item.indentOptions !== '-') {
    //       item.isFilledTooth = true
    //       this.MUT_FILLED_TOOTH( {
    //         newValue:  item.isFilledTooth,
    //         toothId: this.toothId
    //       })
    //     }
    //   })
    // },
    // remoteTooth(toothNumber) {
    //   if (this.isDefaultStyle === true) {
    //     this.isDefaultStyle = false;
    //     this.isRemoteTooth = true;
    //   }
    // },
  },
  computed: {
    ...mapGetters([
      'GET_STATE1',
      'GET_STATE2',
    ]),

    teeth () {
      return this.teeth = [...this.$store.state.module1.teeth1, ...this.$store.state.module1.teeth2]
    },

    stage1 () {
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
    stage2 () {
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

  },
  // watch: {
  //   'GET_STATE1': {
  //     deep: true,
  //     handler(GET_STATE1) {
  //       GET_STATE1.forEach(item => {
  //         if (item.stage1.typeConstruction !== '-' || item.stage1.implantSystem !== '-' || item.stage1.material !== '-' || item.stage1.colorVita !== '-'
  //             || item.stage1.gumPart !== '-' || item.stage1.carving !== '-' || item.stage1.indentOptions !== '-') {
  //           item.stage1.isFilledTooth = true
  //           this.MUT_FILLED_TOOTH1({
  //             newValue: item.stage1.isFilledTooth,
  //             toothId: this.toothId
  //           })
  //         }
  //       })
  //     }
  //   },
  //   'GET_STATE2': {
  //     deep: true,
  //     handler(GET_STATE2) {
  //       GET_STATE2.forEach(item => {
  //         if (item.stage2.typeConstruction !== '-' || item.stage2.implantSystem !== '-' || item.stage2.material !== '-' || item.stage2.colorVita !== '-'
  //             || item.stage2.gumPart !== '-' || item.stage2.carving !== '-' || item.stage2.indentOptions !== '-') {
  //           item.stage2.isFilledTooth = true
  //           this.MUT_FILLED_TOOTH2({
  //             newValue: item.stage2.isFilledTooth,
  //             toothId: this.toothId
  //           })
  //         }
  //       })
  //     }
  //   }
  // },
}


</script>
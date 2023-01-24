<template>
<div class="teeth-map">

  <h2 class="teeth-map-header">Карта-зубов</h2>

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

<!--      <div class="teeth-map__first-column">-->
<!--        <Checkbox v-for="checkbox in checkboxs1" :key="checkbox.id" v-model="selectedTeethTop" :id="checkbox.id" :value="checkbox" class="first-column__item"/>-->
<!--      </div>-->
<!--      <div class="teeth-map__second-column">-->
<!--        <div v-for="checkbox in validCheckboxs1" :key="checkbox.id" v-if="selectedTeethTop.includes(el => el.id === checkbox.id)" class="selectedTeeth"></div>-->
<!--        <div v-for="checkbox in validCheckboxs1" :key="checkbox.id" v-if="selectedTeethTop.includes(el => el.id === checkbox.id) && checkbox.id === '1817'" class="selectedTeeth-left"></div>-->
<!--        <div v-for="checkbox in validCheckboxs1" :key="checkbox.id" v-if="selectedTeethTop.includes(el => el.id === checkbox.id) && checkbox.id === '2728'" class="selectedTeeth-right"></div>-->
<!--        <div v-for="checkbox in validCheckboxs1" :key="checkbox.id" v-else class="second-column__item"></div>-->
<!--      </div>-->
<!--      <div class="teeth-map__first-column">-->
<!--        <Checkbox v-model="selectedTeethTop" id="1817" value="1817" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="1716" value="1716" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="1615" value="1615" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="1514" value="1514" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="1413" value="1413" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="1312" value="1312" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="1211" value="1211" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="1121" value="1121" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="2122" value="2122" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="2223" value="2223" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="2324" value="2324" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="2425" value="2425" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="2526" value="2526" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="2627" value="2627" class="first-column__item"/>-->
<!--        <Checkbox v-model="selectedTeethTop" id="2728" value="2728" class="first-column__item"/>-->
<!--      </div>-->
<!--      <div class="teeth-map__second-column">-->
<!--        <div v-if="selectedTeethTop.includes('1817') === true" class="selectedTeeth-left"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('1716') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('1615') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('1514') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('1413') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('1312') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('1211') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('1121') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('2122') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('2223') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('2324') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('2425') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('2526') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('2627') === true" class="selectedTeeth"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--        <div v-if="selectedTeethTop.includes('2728') === true" class="selectedTeeth-right"></div>-->
<!--        <div v-else class="second-column__item"></div>-->
<!--      </div>-->
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

      <div class="teeth-map__first-column rotate-180">
        <Checkbox v-model="selectedTeethBottom" id="3837" value="3837" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="3736" value="3736" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="3635" value="3635" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="3534" value="3534" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="3433" value="3433" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="3332" value="3332" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="3231" value="3231" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="3141" value="3141" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="4142" value="4142" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="4243" value="4243" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="4344" value="4344" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="4445" value="4445" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="4546" value="4546" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="4647" value="4647" class="first-column__item"/>
        <Checkbox v-model="selectedTeethBottom" id="4748" value="4748" class="first-column__item"/>
      </div>
      <div class="teeth-map__second-column">
        <div v-if="selectedTeethBottom.includes('4748') === true" class="selectedTeeth-left"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('4647') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('4546') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('4445') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('4344') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('4243') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('4142') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('3141') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('3231') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('3332') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('3433') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('3534') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('3635') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('3736') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethBottom.includes('3837') === true" class="selectedTeeth-right"></div>
        <div v-else class="second-column__item"></div>
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
export default {
  directives: {
    contextmenu: directive,
  },
  components: {
    [Contextmenu.name]: Contextmenu,
    [ContextmenuItem.name]: ContextmenuItem,
    mapGetters, mapMutations, mapActions, Checkbox
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
      this.copyToothArr[0].copyState = false
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

    validCheckboxs1() {
      console.log(this.selectedTeethTop.includes(el => el.id === this.checkbox.id))
      console.log(this.checkbox)
      return this.checkboxs1.filter(checkbox => checkbox && checkbox.id)
    },

    // toothId () {
    //   return this.teeth.forEach(el => console.log(el.toothId))
    // },

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
<template>
<div class="teeth-map">

  <h2 class="teeth-map-header">Карта-зубов</h2>

  <div class="teeth-map__wrapper">

    <div class="teeth-map__container">

      <div class="teeth-map__first-column">
        <Checkbox v-model="selectedTeethTop" id="1817" value="1817" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="1716" value="1716" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="1615" value="1615" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="1514" value="1514" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="1413" value="1413" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="1312" value="1312" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="1211" value="1211" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="1121" value="1121" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="2122" value="2122" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="2223" value="2223" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="2324" value="2324" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="2425" value="2425" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="2526" value="2526" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="2627" value="2627" class="first-column__item"/>
        <Checkbox v-model="selectedTeethTop" id="2728" value="2728" class="first-column__item"/>
      </div>
      <div class="teeth-map__second-column">
        <div v-if="selectedTeethTop.includes('1817') === true" class="selectedTeeth-left"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('1716') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('1615') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('1514') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('1413') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('1312') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('1211') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('1121') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('2122') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('2223') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('2324') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('2425') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('2526') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('2627') === true" class="selectedTeeth"></div>
        <div v-else class="second-column__item"></div>
        <div v-if="selectedTeethTop.includes('2728') === true" class="selectedTeeth-right"></div>
        <div v-else class="second-column__item"></div>
      </div>
      <div class="teeth-map__third-column" >


          <div
            :class="{ 'third-column__item-red': isRemoteTooth, 'third-column__item-green': isHealthyTooth, 'third-column__item': isDefaultStyle, 'active': isFilledTeeth(tooth.stage1.toothNumber) }"
            @click="$router.push(`/teeth-map/tooth/${tooth.stage1.toothNumber}`)"
            v-contextmenu:contextmenu
            v-for="tooth in this.$store.state.module1.teeth1"
          >
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


          <div
            :class="{ 'third-column__item-red': isRemoteTooth, 'third-column__item-green': isHealthyTooth, 'third-column__item': isDefaultStyle ,  'active': isFilledTeeth(tooth.stage1.toothNumber)   }"
            @click="$router.push(`/teeth-map/tooth/${tooth.stage1.toothNumber}`)"
            v-contextmenu:contextmenu
            v-for="tooth in this.$store.state.module1.teeth2"
            class="rotate-180"
          >
            <code>{{tooth.stage1.toothNumber}}</code>
          </div>


      </div>

    </div>

  </div>

</div>

  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item class="contextmenu-item">
      <img class="contextmenu-img" src="~@/assets/img/сopy-icon.svg" alt="#">
      <p class="contextmenu-text">Копировать</p>
    </v-contextmenu-item>
    <v-contextmenu-item class="contextmenu-item">
      <img class="contextmenu-img" src="~@/assets/img/paste-icon.svg" alt="#">
      <p class="contextmenu-text">Вставить</p>
    </v-contextmenu-item >
    <v-contextmenu-item @click="remoteTooth" class="contextmenu-item">
      <img class="contextmenu-img" src="~@/assets/img/remote-tooth-icon.svg" alt="#">
      <p class="contextmenu-text">Пометить зуб как <span class="red">отсутствующий</span></p>
    </v-contextmenu-item>
    <v-contextmenu-item class="contextmenu-item">
      <img class="contextmenu-img" src="~@/assets/img/healthy-tooth-icon.svg" alt="#">
      <p class="contextmenu-text">Пометить зуб как <span class="green">здоровый</span></p>
    </v-contextmenu-item>
    <v-contextmenu-item class="contextmenu-item">
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
      selectedTeethTop: [],
      selectedTeethBottom: [],

      selectedTooth: {
        isRemoteTooth: Boolean,
        isHealthyTooth: Boolean,
        isDefaultStyle: Boolean,
      },
      isRemoteTooth: false,
      isHealthyTooth: false,
      isDefaultStyle: Boolean,
    }
  },
  methods: {
    ...mapMutations([
      'MUT_FILLED_TOOTH1',
      'MUT_FILLED_TOOTH2'
    ]),

    isFilledTeeth(toothNumber) {
      console.log(toothNumber)
      return this.$store.state.module1.chooseTeeth.some(el => el.toothNumber === toothNumber)
    },

    FilledTooth () {
      this.$router.push(`/teeth-map/tooth/${tooth.stage1.toothNumber}`)
      this.$store.state.module1.teeth1.forEach(item => {
        if (item.typeConstruction !== '-' || item.implantSystem !== '-' || item.material !== '-' || item.colorVita !=='-'
            || item.gumPart !== '-' || item.carving !== '-' || item.indentOptions !== '-') {
          item.isFilledTooth = true
          console.log(item.isFilledTooth)
          this.MUT_FILLED_TOOTH( {
            newValue:  item.isFilledTooth,
            toothId: this.toothId
          })
        }
      })
      this.$store.state.module1.teeth2.forEach(item => {
        if (item.typeConstruction !== '-' || item.implantSystem !== '-' || item.material !== '-' || item.colorVita !=='-'
            || item.gumPart !== '-' || item.carving !== '-' || item.indentOptions !== '-') {
          item.isFilledTooth = true
          this.MUT_FILLED_TOOTH( {
            newValue:  item.isFilledTooth,
            toothId: this.toothId
          })
        }
      })
    },
    remoteTooth(toothNumber) {
      if (this.isDefaultStyle === true) {
        this.isDefaultStyle = false;
        this.isRemoteTooth = true;
      }
    },
  },
  computed: {
    ...mapGetters([
      'GET_STATE1',
      'GET_STATE2',
    ]),
  },
  watch: {
    'GET_STATE1': {
      deep: true,
      handler(GET_STATE1) {
        GET_STATE1.forEach(item => {
          if (item.stage1.typeConstruction !== '-' || item.stage1.implantSystem !== '-' || item.stage1.material !== '-' || item.stage1.colorVita !== '-'
              || item.stage1.gumPart !== '-' || item.stage1.carving !== '-' || item.stage1.indentOptions !== '-') {
            item.stage1.isFilledTooth = true
            this.MUT_FILLED_TOOTH1({
              newValue: item.stage1.isFilledTooth,
              toothId: this.toothId
            })
          }
        })
      }
    },
    'GET_STATE2': {
      deep: true,
      handler(GET_STATE2) {
        GET_STATE2.forEach(item => {
          if (item.stage2.typeConstruction !== '-' || item.stage2.implantSystem !== '-' || item.stage2.material !== '-' || item.stage2.colorVita !== '-'
              || item.stage2.gumPart !== '-' || item.stage2.carving !== '-' || item.stage2.indentOptions !== '-') {
            item.stage2.isFilledTooth = true
            this.MUT_FILLED_TOOTH2({
              newValue: item.stage2.isFilledTooth,
              toothId: this.toothId
            })
          }
        })
      }
    }
  },
}


</script>
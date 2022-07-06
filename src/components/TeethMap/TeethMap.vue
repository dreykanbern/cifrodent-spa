<template>
<div class="teeth-map">

  <h2 class="teeth-map-header">Карта-зубов</h2>

  <div class="teeth-map__wrapper">

    <div class="teeth-map__container">

      <div class="teeth-map__first-column">
        <input type="checkbox" v-model="selectedTeethTop" id="1817" value="1817" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="1716" value="1716" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="1615" value="1615" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="1514" value="1514" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="1413" value="1413" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="1312" value="1312" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="1211" value="1211" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="1121" value="1121" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="2122" value="2122" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="2223" value="2223" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="2324" value="2324" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="2425" value="2425" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="2526" value="2526" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="2627" value="2627" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethTop" id="2728" value="2728" class="first-column__item"/>
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
        <button class="third-column__item" v-for="tooth in teeth1">{{tooth.value}}</button>
      </div>

    </div>

    <!-- Выделить модификатор rotate-180 -->
    <div class="teeth-map__container rotate-180">

      <div class="teeth-map__first-column rotate-180">
        <input type="checkbox" v-model="selectedTeethBottom" id="3837" value="3837" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="3736" value="3736" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="3635" value="3635" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="3534" value="3534" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="3433" value="3433" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="3332" value="3332" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="3231" value="3231" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="3141" value="3141" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="4142" value="4142" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="4243" value="4243" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="4344" value="4344" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="4445" value="4445" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="4546" value="4546" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="4647" value="4647" class="first-column__item"/>
        <input type="checkbox" v-model="selectedTeethBottom" id="4748" value="4748" class="first-column__item"/>
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
        <button class="third-column__item rotate-180"  v-for="tooth in teeth2">{{tooth.value}}</button>
      </div>

    </div>

  </div>

</div>
</template>

<style lang='scss' src="./teeth-map.scss" scoped></style>

<script>

import Checkbox from 'vue-material-checkbox'
export default {
  components: {},
  props: {
    teeth1: {
      type: Array,
      required: true
    },
    teeth2: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      selectedTeethTop: [],
      selectedTeethBottom: [],
    }
  },
  methods: {
  }
}


</script>
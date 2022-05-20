<template>
<div class="teeth-map">

  <h2 class="teeth-map-header">Карта-зубов</h2>

  <div class="teeth-map__wrapper">

    <div class="teeth-map__container">

      <div class="teeth-map__first-column">
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
      </div>
      <div class="teeth-map__second-column">
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
      </div>
      <div class="teeth-map__third-column" >
        <div class="third-column__item" v-for="tooth in teeth1">{{tooth.value}}</div>
      </div>

    </div>

    <!-- Выделить модификатор rotate-180 -->
    <div class="teeth-map__container rotate-180">

      <div class="teeth-map__first-column">
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
      </div>
      <div class="teeth-map__second-column">
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
      </div>
      <div class="teeth-map__third-column">
        <div class="third-column__item rotate-180"  v-for="tooth in teeth2">{{tooth.value}}</div>
      </div>

    </div>

  </div>

</div>
</template>

<style lang='scss' src="./teeth-map.scss"></style>

<script>
export default {
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

    }
  },
  methods: {

  }
}
</script>
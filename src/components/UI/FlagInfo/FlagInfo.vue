<template>

  <span class="wrapper__flag">
    <slot></slot>
    <img class="flag__img" src="~@/assets/img/info-icon.svg" alt="#">
  </span>

</template>

<style lang='scss' src="./flag-info.scss" scoped></style>

<script>
export default {
  name: "FlagInfo"
}
</script>


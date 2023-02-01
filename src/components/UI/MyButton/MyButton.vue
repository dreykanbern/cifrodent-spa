<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style lang='scss' src="./my-button.scss" scoped></style>

<script>
export default {
  name: "my-button",
}
</script>
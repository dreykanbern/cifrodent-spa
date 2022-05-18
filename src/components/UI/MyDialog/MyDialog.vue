<!-- eslint-disable -->
<template>
  <div class="dialog" v-if="show === true">
    <div class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<style lang='scss' src="./my-dialog.scss" scoped></style>
<!-- eslint-disable -->
<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: "boolean",
      default: false
    }
  }
}
</script>


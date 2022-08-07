<template>
  <select
      type="select"
      :value="chooseTypeName"
      @input="$emit('update:chooseTypeName', $event.target.value)">
    <slot></slot>
  </select>

  <select
      type="select"
      :value="typeNameDefault"
      @input="$emit('update:typeNameDefault', $event.target.value)">
    <slot></slot>
  </select>
</template>

<style lang='scss' src="./my-select.scss" scoped></style>

<script>
export default {
  name: "MySelect",
  emits: ['update:chooseTypeName', 'update:typeNameDefault'],
  props: {
    typeNameDefault: String,
    chooseTypeName: String,
  },
  computed: {

  }
}
</script>


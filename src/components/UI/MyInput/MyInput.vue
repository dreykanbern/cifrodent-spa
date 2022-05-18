<!-- eslint-disable -->
<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>
<!-- eslint-disable -->
<style lang='scss' src="./my-input.scss" scoped></style>
<!-- eslint-disable -->
<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>
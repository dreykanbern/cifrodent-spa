<template>
  <div>
    <div v-if="showModal" @click="closeModal" class="modal-overlay"></div>
    <div v-if="showModal" class="modal-content">
      <button class="modal-close" @click="closeModal">X</button>
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang='scss' src="./final-modal.scss"></style>

<script>
  export default {
    name: "FinalModal",
    props: {
      showModal: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeModal() {
        this.$emit("close");
      }
    }
  };
</script>
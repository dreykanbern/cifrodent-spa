<template>

  <form>
    <div class="my-modal" v-if="show" @click.stop="hideModal">
      <div @click.stop class="my-modal-content">
        <back-button class="align-self-left btn-close-modal" @click.stop="hideModal">Вернуться к списку настроек</back-button>
        <slot></slot>
        <div class="my-modal-content-footer">
          <my-button @click.stop="hideModal">Сохранить</my-button>
          <button @click.stop="hideModal" type="reset" class="disabled">Отменить</button>
        </div>
      </div>
    </div>
  </form>

</template>

<style lang='scss' src="./my-modal.scss" scoped></style>

<script>
import BackButton from "@/components/UI/BackButton/BackButton";
import MyButton from "@/components/UI/MyButton/MyButton";
export default {
  name: "MyModal",
  components: {
    BackButton, MyButton,
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    },
  }
}
</script>


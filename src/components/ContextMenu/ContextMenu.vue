<template>
  <div class="context-menu" v-show="show" :style="style" ref="context" tabindex="0" @blur="close">
    <slot></slot>
  </div>
</template>

<style lang='scss' src="./context-menu.scss"></style>

<script>

import Vue from 'vue';

export default {
  name: "ContextMenu",
  props: {
    display: Boolean, // prop определяет, должны ли мы показывать контекстное меню
  },
  data() {
    return {
      left: 0,
      top: 0,
      show: false, // влияет на отображение контекстного меню
    };
  },
  computed: {
    // Получаем позицию контекстного меню
    style() {
      return {
        top: this.top + 'px',
        left: this.left + 'px',
      };
    },
  },
  methods: {
    // Закрытие контекстного меню
    close() {
      this.show = false;
      this.left = 0;
      this.top = 0;
    },
    open(evt) {
      // Обновляем позицию контекстного меню
      this.left = evt.pageX || evt.clientX;
      this.top = (evt.pageY || evt.clientY) - window.pageYOffset; //В том числе и при прокрутке
      // Делаем элемент сфокусированным
      // @ts-ignore
      Vue.nextTick(() => this.$el.focus());
      this.show = true;
    },
  },
};
</script>
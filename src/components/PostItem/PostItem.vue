<!-- eslint-disable -->
<template>
  <div class="post">
    <div>
      <div><strong>Название:</strong>{{ post.title }}</div>
      <div><strong>Описание:</strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
        @click="$emit('remove', post)"
      >
        Удалить
      </my-button>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<style lang='scss' src="./post-item.scss" scoped></style>
<!-- eslint-disable -->
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>
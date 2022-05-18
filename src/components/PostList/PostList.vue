<!-- eslint-disable -->
<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <post-item
      v-for="post in posts"
      :post ="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else class="description">
    Список постов пуст, напишите новый
  </h2>
</template>
<!-- eslint-disable -->
<style lang='scss' src="./post-list.scss" scoped></style>
<!-- eslint-disable -->
<script>
import PostItem from "@/components/PostItem/PostItem";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>
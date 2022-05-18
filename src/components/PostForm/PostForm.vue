<!-- eslint-disable -->
<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input v-model="post.title" type="text" placeholder="Название"></my-input>
    <my-input v-model="post.body" type="text" placeholder="Описание"></my-input>
    <my-button @click="createPost" class="btn-mtop">Создать</my-button>
  </form>  
</template>
<!-- eslint-disable -->
<style lang='scss' src="./post-form.scss" scoped></style>
<!-- eslint-disable -->
<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post)
      this.post = {
        title: "",
        body: "",
      }
    }
  }
}
</script>
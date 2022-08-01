<template>

  <router-view></router-view>

</template>

<style lang='scss' src="./app.scss"></style>

<script>
import Screen1 from "@/pages/Screen1";
import Screen0 from "@/pages/Screen0";
import router from "@/router/router.js";
export default {
  components: {
   Screen1, Screen0, router,
  },
  data() {

  },
  provide() {
    return {
      teeth1:[
        this.$store.state.module1.tooth18.stage1,
        this.$store.state.module1.tooth17.stage1,
        this.$store.state.module1.tooth16.stage1,
        this.$store.state.module1.tooth15.stage1,
        this.$store.state.module1.tooth14.stage1,
        this.$store.state.module1.tooth13.stage1,
        this.$store.state.module1.tooth12.stage1,
        this.$store.state.module1.tooth11.stage1,
        this.$store.state.module1.tooth21.stage1,
        this.$store.state.module1.tooth22.stage1,
        this.$store.state.module1.tooth23.stage1,
        this.$store.state.module1.tooth24.stage1,
        this.$store.state.module1.tooth25.stage1,
        this.$store.state.module1.tooth26.stage1,
        this.$store.state.module1.tooth27.stage1,
        this.$store.state.module1.tooth28.stage1,
      ],
      teeth2: [
        this.$store.state.module1.tooth48.stage1,
        this.$store.state.module1.tooth47.stage1,
        this.$store.state.module1.tooth46.stage1,
        this.$store.state.module1.tooth45.stage1,
        this.$store.state.module1.tooth44.stage1,
        this.$store.state.module1.tooth43.stage1,
        this.$store.state.module1.tooth42.stage1,
        this.$store.state.module1.tooth41.stage1,
        this.$store.state.module1.tooth31.stage1,
        this.$store.state.module1.tooth32.stage1,
        this.$store.state.module1.tooth33.stage1,
        this.$store.state.module1.tooth34.stage1,
        this.$store.state.module1.tooth35.stage1,
        this.$store.state.module1.tooth36.stage1,
        this.$store.state.module1.tooth37.stage1,
        this.$store.state.module1.tooth38.stage1,
      ],
    }
  },
  methods: {

  }
}
</script>
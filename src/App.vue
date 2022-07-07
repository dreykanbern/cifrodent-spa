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
      teeth1: [
        {id: 1, value:18},
        {id: 2, value:17},
        {id: 3, value:16},
        {id: 4, value:15},
        {id: 5, value:14},
        {id: 6, value:13},
        {id: 7, value:12},
        {id: 8, value:11},
        {id: 9, value:21},
        {id: 10, value:22},
        {id: 11, value:23},
        {id: 12, value:24},
        {id: 13, value:25},
        {id: 14, value:26},
        {id: 15, value:27},
        {id: 16, value:28},
      ],
      teeth2: [
        {id: 17, value:48},
        {id: 18, value:47},
        {id: 19, value:46},
        {id: 20, value:45},
        {id: 21, value:44},
        {id: 22, value:43},
        {id: 23, value:42},
        {id: 24, value:41},
        {id: 25, value:31},
        {id: 26, value:32},
        {id: 27, value:33},
        {id: 28, value:34},
        {id: 29, value:35},
        {id: 30, value:36},
        {id: 31, value:37},
        {id: 32, value:38},
      ],
    }
  },
  methods: {

  }
}
</script>
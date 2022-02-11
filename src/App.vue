<template>
<div>
  <Header></Header>
  <router-view></router-view>
  <Footer v-show="$route.path === '/home' || $route.path === '/search'"></Footer>
</div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  name: "App",
  components:{
    Header,
    Footer
  }

}
</script>

<style scoped>

</style>

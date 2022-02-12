<template>
  <div>
    <TypeNav/>
    <Banner/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Brand/>
    <Floor/>
  </div>
</template>

<script>
import Banner from "./Banner";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Brand from "./Brand";
import Floor from "./Floor";

export default {
  name: "index",
  components: {
    Banner,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor
  }
}
</script>

<style scoped>

</style>

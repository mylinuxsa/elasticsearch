<template>
  <div class="home">
    <NavLeft />
    <div style="width:100%;">
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavLeft from "@/components/base/NavLeft.vue";
import Header from "@/components/base/Header.vue";

export default {
  name: "home",
  components: {
    NavLeft,
    Header,
    
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  display: flex;
}

</style>


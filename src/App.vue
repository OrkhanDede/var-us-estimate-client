<template>
  <div class="container">
    <Loader :isVisible="isLoadingShow" />
    <Navbar />
    <div id="app">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Loader from "./components/common/Loader";
import { refreshUser } from "@/api/user";
export default {
  name: "App",
  components: {
    Navbar,
    Loader,
  },
  computed: {
    isLoadingShow() {
      return this.$store.getters.isLoadingShow;
    },
  },
  data() {
    return {};
  },
  created() {
    this.$store.commit("setLoadingShow", true);
    refreshUser()
      .then((response) => {
        this.$store.commit("setUser",response);
        console.log("response user get data");
        console.log(response);
      })
      .finally(() => {
        this.$store.commit("setLoadingShow", false);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

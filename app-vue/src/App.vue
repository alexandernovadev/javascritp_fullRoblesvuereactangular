<template>
  <div id="app">
    <Header />
    <!-- <LastArticles /> -->
    <router-view></router-view>
    <div class="clearfix"></div>
    <PiePagina />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Nameetiqueta from './components/Componente.vue';
import Header from "./components/Header.vue";
import PiePagina from "./components/PiePagina.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Nameetiqueta,
    Header,
    PiePagina
  },
  data() {
    return {
      text: "Hola soy la data"
    };
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>

<template>
  <div class>
    <Slider :texto="stringBussqueda" />
    <div class="center">
      <section id="content" v-if="articles.length > 0">
        <div v-for="article in articles" :key="article._id">
          <Article :article="article" />
        </div>
      </section>
      <div id="content" v-else>
          <br>
          <h2>No hay articulos que coincidan con tu busqueda</h2>
      </div>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import {Global} from '../Global';
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Article from "./Article.vue";
import axios from "axios";

export default {
  name: "Search",
  components: {
    Slider,
    Sidebar,
    Article
  },
  data() {
    return {
      url: Global.url,
      stringBussqueda: '',
      articles: []
    };
  },
   watch: {
    $route(to) {
      this.articles= []
      //  $route(to, from)
      // react to route changes...
      // console.log('to',to);// Despues
      console.log("Nueva palabra", to.params.search);
      this.getArticlesBySearch(to.params.search)
      // console.log('from',from);// Antes
       this.stringBussqueda = `Busqueda: ${to.params.search}`;
      
    }
  },
  mounted() {
      // Recojer Parametro vue
      this.stringBussqueda = this.$route.params.search
    var SearString = this.$route.params.search
    this.stringBussqueda = `Busqueda: ${SearString}`;
    this.getArticlesBySearch(SearString);
    // alert(Global.url);
    // alert("mj");
  },
  methods: {
    getArticlesBySearch(searchString) {
      console.log("La palabra es", searchString);
     
      axios.get(`${this.url}search/${searchString}`)
           .then(res => {
                if (res.data.status == "success") {
                    this.articles = res.data.articles;
                    console.log("RTA SERVER ", this.articles);
                }
            console.log(res);
             })
             .catch(err=>{
                 console.log("ERROR SERVER ", err);
                 
             });
   
    }
  }
};
</script>

<style>
</style>
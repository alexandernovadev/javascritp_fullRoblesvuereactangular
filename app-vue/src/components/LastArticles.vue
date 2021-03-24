<template>

<div>

  <Slider texto="Ultimos Articles" showBtn="true"/>
  <div class="center">
    <section id="content">
      <h2 class="subheader">Últimos artículos</h2>

      <!--Listado articulos-->
      <div id="articles" v-for="article in articles" :key="article._id">
        <Article :article="article"/>
      </div>
    
    </section>
    <Sidebar />
  </div>
  </div>
</template>

<script>
import axios from "axios";
import {Global} from "../Global";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import Article from "./Article.vue";
export default {
  name: "LastArticles",
  components: {
    Sidebar,
    Slider,
    Article
  },
  data(){
    return {
      url: Global.url,
      articles: []
    }
  },
  mounted() {
    this.getLastArticles()
  },
  methods: {
    getLastArticles(){
      
      axios.get(`${this.url}articles/last`)
        .then(res=>{

            if(res.data.status == 'success'){    
              this.articles = res.data.articles
              console.log('->',this.articles);
            }
        })
        .catch()
    }
  },
};
</script>

<style>
</style>
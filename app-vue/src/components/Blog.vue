<template>
  <div class>
    <Slider texto="BLOG" />
    <div class="center">
      <section id="content" v-if="articles.length > 0">
        <div v-for="article in articles" :key="article._id">
          <Article :article="article" />
        </div>
      </section>
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
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Article
  },
  data() {
    return {
      url: Global.url,
      articles: []
    };
  },
  mounted() {
    this.getArticles();
    // alert(Global.url);
    // alert("mj");
  },
  methods: {
    getArticles() {
      console.log(this.url);
      
      setTimeout(() => {
     
      axios.get(`${this.url}articles/last`).then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log("RTA SERVER ", this.articles);
        }
      });
      }, 200);
    }
  }
};
</script>

<style>
</style>
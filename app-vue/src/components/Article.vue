<template>
  <div>
    <article class="article-item" v-if="article">
    <div class="image-wrap">
      <img v-if="article.image" :src="url+ 'getimage/'+article.image" :title="article.title" alt="Paisaje" />
      <img v-if="!article.image" src="https://grupocamacho.com/wp-content/themes/linstar/assets/images/default.jpg" :title="article.title" alt="Paisaje" />
    </div>

    <h2>{{article.title}}</h2>
    <p>{{article.content}}</p>
    <span>{{article.date | moment('from', 'now')}}</span>

    <button class="btn" title="Leer Massss"
    @click="iraArticle(article._id)">Leer máas</button>
    <div class="clearfix"></div>
  </article>
<!-- 
  TODO arreglar esto porque yo lo itero en la vista padre
  es mejor en la vista hijo iterar articles  -->
  <div v-else-if="article && article.length <1">
    NO hayy articulos
  </div>
  <div class="article-item" v-else>
    CARGANDO
  </div>
  </div>
</template>

<script>
import {Global} from '../Global'
export default {
  name: "Article",
  props:['article'],
  data() {
      return {
          url: Global.url
      }
  },
  methods: {
    iraArticle(id){
      console.log("SI ID ED es",id)
      this.$router.push(`/article/${id}`)
    }
  },
};
</script>

<style>
</style>
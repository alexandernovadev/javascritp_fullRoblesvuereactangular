<template>
  <div class="center">
    <section id="content">
      <article class="article-item article-detail" v-if="article">
        <br />

        <router-link
          class="btn"
          style="background-color: red !important"
          :to="'/edit/'+article._id"
        >EDIT</router-link>
        <button @click="removeArticle" class="btn" style="background-color: gray !important">ELIMIAR</button>

        <div class="image-wrap">
          <img
            v-if="article.image"
            :src="url+ 'getimage/'+article.image"
            :title="article.title"
            alt="Paisaje"
          />
          <img
            v-if="!article.image"
            src="https://grupocamacho.com/wp-content/themes/linstar/assets/images/default.jpg"
            :title="article.title"
            alt="Paisaje"
          />
        </div>

        <h1 class="subheader">{{article.title}}</h1>
        <span class="date">{{article.date | moment('from')}}</span>
        <p>{{article.content}}</p>

        <div class="clearfix"></div>
      </article>
      <article v-else>
        <br />
        <h2>NO se encuentra el articulo</h2>
      </article>
    </section>
    <Sidebar />
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "./Sidebar";
import { Global } from "../Global";
import swal from "sweetalert";

export default {
  name: "OneArticle",

  components: {
    Sidebar
  },
  mounted() {
    this.getArticle(this.$route.params.id);
    console.log(this.$route.params.id);
  },
  data() {
    return {
      url: Global.url,
      article: null
    };
  },
  methods: {
    getArticle(id) {
      console.log(`${this.url}article/${id}`);
      axios.get(`${this.url}article/${id}`).then(res => {
        console.log(res.data.status);
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    removeArticle() {
      swal({
        title: "Estas seguro de elimnar?",
        text: this.article.title,
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.delete(`${this.url}article/${this.article._id}`).then(res => {
            console.log(res);
            
            if(res.data.status == 'suucess')
            {
              swal( {
                title: "Articulo boorado",
                icon: "success"
               })
            }
          })
          this.$router.push('/home')
        } else {
          swal("Has cancelado la eliminacion");
        }
      });
    }
  }
};
</script>

<style>
</style>
<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="pelicula.image" :title="pelicula.title" alt="Paisaje" />
    </div>

    <h2>{{pelicula.title}}</h2>
    <span
      class="date"
      :class="{
            fondoverde: pelicula.year > 2000,
            fondoamarillo : pelicula.year < 2000}"
    >{{pelicula.year}}</span>

    <button class="btn" title="Leer Massss">Leer máas</button>
    <button class="btn" title="Agragar favorito"
    @click="enviarfavoritaalpadre(pelicula)">ADD FAVORITE</button>
    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Pelicula",

  // Recibir props

  props:['pelicula'],
  methods: {
    enviarfavoritaalpadre(pelicula){
      // console.log("TU PELI DESDE EL HIJO: ", pelicula);

      // Se puede pasart lo que quiera un objeto string, array etc
      this.$emit('favorita', pelicula)
      
    }
  },
};
</script>

<style>
</style>
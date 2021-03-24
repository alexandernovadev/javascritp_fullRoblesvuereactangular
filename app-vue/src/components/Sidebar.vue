<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <button @click.prevent="CrearArticle" class="btn btn-success">
        Crear artículo</button>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el artículo que buscas</p>
      <form @submit.prevent="busqueda">
        <input type="text" v-model="valueSearch" name="search " />
        <input type="submit" name="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",

  data() {
    return {
      valueSearch: ""
    };
  },
  methods: {
    busqueda() {
      console.log("Valor: ", this.valueSearch);
      this.$router.push(`/search/${this.valueSearch}`);
    },
    CrearArticle() {
      console.log("Sirve ?");
      
      this.$router.push(`/crearartilce`);
    }
  }
};
</script>

<style>
</style>
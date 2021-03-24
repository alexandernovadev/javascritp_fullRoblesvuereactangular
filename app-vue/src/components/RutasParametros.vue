<template>
  <section id="content">
    <h2 class="subheader">Parametros Rutas</h2>

    <!--Listado articulos-->
    <div id="articles">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img
            src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8"
            alt="Paisaje"
          />
        </div>

        <h2>Holas</h2>
        <span class="date">{{id_example}}</span>
        <button class="btn" @click="updateName('Nova')">EVENTO CLIKCK</button>
        <button class="btn" @click="redirecion()">Redirecion</button>
        <br />
        <!-- Este es como el NGMODEL o React.createRef() con el input -->
        <input type="text" v-model="nombre" />
        My name is :
        <strong>{{nombre}}</strong>
        <br />
        <h3>Condicionales</h3>

        <div v-if="paraif">Hola Profe es true</div> <hr/>
        <input type="number" v-model="edad">
        Mi edad es  <strong>{{edad}}</strong> 
        <p style="color:red;font-weight: bold" v-if="edad && edad >= 18 && edad < 65">
          Eres mayor de edad
        </p>

         <p style="color:purple;font-weight: bold" v-else-if="edad && edad >= 65">
          Eres de avanzada de edad
        </p>
        
        <p style="color:blue;font-weight: bold" v-else>
          Eres menor de edad
        </p>
        <h1>Itereacion</h1>
        <ol>
          <li v-for="todo in todos" :key="todo">{{ todo.text }}</li>
        </ol>

        <div class="clearfix"></div>
      </article>

      <!--AÑADIR ARTICULOS VIA JS-->
    </div>
  </section>
</template>

<script>
export default {
  name: "RutasParametroa",

  // Esto es lo primero que se executa when i call
  // the component

  created() {
    console.log("Estoy creandome");
  },
  updated() {
    console.log("Estoy actualizando");
  },
  mounted() {
    console.log("Estoy montado");

    // Asi capturo el valor de la ruta
    // raro el $route   raro raro y feo ademas
    this.id_example = this.$route.params.id;
  },
  destroyed() {
    console.log("Me destruyeron :(");
  },
  data() {
    return {
      data_index: 1,
      id_example: null,
      nombre: ":D",
      edad: 15,
      paraif: true,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ]
    };
  },
  methods: {
    updateName(name) {
      this.data_index += 1;
      this.id_example = `${name} ${this.data_index}`;
    },
    redirecion() {
      // this.$router.push('/blog')
      let name = "Hola marte";
      this.$router.push(`/rutasexample/${name}`);
      // O tambien se puede  ¿¿¿ MAS LARGO ????   si
      // this.$router.push({name: 'rutasexample',params:{id: 'hola_id'}})
    }
  }
};
</script>

<style>
</style>
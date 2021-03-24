<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo" @click="irahome">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand">
          <strong>Curso</strong>Vue
        </span>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home" active-class="actived">Home</router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="actived">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario" active-class="actived">Form</router-link>
          </li>
          <li>
            <router-link to="/peliculas" active-class="actived">Peliculas</router-link>
          </li>
          <li>
            <!-- Poner parametros el la url -->
            <!-- OJO CON EL NAME debe ir el las rutas  -->
              <router-link 
                :to="{
                  name:'rutasexample', 
                  params: {
                    id: 'desdel auta'
                    }}"
                active-class="actived">EXAMPLES</router-link>
          </li>
        </ul>
      </nav>

      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
    name: "Header", 
    methods: {
      irahome(){
        this.$router.push('/home')
      }
    },
};
</script>

<style>
</style>
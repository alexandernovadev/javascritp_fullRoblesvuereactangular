<template>
  <div>
    <Slider texto="Formulario" />
    <div class="center">
      <section id="content">
        <br />
        <form class="mid-form" @submit.prevent="EnviarFormulario()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model.trim="$v.user.nombre.$model" autocomplete="off"/>

            <!-- $v.miviladcion asi se busca saber si mi val es correct -->
            <small v-if="$v.user.nombre.$dirty && !$v.user.nombre.required"
            style="color: red !important;">Nombre es requerido</small>
            <!-- <p>-> DYRTY: {{$v.user.nombre.$dirty}}</p>
            <p>-> REQUIRED {{$v.user.nombre.required}}</p> -->
          </div>

          <div class="form-group">
            <label for="apellidos">Email</label>
            <input type="text" name="apellidos" v-model.trim="$v.user.email.$model" />
            <small v-if="$v.user.email.$dirty && !$v.user.email.email"
            style="color: red !important;">Email No valido</small>
            <!-- <p>{{$v.user.email.email}}</p> -->
          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model.trim="$v.user.bio.$model"></textarea>
            <small v-if="$v.user.bio.$dirty && !$v.user.bio.required"
            style="color: red !important;">Biografia requirida</small>
          </div>

          <div class="form-group radibuttons">
            <input type="radio" name="genero" value="hombre" v-model="user.genero" checked/> Hombre
            <input type="radio" name="genero" value="mujer" v-model="user.genero" /> Mujer
            <input type="radio" name="genero" value="otro" v-model="user.genero" /> Otro
          </div>

          <div class="clearfix"></div>
          <div v-if="user.nombre">{{user.nombre}} {{user.apellido}}</div>
          <input type="submit" value="Enviar" class="btn btn-success" 
          :disabled="$v.user.$invalid"/>
          <!-- <p>VALID {{$v.user.$invalid}}</p> -->
        </form>
      </section>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import { required,email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Formulario",
  components: {
    Slider,
    Sidebar
  },
  validations:{
    user:{
      nombre:{
        required,
        minLength: minLength(2)
      },
      email:{
        required,
        email
      },
      bio:{
        required,
        minLength: minLength(2)
      }
    }
  },
  data() {
    return {
      user: {
        nombre: "",
        email: "",
        bio: "",
        genero: ""
      }
    };
  },
  methods: {
    EnviarFormulario() {
      // console.log(this.user);

  console.log("Sirve");
  
      console.log(this.$v.user);
      // console.log("->",this.$v.user.email);
      // console.log("->",this.$v.user.nombre);
      
    }
  }
};
</script>

<style>
</style>
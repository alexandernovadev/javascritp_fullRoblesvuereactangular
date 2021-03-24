<template src="./CreateArticle.html"></template>
<script>
// OJOOOO el html tiene que llamarse igual que el .vue
import { required, minLength } from "vuelidate/lib/validators";
import Slider from "./Slider.vue";
import axios from "axios";
import { Global } from "../Global";
import Sidebar from "./Sidebar.vue";
import Article from "../Models/ArtcicleModel";
import swal from 'sweetalert';

export default {
  name: "CreateArticle",
  components: {
    Slider,
    Sidebar
  },
  data() {
    return {
      article: {
        title: "",
        content: "",
        image: null,

      },
      modelarticle: new Article("", "", null, ""),
      url: Global.url,
      file: "",
       isEdit: false
    };
  },
  mounted() {
    console.log("Mi articles es ", this.modelarticle);
    console.log("Mi atcle normal es", this.article);
  },
  validations: {
    article: {
      title: {
        required,
        minLength: minLength(2)
      },
      content: {
        required,
        minLength: minLength(2)
      }
      // image: null
    }
  },
  methods: {
    EnviarFormulario() {
      console.log(this.article);

      axios.post(`${this.url}save`, this.article).then(res => {
        console.log("RTA", res);

          swal(
            'Articulo Creado',
            'El articulo se ha craeado correctamente',
            'success',
            
          )
        if (this.file != null && this.file != "") {
          const formData = new FormData();
          formData.append("file0", this.file, this.file.name);

          axios.post(`${this.url}upload_image/${res.data.article._id}`, formData)
          .then(res=>{
            console.log("Imagen subida", res);
            
          })
          .catch(err=>console.log(err))
        }
      });
    },
    filechangue() {
      // Recojer el fichero
      // NO olvidar crear un id =file
      // y una ref=file
      this.file = this.$refs.file.files[0];

      console.log(this.file);
    }
  }
};
</script>
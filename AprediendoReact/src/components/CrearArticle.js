import React, { Component } from "react";
import Slider from "./Slider";
import Aside from "./Aside";
import axios from "axios";
import SimpleReactValidator from 'simple-react-validator';
import Global from "./Global";
import Swal from 'sweetalert2'

export default class CrearArticle extends Component {
  url = Global.url;
  title = React.createRef();
  content = React.createRef();

  state = { article: {}, status: null, selectedFile: null };

  componentWillMount() {
    this.validator = new SimpleReactValidator()
  }

  changueState = () => {
    this.setState({
      article: {
        title: this.title.current.value,
        content: this.content.current.value,
        selectedFile: null
      }
    });
  };
  
  save = e => {
    e.preventDefault();

    if (this.validator.allValid()) {
      this.changueState();

      axios.post(`${this.url}save`, this.state.article).then(res => {
        // console.log(res);
        this.setState({
          article: res.data.article
        });
        // Subir La imagen

        console.log(this.state);

        if (this.state.selectedFile !== null) {
          // Sacar el Id del articulo Guardado
          var iD = this.state.article._id;

          // Crear un form Data y add el fichero

          const formData = new FormData();
          // Se crea un formulario WOOOUUU

          // Vamos a agregarle data al formulario
          formData.append(
            "file0",
            this.state.selectedFile,
            this.state.selectedFile.name
          );
          // Este formData recibe tres parametro
          // 1. El name de key en backend
          // 2. El archivo a subir
          // 3. El name del archivo

          // Hacer peticion Ajax

          // El tercer parametro se puede hacer una barra de progreso ?? wouu
          axios
            .post(`${this.url}upload_image/${iD}`, formData)
            .then(res => {
              // console.log(res.data);
              if (res.data.articlepdated) {

                Swal.fire(
                  'Bien Hecho',
                  'Dato subido Correctamente',
                  'success'
                )
                this.setState({
                  article: res.data.articlepdated,
                  status: "sucess"
                });
              } else {
                this.setState({
                  status: "error"
                });
              }
            })
            .catch(err => {
              console.log("Error al subir la imagen", err);
            });
        } else {
          this.setState({
            status: "sucess"
          });
        }
      });
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }

  };
  goBack = () => {
    this.props.history.goBack();
  };

  fileChangue = e => {
    // console.log(e.target.files[0]);
    // Aui esta el fichero
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  render() {
    return (
      <div className="w3-animate-top">
        <Slider title="Crear Articulo" sty="slider-small" />

        <div className="center">
          <section id="content">
            <br />
            <button className="btn" onClick={this.goBack}>
              Ir atras
            </button>
            <br />

            {this.state.status === "sucess" ? (
              <div>Dato guardado Correctamente</div>
            ) : (
                this.state.status === "error" && <div>Error</div>
              )}

            <form method="POST" className="mid-form" >
              <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input
                  type="text"
                  name="title"
                  ref={this.title}
                  onChange={this.changueState}
                />
                {this.validator.message('title', this.state.article.title, 'required|alpha')}
              </div>
              <div className="form-group">
                <label htmlFor="content">Contenido</label>
                <textarea
                  name="content"
                  ref={this.content}
                  onChange={this.changueState}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="file0">Subir Imagen</label>
                <input type="file" name="file0" onChange={this.fileChangue} />
              </div>
              <br />
              <input type="submit" value="Enviar" className="btn btn-success" onClick={this.save} />
            </form>
          </section>

          <Aside />
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

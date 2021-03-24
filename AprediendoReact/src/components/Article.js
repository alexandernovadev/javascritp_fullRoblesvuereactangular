import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import Global from "./Global";
import Moment from "react-moment";
import "moment/locale/es";
import Aside from "./Aside";
import Swal from "sweetalert2"

export default class Article extends Component {
  id = this.props.match.params.id;
  url = Global.url;

  state = {
    article: {},
    status: null
  };
  UNSAFE_componentWillMount() {
    this.getArticle();
    // console.log(this.props);

  }
  // constructor(props) {
  //   super(props);
  //   this.goBack = this.goBack.bind(this); // i think you are missing this
  // }
  // Para bindear es mejor funcion de flecha

  goBack = () => {
    this.props.history.goBack();
  }

  getArticle = () => {
    axios
      .get(`${this.url}article/${this.id}`)
      .then(res => {
        this.setState({
          article: res.data.article,
          status: "success"
        });
        // console.log(this.state.article);
      })
      .catch(err => {
        console.log(err);
      });
  };

  eliminar = (id) => {
    console.log(id);

    Swal.fire({
      title: 'Estas Seguro?',
      text: "Se eliminara  " + this.state.article.title + "  definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si Borrar!'
    }).then((result) => {
      if (result.value) {

        axios.delete(`${this.url}article/${id}`)
          .then(
            res => {
              this.setState({
                status: "deleted"
              })
              Swal.fire(
                'Borrado',
                'El articulo ha sido borrado ',
                'success'
              )
            });

      }
    })



  }
  editar = (id) => {
    console.log(id);

  }
  render() {


    if (this.state.status === 'deleted') {
      return <Redirect to="/blog" />
    }

    var article = this.state.article;
    if (this.state.status === "success") {
      return (
        <div className="center w3-animate-left">
          <section id="content">
            <br />
            <button className="btn" onClick={this.goBack}>
              Ir atras
            </button>

            <article className="article-item article-detail">
              <div className="image-wrap">
                {article.image != null ? (
                  <img
                    src={this.url + "getimage/" + article.image}
                    alt="Paisaje"
                  />
                ) : (
                    <img
                      src={logo}
                      alt="Paisaje"
                    />
                  )}
              </div>

              <h1 className="subheader">{article.title}</h1>
              <span className="date">
                <Moment fromNow>{article.date}</Moment>
              </span>
              <p>{article.content}</p>

              <div className="clearfix"></div>
              <hr />
              <Link className="w3-btn linke w3-yellow ml-4 w3-round w3-left"
              to={"/editar/"+article._id}>
                Editar
            </Link>
              <button className="w3-btn w3-red ml-4 w3-round w3-left"
                onClick={() => this.eliminar(article._id)}>
                Eliminar
            </button>
            </article>
          </section>

          <Aside />

          <div className="clearfix"></div>
        </div>
      );
    } else {
      return (
        <div id="logo" className="center">
          <img src={logo} className="app-logo" alt="Logotipo" />
          <span id="brand">
            <strong>Cargando</strong>
          </span>
        </div>
      );
    }
  }
}

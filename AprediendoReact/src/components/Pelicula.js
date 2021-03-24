import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Pelicula extends Component {

  marcar =()=>
  {
    this.props.pelifavorita(this.props.pelicula);
  }

  render() {
    const { title, image } = this.props.pelicula;
    // Utilizando el destructuring le voy a pasar
    // los valores de title e image
    // que vienen del padre, this.props.pelicula;
    // los props son como los inputs de Angular <3
    return (
      <article className="article-item" id="article-template">
        <div className="image-wrap">
          <img src={image} alt={title} />
        </div>

        <h2>{title}</h2>
        <span className="date">Hace 5 minutos</span>
        <Link to="/home">Leer Mas</Link>
        <button className="btn"
            onClick={this.marcar}>
          Favorita
          </button>

        <div className="clearfix"></div>
      </article>
    );
  }
}

import React, { Component } from "react";
import Pelicula from "./Pelicula";

export default class Peliculas extends Component {
  state = {
    peliculas: [
      {
        title: "Gran Torino",
        image:
          "https://www.marquid.com/wp-content/uploads/2015/05/gran-torino.jpg"
      },
      {
        title: "Blade Runner",
        image:
          "https://as01.epimg.net/tikitakas/imagenes/2017/10/05/portada/1507190787_986328_1507190908_noticia_normal.jpg"
      },
      {
        title: "Coquero",
        image:
          "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer//Wa_3PRZoaAUuWnarMrnvqMpTMjA=/1660x934/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/NBMEPDT3VVHXJV2X22YIRIOEQI.jpg"
      }
    ],
    nombre: "Alexander Nova",
    favorita: {}
  };

  // Ciclos de Vida
  /* 
  render() : rendea la vista
  
  componentWillMount() : Antees de que el componente cargue

  componentDidMount()  : Despues de que cargue el componente el render ya se ejecuto
  cuando para por este metodo


  componentWillUnmount():  Cuando se va desmontar un componente

  */


  CambiarTitulo = () => {
    var { peliculas } = this.state;
    peliculas[0].title = ">Cambia el tile";

    this.setState({
      peliculas: peliculas
    });
  };

  pelimarcada = pel => {
    // console.log("LA pelicula Favorita es: ");
    // console.log(pel);
    this.setState({
      favorita: pel
    });
  };

  render() {
    return (
      <div id="articles" className="peliculas w3-animate-left">
        <h1>Peliculas de {this.state.nombre}</h1>
        <button className="btn" onClick={this.CambiarTitulo}>
          Cambiar Pelicula
        </button>

        { this.state.favorita.title ? (
        <p>
          La Pelicula Favorita &nbsp;
          <strong>{this.state.favorita.title}</strong>
        </p>):(
          <p>No hay peliculas Favoritas</p>
        )
        } 

        {this.state.peliculas.map((pelicula, i) => {
          return (
            <Pelicula
              // Es importante poner el key
              //  porque react identifica el elemento en el DOM
              key={i}
              pelicula={pelicula}
              pelifavorita={this.pelimarcada}
            />
          );
        })}
      </div>
    );
  }
}

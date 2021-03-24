import React, { Component } from "react";
import Aside from "./Aside";
import Slider from "./Slider";

export default class Formulario extends Component {
  nombre = React.createRef();
  apellido = React.createRef();
  biografia = React.createRef();
  hombre = React.createRef();
  mujer = React.createRef();
  otro = React.createRef();

  state = { user: {} };
  recibirForm = e => {
    e.preventDefault();
    // console.log("SIrve el form");
    // console.log(this.nombre.current.value);

    var user = {
      nombre: this.nombre.current.value,
      apellido: this.apellido.current.value,
      biografia: this.biografia.current.value
    };

    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="w3-animate-left">
        <Slider title="Formulario" sty="slider-small" />
        <div className="center">
          <section id="content">
            {this.state.user.nombre && (
              <div>
                <h1>Datos Reactivos con el Onchangue</h1>
                <p>
                  Nombre: <strong>{this.state.user.nombre}</strong>{" "}
                </p>
                <p>
                  Apellido: <strong>{this.state.user.apellido}</strong>{" "}
                </p>
                <p>
                  Bio: <strong>{this.state.user.biografia}</strong>{" "}
                </p>
              </div>
            )}

            {/* Onchangue es el dato reactivo, severo */}
            <form
              className="mid-form"
              onSubmit={this.recibirForm}
              onChange={this.recibirForm}
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombre} />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellido} />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" ref={this.biografia}></textarea>
              </div>

              <div className="form-group radibuttons">
                <input
                  type="radio"
                  name="genero"
                  value="hombre"
                  ref={this.hombre}
                />{" "}
                Hombre
                <input
                  type="radio"
                  name="genero"
                  value="mujer"
                  ref={this.mujer}
                />{" "}
                Mujer
                <input
                  type="radio"
                  name="genero"
                  value="otro"
                  ref={this.otro}
                />{" "}
                Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </section>
          <Aside />
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

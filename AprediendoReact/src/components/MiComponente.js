import React, { Component } from "react";

export default class MiComponente extends Component {
  contador = 0;

  //   Para hacer un evento reactivo hay que utilizar this.state
  //   y poner las variables que van a ser reactivas
  //   constructor(props) {
  //     // Se tiene que poner el constructor con el metodo props
  //     // ENTONCES CON SUPER LLAMO AL LAS FUNCIONES PADRE Y TRAIGO PROPS
  //     super(props);

  //     // La varables que meta en en json son las que puedo cambiar
  //     this.state = { contador: 0 };
  //   }

  // Asi tambien funciona es state, pero MEAN que la palabra state
  // y una reservacion del Framework

  state = { contador: 0 };

  HolaMarte(nombre, edad) {
    let presentacion = (
      <div>
        <h2>Hola {nombre}</h2>
        <h5>Tengo {edad}</h5>
      </div>
    );

    return presentacion;
  }

  Sumar() {
    //  Para hacerla que cambie llamos el setState y le asaigno el nuevo valor
    // OJO PARA CAMBIARLAS EN HAY QUE TENER UNA FUNCION ONCLICK ASI:
    //  onClick={this.Restar.bind(this)}
    // SE UTLIZA .bind OSEA UNA ESTE MISMA FUNCION un poco feo, en angular es mas easy
    // pero raact es puro js, mas rapido

    // Otra cosa es poner la varible es la vista llamando el state
    // {this.s}

    this.setState({
      contador: this.state.contador + 1
    });
  }

  Restar= ()=> {
    // Vamos a utilizar funciones de flecha para no utlizar el .bind
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    var nombre = "Alexander";

    let receta = {
      nombre: "Pizza",
      ingredientes: ["Tomate", "Queson", "Jamon Cocido"],
      calorias: 452
    };

    return (
      <div>
        <h1>Jsx y Map</h1>
        <h2>{this.HolaMarte(nombre, 21)}</h2>
        <h3>{"Nombre:" + receta.nombre}</h3>
        <h3>{"Calorias:" + receta.calorias}</h3>
        <ol>
          {receta.ingredientes.map((ingrediente, i) => {
            return <li key={i}>{ingrediente}</li>;
            // Asi se recorre un Array
          })}
        </ol>
        <hr />
        <h1>Funciones</h1>
        <p>Contador : {this.state.contador}</p>
        <p>
          <input
            type="submit"
            value="Sumar"
            className="btn"
            onClick={this.Sumar.bind(this)}
          />

          <input
            type="submit"
            value="Restar"
            className="btn"
            onClick={this.Restar}
          />
        </p>
      </div>
    );
  }
}

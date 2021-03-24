import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Aside extends Component {
  palabra = React.createRef();

  state = {
    ir: null
  }
  ir = false;

  busqueda = e => {
    e.preventDefault();
    // console.log(this.palabra.current.value);
    this.setState({
      ir : true
    })
  };
  render() {
    if (this.state.ir) {
      return <Redirect to={"/busqueda/" + this.palabra.current.value} />;
    } else {
      return (
        <aside id="sidebar">
          <div id="nav-blog" className="sidebar-item">
            <h3>Puedes hacer esto</h3>
            <Link to="/crear" className="btn btn-success">
              Crear artículo
            </Link>
          </div>

          <div id="search" className="sidebar-item">
            <h3>Buscador</h3>
            <p>Encuentra el artículo que buscas</p>
            <form onSubmit={this.busqueda}>
              <input type="text" ref={this.palabra} />
              <button className="btn" >
                Buscar
              </button>
            </form>
          </div>
        </aside>
      );
    }
  }
}

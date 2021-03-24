import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Error from "./Error";
import Practicas from "./Practicas";
import Home from "./Home";
import Blog from "./Blog";
import Formulario from "./Formulario";
import Search from "./Search";
import Article from "./Article";
import CrearArticle from "./CrearArticle";
import EditarArticle from "./EditarArticle";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        {/* Se pone exact para que no herede rutas anteriores no Anidacion */}
        {/* Ose esta es la ruta exacta sin nada mas  */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/formulario" component={Formulario} />
        <Route exact path="/practicas" component={Practicas} />
        <Route exact path="/crear" component={CrearArticle} />
        <Route exact path="/editar/:id" component={EditarArticle} />
        <Route exact path="/busqueda/:palabra" component={Search} />

        <Route exact path="/blog/article/:id" component={Article} />
        <Route
          exact
          path="/renderlink"
          render={() => (
            <div>
              Se peuede meter un render directamente desde una route, lo cual es
              como una mala practica muy desordenado
            </div>
          )}
        />

        <Route
          exac
          path="/parametros/:id/:nombre?"
          render={props => {
            var id = props.match.params.id;
            var nombre = props.match.params.nombre;
            return (
              <div className="content">
                <h1>Los parametros</h1>
                <p>El id es : {id}</p>
                {nombre && <p>El Nombre es : {nombre}</p>}
              </div>
            );
          }}
        />
        <Route component={Error} />
      </Switch>
    );
  }
}

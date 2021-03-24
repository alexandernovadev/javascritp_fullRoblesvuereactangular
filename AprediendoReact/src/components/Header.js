import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/* LOGO */}
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Curso</strong>React
            </span>
          </div>

          {/* MENU */}
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/home" activeClassName="activeroute">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="activeroute">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/formulario" activeClassName="activeroute">
                  Formulario
                </NavLink>
              </li>
              <li>
                <NavLink to="/renderlink" activeClassName="activeroute">
                  Pagina 1
                </NavLink>
              </li>
              <li>
                <NavLink to="/practicas" activeClassName="activeroute">
                  Practicas
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* LIMPIAR FLOTADOS */}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

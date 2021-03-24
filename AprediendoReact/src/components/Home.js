import React, { Component } from 'react'
import Aside from './Aside'
import Slider from './Slider'
import Articles from "./Articles"

export default class Home extends Component {
    render() {
        return (
            <div className="w3-animate-left">
            <Slider
              title="Bienvenido a Aprendiendo React con Victor Robles Web"
              btn="Ver mas"
              sty="slider-big"
            />
            <div className="center">
              <section id="content">
                <h1>Ultimos Articulos</h1>
                <Articles tipoarticles="articles/last"/>
              </section>
              <Aside />
              <div className="clearfix"></div>
            </div>
          </div>
        )
    }
}

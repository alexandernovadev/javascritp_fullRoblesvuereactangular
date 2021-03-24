import React, { Component } from "react";
import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";
import Aside from "./Aside";
import Slider from "./Slider";

export default class Practicas extends Component {
  render() {
    return (
      <div className="w3-animate-left">
      <Slider
        title="Practicas con React Ver code "
        sty="slider-small"
      />
      <div className="center">
        <section id="content">
        <MiComponente/>
        <Peliculas/>
        </section>
        <Aside />
        <div className="clearfix"></div>
      </div>
    </div>
    
    );
  }
}

import React, { Component } from "react";
import Slider from "./Slider";
import Aside from "./Aside";
import Articles from "./Articles";

export default class Blog extends Component {
  render() {
    return (
      <div className="w3-animate-left">
        <Slider title="Blog" btn="Ver mas" sty="slider-small" />
        <div className="center">
          <section id="content">
            <Articles tipoarticles="articles"/>
          </section>

          <Aside />
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

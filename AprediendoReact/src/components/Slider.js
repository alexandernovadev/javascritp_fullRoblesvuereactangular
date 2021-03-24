import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Slider extends Component {
  render() {
    return (
      <div id="slider" className={this.props.sty}>
        <h1>{this.props.title}</h1>
        {this.props.sty === "slider-big" && (
          <Link to="/blog" className="btn-white">
            {this.props.btn}
          </Link>
        )}
      </div>
    );
  }
}

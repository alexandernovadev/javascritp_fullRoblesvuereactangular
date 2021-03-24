import React, { Component } from 'react'
import Slider from './Slider';
import Articles from './Articles';
import Aside from './Aside';

export default class Search extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
    render() {

        var palabra = this.props.match.params.palabra;
        return (
            <div className="w3-animate-left">
            <Slider
              title={"Busqueda: "+ palabra}
              sty="slider-small"
            />
            <div className="center">
              <section id="content">
                <Articles tipoarticles={"search/"+palabra}/>
              </section>
              <Aside />
              <div className="clearfix"></div>
            </div>
          </div>
        )
    }
}

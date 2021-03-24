import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import Global from "./Global";
import Moment from "react-moment";
import "moment/locale/es";

export default class Articles extends Component {
  url = Global.url;
  state = {
    articles: {},
    status: null
  };

  UNSAFE_componentWillMount() {
    this.getArticles();
  }

  getArticles = () => {
    axios
      .get(`${this.url}${this.props.tipoarticles}`)
      .then(res => {
        this.setState({
          articles: res.data.articles,
          status: "success"
        });
      })
      .catch(err => {
        this.setState({
          status: "none"
        });
      });
  };

  render() {
    if (this.state.status === "success") {
      return (
        <div id="articles">
          {this.state.articles.map((article, i) => {
            return (
              <article
                className="article-item"
                id="article-template"
                key={article._id}
              >
                <div className="image-wrap">
                  {article.image != null ? (
                    <img
                      src={this.url + "getimage/" + article.image}
                      alt="Paisaje"
                    />
                  ):(
                    <img
                    src={logo}
                    alt="Paisaje"
                  />
                  )}
                </div>

                <h2>{article.title}</h2>
                <span className="date">
                  <Moment fromNow>{article.date}</Moment>
                </span>
                <Link to={"/blog/article/" + article._id}>Leer más</Link>

                <div className="clearfix"></div>
              </article>
            );
          })}
        </div>
      );
    } else if (this.state.status === "none") {
      return (
        <div id="logo" className="center">
          <strong>NO hay datos</strong>
        </div>
      );
    } else {
      return (
        <div id="logo" className="center">
          <img src={logo} className="app-logo" alt="Logotipo" />
          <span id="brand">
            <strong>Cargando</strong>
          </span>
        </div>
      );
    }
  }
}

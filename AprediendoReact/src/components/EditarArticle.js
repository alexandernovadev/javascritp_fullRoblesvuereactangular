import React, { Component } from "react";
import Slider from "./Slider";
import Aside from "./Aside";
import axios from "axios";
import SimpleReactValidator from 'simple-react-validator';
import Global from "./Global";
import Swal from 'sweetalert2'

export default class EditarArticle extends Component {
    url = Global.url;
    title = React.createRef();
    content = React.createRef();

    artucleID = this.props.match.params.id;

    state = { article: {}, status: null, selectedFile: null };

    UNSAFE_componentWillMount() {
        this.validator = new SimpleReactValidator();
        this.getArticle()
    }

    getArticle = () => {
        axios.get(`${this.url}article/${this.artucleID}`)
            .then(res => {
                console.log(res.data);

                this.setState({
                    article: res.data.article
                })
            })
    }

    changueState = () => {
        this.setState({
            article: {
                title: this.title.current.value,
                content: this.content.current.value,
                image: this.state.article.image
            },
            selectedFile: null
        });
    };


    edit = e => {
        e.preventDefault();


        this.changueState();

        if (this.validator.allValid()) {

            axios.put(`${this.url}article/${this.artucleID}`, this.state.article).then(res => {
                // console.log(res);
                this.setState({
                    article: res.data.articleUpdate
                });
                // Subir La imagen

                console.log(this.state);

                if (this.state.selectedFile !== null) {
                    // Sacar el Id del articulo Guardado
                    var iD = this.state.article._id;

                    // Crear un form Data y add el fichero

                    const formData = new FormData();
                    // Se crea un formulario WOOOUUU

                    // Vamos a agregarle data al formulario
                    formData.append(
                        "file0",
                        this.state.selectedFile,
                        this.state.selectedFile.name
                    );
                    // Este formData recibe tres parametro
                    // 1. El name de key en backend
                    // 2. El archivo a subir
                    // 3. El name del archivo

                    // Hacer peticion Ajax

                    // El tercer parametro se puede hacer una barra de progreso ?? wouu
                    axios
                        .post(`${this.url}upload_image/${this.artucleID}`, formData)
                        .then(res => {
                            // console.log(res.data);
                            if (res.data.articlepdated) {

                                Swal.fire(
                                    'Bien Hecho',
                                    'Dato Editado Correctamente',
                                    'success'
                                )
                                this.setState({
                                    article: res.data.articlepdated,
                                    status: "sucess"
                                });
                            } else {
                                this.setState({
                                    status: "error"
                                });
                            }
                        })
                        .catch(err => {
                            console.log("Error al subir la imagen", err);
                        });
                } else {
                    this.setState({
                        status: "sucess"
                    });
                }
            });
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }

    };
    goBack = () => {
        this.props.history.goBack();
    };

    fileChangue = e => {
        // console.log(e.target.files[0]);
        // Aui esta el fichero
        this.setState({
            selectedFile: e.target.files[0]
        });
    };

    render() {
        console.log(this.state);
        return (
            <div className="w3-animate-top">
                <Slider title="Crear Articulo" sty="slider-small" />

                <div className="center">
                    <section id="content">
                        <br />
                        <button className="btn" onClick={this.goBack}>
                            Ir atras
                        </button>
                        <br />

                        {this.state.article &&

                            <form className="mid-form" >
                                <div className="form-group">
                                    <label >Titulo</label>
                                    <input
                                        type="text"
                                        name="title"
                                        defaultValue={this.state.article.title}
                                        ref={this.title}
                                        onChange={this.changueState}
                                    />
                                    {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="content">Contenido</label>
                                    <textarea
                                        name="content"
                                        defaultValue={this.state.article.content}
                                        ref={this.content}
                                        onChange={this.changueState}
                                    ></textarea>
                                    {this.validator.message('content', this.state.article.content, 'required|alpha_num_space')}
                                </div>

                                {/* <h1>{this.state.article.image}</h1> */}
                                {this.state.article.image &&
                                    <img src={this.url + "getimage/" + this.state.article.image}
                                        className="thumb"
                                        alt="sdf" />
                                }
                                <div className="clearfix"></div>
                                <div className="form-group">
                                    <label htmlFor="file0">Subir Imagen</label>
                                    <input type="file" name="file0" onChange={this.fileChangue} />
                                </div>
                                <br />
                                <input type="submit" value="Editar|"
                                    className="btn btn-success" onClick={this.edit} />
                            </form>
                        }
                    </section>

                    <Aside />
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

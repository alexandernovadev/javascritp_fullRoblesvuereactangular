'use strict'

var validator= require('validator');
var article = require('../models/article.model');
var fs = require('fs');
var path = require('path');

var controller = 
{
    test: function(req, response)
    {
        return response.status(200).send({
            messague: 'Controlller topic funcionando'
        });
    },
    
    save: function (req, res)
    {
        // Recoger parametros por POST
        var params = req.body;

        // Validar datos
        try
        {
            var validate_tile = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } 
        catch (error)
        {   
            return res.status(200).send({
                status: 'error',
                messague: 'Faltan datos por enviar'
            });
        }

        if(validate_tile && validate_content)
        {
            // Crear el objeto a guardar
            var article_obj = new article();

            // Asignar valores
            article_obj.title = params.title;       
            article_obj.content = params.content; 
            article_obj.image = null;
            
            // Guadar datos

            article_obj.save((err, articleStored)=>{

                if(err || !articleStored)
                {
                    return res.status(404).send({
                        status: 'error',
                        messague: 'Error al guargar',
                    });
                }
                else
                {
                    return res.status(200).send({
                        status: 'success',
                        messague: 'Article Guardado',
                        article : article_obj
                    });
                }
            });
        }
        else
        {
            return res.status(200).send({
                status: 'error',
                messague: 'Los datos no son validos'
            });
        }

    },

    getArticles:(req, res) =>
    {

        let query = article.find({});
        // Guarda la query

        var last = req.params.last;
        // recoje el parametro opcional last 

        if(last || last != undefined)
        {
            // si es dieferente de nulo pone un limite de max 5 datos para devolver
            query.limit(5);
        }
        // Find Para sacar los datos

      query.sort('-_id').exec((err,articles)=>{
            // -id -> ordena de manera desendente
            // id -> ordena de manera asendente
 
            if(err)
            {
                return res.status(404).send({
                    status: 'error',
                    messague: 'Erro al devolver articulos'
                });
            }
            else
            {
                return res.status(200).send({
                    status: 'success',
                    articles
                });
            }
        });
    },

    getArticle: (req, res)=>
    {
        let id = req.params.id;

        if(id != null || id != undefined)
        {

            article.
            findById(id, (err, articleSelect)=>
            {
                if(err)
                {
                    return res.status(404).send({
                        status: 'error',
                        messague: 'No Exite articulo'
                    });
                }
                else
                {
                    return res.status(200).send({
                        status: 'success',
                        article: articleSelect
                    });
                }
            });
        }
        else
        {
            return res.status(400).send({
                status: 'error',
                messague: 'No se ha ingresado ningun id'
            });
        }
        

    },

    update:(req,res)=>
    {

        // Recoger ID del article
        let id = req.params.id;

        // Recoger parametros por POST
        var params = req.body;

        // Validar datos
        try
        {
            var validate_tile = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } 
        catch (error)
        {   
            return res.status(200).send({
                status: 'error',
                error,
                messague: 'Faltan datos por enviar'
            });
        }

        if(validate_tile && validate_content)
        {
            article.findOneAndUpdate({_id: id},params,{new: true},(err, articleUpdate)=>
            {
                if(err)
                {
                    return res.status(500).send({
                        status: 'error',
                        messague: 'No se hizo la actualizacion error servidor'
                    });
                }
                else
                {
                    return res.status(200).send({
                        status: 'suucess',
                        messague: 'Validacion Correcta',
                        articleUpdate
                    });
                }
            });
        }
        else
        {
            return res.status(200).send({
                status: 'error',
                messague: 'La Validacion no es correcta'
            });
        }

    },

    delete: (req, res)=>
    {
        let id = req.params.id;

        article.findOneAndDelete({_id: id},(err, articleDeleted)=>
        {
            if(err)
            {
                return res.status(500).send({
                    status: 'error',
                    messague: 'No se hizo la deleted del article error servidor'
                });
            }
            else
            {
                return res.status(200).send({
                    status: 'suucess',
                    messague: 'Articulo Borrado',
                    articleDeleted
                });
            }
        });
    },

    uploadimage: (req, res)=>
    {
        let file = req.files.file0;
        let id = req.params.id;

        // console.log(req.files.file0);
        
        article.findOne({_id: id},(err, articleExsit)=>{
            
            if(err)
            {
                return res.status(500).send({
                    status: 'error',
                    messague: 'No se hizo la updated image error servidor'
                });
            }
            else if(articleExsit == null)
            {
                return res.status(404).send({
                    status: 'error',
                    messague: 'El ID de la imagen no existe'
                });    
            }
            else if (file.mimetype == 'image/jpeg' || 
                    file.mimetype == 'image/gif' || 
                    file.mimetype == 'image/png' ||
                    file.mimetype == 'image/jpg' )
                {
                     console.log(articleExsit.image);  
                    let newname = Date.now() + file.name;
                    let pathFile = './uploads/images/' + newname; 

                    // Borrar Imagen Anterior por si existiá

                    if(articleExsit.image != null)
                    {
                        let pathtemp = './uploads/images/' + articleExsit.image; 
                        fs.access(pathtemp, fs.constants.F_OK, (err) => {
                            if(!err)
                            {
                                // console.log("Existe El Directorio");   
                                fs.unlink(pathtemp,(err)=>{
                                    if(err) console.log('No se borro');
                                });
                            }
                        else{/*console.log("NOOOOO Existe El Directorio"); */ }
                        });
                
                    }
                    file.mv(pathFile , (err)=>{
                        if(!err)
                        {
                            // TODO No se puede sibir la imagen y los datos al time
                            // Such solo suba la imagen y el formulario lo deje vacio ?? ah
        
                            let params = {image: newname};
                            article.findOneAndUpdate({_id: id},params,{new: true},(err, articlepdated)=>{
        
                                if(err)
                                {
                                    return res.status(500).send({
                                        status: 'error',
                                        messague: 'No se hizo la updated image error servidor'
                                    });
                                }
                                else
                                {
                                    return res.status(200).send({
                                        status: 'success',
                                        messague: 'Imagen Subida',
                                        nameimg: newname,
                                        articlepdated
                                    });
                                }
                            });
        
                        }
                        else
                        {
                            return res.status(400).send({
                                status: 'error',
                                messague: 'Error Al subir la imganes',
                                nameimg: newname
                            });
                        }
                    });
            }
            else
            {
                return res.status(400).send({
                    status: 'error',
                    messague: 'No es una Imagen',
                    nameimg: file.name
                });
            }
            
        });
    },

    getImagen: (req, res) =>
    {
        var fileName = req.params.nameimg;
        var pathFile = './uploads/images/' + fileName;


        fs.exists(pathFile, (exists) => {
            // Si exisst da true
            // Comprueba si la imagen
            if (exists) {
                return res.sendFile(path.resolve(pathFile));
            }
            else {
                return res.status(404).send({
                    status: 'error',
                    messague: 'La imagen no existe',
                });
            }
        }); 

    },

    search: (req, res) => {
        // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or
        // $options i es caso sensitivo acepta lowercase o UpperCase
        article.find({ "$or": [
            { "title": { "$regex": searchString, "$options": "i"}},
            { "content": { "$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec((err, articles) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la petición !!!'
                });
            }
            
            if(!articles || articles.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos que coincidan con tu busqueda !!!'
                });
            }
            else
            {   
                return res.status(200).send({
                    status: 'success',
                    articles
                });
            }

        });
    }

}

module.exports =  controller;
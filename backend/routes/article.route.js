 'use strict'

var express = require('express');
var ArticleController = require('../controllers/article.controller');
var router = express.Router();
// var md_auth = require('../middlewares/auth');s


router.get('/articletest', ArticleController.test);  
router.post('/save', ArticleController.save);  
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
router.post('/upload_image/:id', ArticleController.uploadimage);
router.get('/getimage/:nameimg', ArticleController.getImagen);
router.get('/search/:search', ArticleController.search);

module.exports = router;
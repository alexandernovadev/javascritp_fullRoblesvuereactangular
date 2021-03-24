'use strict'
require('dotenv').config()
var mongoose = require('mongoose');


var app = require('./app');
var port = process.env.PORT || 3999;
console.log(process.env.NAME);





// mongoose.Promise = global.Promise;
// mongoose.set('useFindAndModify', false);
// mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/backend-js', {useNewUrlParser: true})
.then(()=>{
    
    console.log('La connexion a MOnGODB well DONE');

    // Crear el Servidor
    // Escucha perticiones HTTP
    app.listen(port, ()=>
    {
        console.log(`The Server http://localhost:${port} esta funcionando`);
        console.log(" ");
        console.log(" ");
    });

}).catch(error=> console.log("Aui error", error));
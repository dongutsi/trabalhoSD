//Banco.js

var mongoose = require('mongoose');
var dbString = "mongodb://localhost/";




mongoose.connect(dbString);
var conexaoBanco = mongoose.connection;

conexaoBanco.on('error', console.error.bind(console, 'Erro ao conectar ao Banco!'));

conexaoBanco.once('open', function(){
    //schema do banco
    var clienteSchema =  mongoose.Schema({

          nome: String,
          idade: String,
          endereco: String,
          active: Boolean,
          //dateCreation: new Date()

    });

    exports.Cliente = mongoose.model('Cliente', clienteSchema);

});

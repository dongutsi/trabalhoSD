//app.js

//variaveis que representam os módulos
//=========================================
var app = require('./app_config');
var validator = require('validator');
var controller = require('./controller.js');
//=========================================


//tratamento das requisições
//=========================================
// GET
app.get('/',function(req,res){

    res.end("Servidor on!");

});


//GET com validação de usuário
app.get('/clientes',function(req,res){
/*
    if(req.params(id))
    {

      var id = validator.trim(validator.escape(req.param('id')));

        if(id == '123456')
        {

            controller.procurar(function(resposta){

                    res.json(resposta);

            });
        }
    }
    */
    controller.listar(function(resposta){

            res.json(resposta);

    });
});

//POST
app.post('/clientes', function(req,res){

      //var id = validator.trim(validator.escape(req.param('id')));
      var nome = validator.trim(validator.escape(req.param('nome')));
      var idade = validator.trim(validator.escape(req.param('idade')));
      var endereco = validator.trim(validator.escape(req.param('endereco')));
      var senha = validator.trim(validator.escape(req.param('senha')));

      if(senha == '123456'){

            controller.gravar(nome,idade,endereco, function(resposta){
                  res.json(resposta);
            });

      }else{
              res.json({erro: 'Usuário não autorizado!'});
      }


});


//PUT
app.put('/clientes', function(req,res){

      var id = validator.trim(validator.escape(req.param('id')));
      var nome = validator.trim(validator.escape(req.param('nome')));
      var idade = validator.trim(validator.escape(req.param('idade')));
      var endereco = validator.trim(validator.escape(req.param('endereco')));
      var senha = validator.trim(validator.escape(req.param('senha')));

      if(senha == '123456'){

            controller.atualizar(id,nome,idade,endereco, function(resposta){
                  res.json(resposta);
            });

      }else{
              res.json({erro: 'Usuário não autorizado!'});
      }


});

//DELETE
app.delete('/clientes/:id', function(req,res){

      var id = validator.trim(validator.escape(req.param('id')));
      var senha = validator.trim(validator.escape(req.param('senha')));


      if(senha == '123456')
      {

            controller.apagar(id, function(resposta){
                  res.json(resposta);
            });

      }else{
              res.json({erro: 'Usuário não autorizado!'});
      }


});

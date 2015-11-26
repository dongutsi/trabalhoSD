//controller.js

//variaveis que representam os módulos
//=========================================
var banco = require('./Banco.js');


//========================================

exports.listar = function(callback){

      banco.Cliente.find({}, function(error,clientes){

             if(error)
             {
                  callback({error: 'Ocorreu um erro ao buscar no banco'});
             }else{

                  callback(clientes);
             }

      });

};

exports.procurar = function(id,callback){

      banco.Cliente.finById(id, function(error, cliente){

              if(error){

                  callback({error: 'Ocorreu um erro ao buscar o cliente'})
              }else{

                  callback(cliente);
              }
      });
};

exports.gravar = function(nome,idade,endereco, callback){

        new  banco.Cliente({

              'nome': nome,
              'idade': idade,
              'endereco': endereco,
              'ativo': true,
              'criado': new Date

        }).save(function(error,cliente){

                if(error)
                {
                      callback({error: 'Erro ao gravar o cliente!'});
                }
                else {

                      callback(cliente);
                }

        });

};

exports.atualizar = function(id,nome,idade,endereco,callback){

      banco.Cliente.findById(id, function(error, cliente){

              if(nome){

                    cliente.nome = nome;

              }
              if(idade){
                    cliente.idade = idade;
              }
              if(endereco){
                    cliente.endereco = endereco;
              }

              cliente.save(function(error,cliente){

                    if(error){
                          callback({error: 'Erro ao atualizar o cliente!'});
                    }
                    else {
                          callback(cliente);
                    }

              });

      });

};

exports.apagar = function(id, callback){

        banco.Cliente.finById(id, function(error, cliente){

              if(error){
                    callback({error: 'Erro ao apagar o cliente!'});
              }else{



                    cliente.remove(function(error){

                            callback({response: 'Cliente excluído com sucesso!'});

                    });

              }

        });

};

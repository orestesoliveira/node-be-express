const { type } = require('express/lib/response');
const Sequelize = require('sequelize');
//const sequelize = new Sequelize('postgres://sc:bl@ckh@t@localhost:5432/sc_admin?currentSchema=umls') // Example for postgres

const sequelize = new Sequelize(
    'sc_admin',
    'sc',
    'bl@ckh@t',
    {
        host:'localhost',
        dialect:'postgres'
    }
)


sequelize.authenticate().then(function(){
    console.log('Connection has been established successfully.');


}).catch(function(error) {
    console.error('Unable to connect to the database:', error);
})

const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})


Postagem.create({
    titulo:"Um titulo qualquer",
    conteudo:'conteudo qualquer'
})

//Usuario.sync({force:true})
//Postagem.sync({force:true})


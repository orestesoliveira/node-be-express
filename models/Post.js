const db = require('./db')

const Post = db.sequelize.define('postagens',{
    titulo:{
        type:db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

//so na hora de criar o model depois comenta pois dropa e recria
//Post.sync({force:true})

module.exports = Post
//module.exports = {Post:Post}
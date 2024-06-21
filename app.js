const express = require("express")
const { create } = require('express-handlebars');
const bodyParser = require("body-parser")
const app = express();

const hbs = create({ defaultLayout: 'main' });

const Post = require('./models/Post')


app.engine('handlebars', hbs.engine);

app.set('view engine','handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

    app.get (
    "/cad", function(req,res){
    
        res.render('formulario')

    });

    app.get (
        "/about", function(req,res){
        
            res.render('about')
    
        });

    app.post(
        "/add", function(req,res){
        
            //res.send('text '+req.body.titulo+ " conteudo "+req.body.conteudo)
            Post.create({
                titulo:req.body.titulo,
                conteudo:req.body.conteudo
            }).then(function(){
                res.redirect('/')
            }).catch(function(erro){
                res.send('Erro na criacao do Post :'+ erro)
            })
        });




    app.get(
    "/xx", function(req,res){
        Post.findAll().then(function(posts){
            res.render('home',{posts:posts})
        })
        
    });
    
    app.get('/', async (req, res) => {
        try {
          const posts = await Post.findAll();  // Ensure this returns an array
          
          posts.forEach(post => {
            console.log('Title:', post.titulo);
            console.log('Content:', post.conteudo);
        });
          
          res.render('home', { posts });      // Pass the posts array to the template
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching posts.' });
        }
      });



    app.get(
    "/sobre", function(req,res){
        res.sendFile(__dirname+"/html/sobre.html");
    });
    
    app.get(
    "/ola/:cargo/:nome/:cor", function(req,res){
    res.send("<h1>"+req.param.cargo +"</h1>"+"<h1>"+req.param.nome +"</h1>"+"<h1>"+req.param.cor +"</h1>")
    })

app.listen(8081,function(){

    
    console.log("servidor rodando");

});
const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app= express()
const port=  process.env.PORT 

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname +'/views/partials')



app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('homee', {
        nombre: 'yoshua de leon',
        titulo: 'Portafolio'
    })
})

app.get('/acercademi', (req,res)=>{
    res.render('acercademi', {
        nombre: 'yoshua de leon',
        titulo: 'Portafolio'
    })
})

app.get('/destrezas', (req,res)=>{
    res.render('destrezas', {
        nombre: 'yoshua de leon',
        titulo: 'Portafolio'
    })
})

app.get('/contacto', (req,res)=>{
    res.render('contacto', {
        nombre: 'yoshua de leon',
        titulo: 'contacto'
    })
})

app.get('/proyectos', (req,res)=>{
    res.render('proyectos', {
        nombre: 'yoshua de leon',
        titulo: 'proyectos'
    })
})
app.get('/proyecto1', (req,res)=>{
    res.render('proyecto1', {
        nombre: 'yoshua de leon',
        titulo: 'proyectos'
    })
})
app.get('/proyecto2', (req,res)=>{
    res.render('proyecto2', {
        nombre: 'yoshua de leon',
        titulo: 'proyectos'
    })
})
app.get('/proyecto3', (req,res)=>{
    res.render('proyecto3', {
        nombre: 'yoshua de leon',
        titulo: 'proyectos'
    })
})

app.get('/proyecto4', (req,res)=>{
    res.render('proyecto4', {
        nombre: 'yoshua de leon',
        titulo: 'proyectos'
    })
})
app.get('/proyecto5', (req,res)=>{
    res.render('proyecto5', {
        nombre: 'yoshua de leon',
        titulo: 'proyectos'
    })
})

app.get('/proyecto6', (req,res)=>{
    res.render('proyecto6', {
        nombre: 'yoshua de leon',
        titulo: 'proyectos'
    })
})

app.get('/home', (req,res)=>{
    res.render('home', {
        nombre: 'yoshua de leon',
        titulo: 'proyectos'
    })
})
app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
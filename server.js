const express = require('express')
const mongoose = require('mongoose')

const Test = require('./models/usersModel')

const app = express()

const dbUrl = 'mongodb+srv://Bilal:bilash15@cluster0.zpy2y2w.mongodb.net/Login?retryWrites=true&w=majority';
mongoose.connect(dbUrl)
    
    
    // {useNewUrlParser: true, useUniFieldTopology: true})
    // .then((result)=> app.listen(3000))
    // .catch((err)=>console.log(err));

app.set('view engine', 'ejs')

app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/', (req, res) => {
    const test = new Test({
        username: 'username',
        password: 'default'
    });
    test.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    });
})

// app.post('/', async (req, res) => {
//     // userModel.insertOne(req.body) insertOne is not a function
//     //     .then(() => {
//     //         res.redirect('/')
//     //     })
//     //     .catch((err) => {
//     //         console.log(err)
//     //     })
//     await userModel.create(req.body)
    
    
// })

app.get('*', (req, res) => {
    res.render('error');
})




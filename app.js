const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const ejs = require('ejs');
const Photo = require('./models/Photo')

const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', async (req, res) => {
  const photos = await Photo.find({})
  res.render('index', {
    photos
  });
});
app.get('/add', (req, res) => {
  res.render('add');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/photos', async (req,res) => {
  Photo.create(req.body);
  res.redirect('/')
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server has started running on port ${port}`);
});

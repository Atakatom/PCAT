const express = require('express');
const path = require('path');
const ejs = require('ejs')

const app = express();

//TEMPLATE ENGINE
app.set("view engine","ejs");

//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
});
app.get('/add', (req, res) => {
	res.render('add')
  });
  app.get('/about', (req, res) => {
	res.render('about')
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server has started running on port ${port}`);
});

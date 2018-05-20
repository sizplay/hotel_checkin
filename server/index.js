const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3002;
const volleyball = require('volleyball');

app.use(volleyball);
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use('/api', require('./routes'));

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/vendor', express.static(path.join(__dirname, '../node_modules')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`listening port on ${port}!!!`)});

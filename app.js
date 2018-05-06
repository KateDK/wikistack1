//dependencies:
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const layout = require('./views/layout');
const wikiRouter = require('./routs/wiki');
const userRouter = require('./routs/users');

//create an express app:
const app = express();

//setting up the app:
app.use(morgan('dev')); //logging middlewear
app.use(express.static(path.join(__dirname, './public'))); //finds the directory we want to nake 'public'/exposed
app.use(bodyParser.json()); //just becouse express needs it
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

//paths:
app.get('/', (req, res) => {
  res.redirect('/wiki');
});

module.exports = app;
// //setting up the port:
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });
//this could have been done here, but we created a seperate file for it. see server.js

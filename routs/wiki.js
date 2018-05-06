const express = require('express');
const router = express.Router(); //creates a routwer
const { Page, User } = require('../models');
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require('../views');

//under localhost/3000/wiki
router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

router.post('/', async (req, res, next) => {
  // console.log('THIS IS MY REQ BODY', req.body);
  // res.json(req.body);
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;

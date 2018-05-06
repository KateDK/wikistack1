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
router.get('/', async (req, res, next) => {
  // res.send('got to GET /wiki/');
  try {
    const pages = await Page.findAll();
    res.send(main(pages));
  } catch (error) {
    next(error);
  }
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
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

//wiki/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.send(wikiPage(page));
  } catch (error) {
    next(error);
  }
});
module.exports = router;

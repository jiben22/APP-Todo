const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/dashboard');
});

/* GET add todo page. */
router.get('/add-todo', (req, res) => {
  res.render('pages/addTodo');
});
/* GET update todo page. */
router.get('/update-todo', (req, res) => {
  res.render('pages/updateTodo');
});

/* GET add tag page. */
router.get('/dd-tag', (req, res) => {
  res.render('pages/addTag');
});
/* GET update tag page. */
router.get('/update-tag', (req, res) => {
  res.render('pages/updateTag');
});

module.exports = router;

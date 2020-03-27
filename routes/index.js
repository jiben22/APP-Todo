const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/dashboard');
});

/* GET add todo page. */
router.get('/todo', (req, res) => {
  res.render('pages/addTodo');
});

module.exports = router;

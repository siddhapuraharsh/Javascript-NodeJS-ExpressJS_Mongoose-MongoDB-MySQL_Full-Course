const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
  res.render('index', {title: 'App Title', message: 'App Message'});
});

module.exports = router;
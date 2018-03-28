const express = require('express');
const router = express.Router();

const controller = require('../controller/postsController');
router.get('/', controller.firstTest);

router.get('/post',controller.fetchPost);

module.exports = router;
const express = require('express');
const router = express.Router();

const TestController = require('../controllers/test.controller');

router.get('/getTestRoute', TestController.getTestRoute);

router.post('/postTestRoute', TestController.postTestRoute);

module.exports = router;
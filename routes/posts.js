const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/');
	

router.get('/new', postsCtrl.new);
	
module.exports = router;
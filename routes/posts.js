const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
//All routes start with /posts

//GET /posts
router.get('/', postsCtrl.index);

//GET /posts/new
router.get('/new', ensureLoggedIn, postsCtrl.new);

//GET /posts/:id (show functionality)
router.get('/:id', postsCtrl.show);

//POST /posts
router.post('/', ensureLoggedIn, postsCtrl.create);


	
module.exports = router;
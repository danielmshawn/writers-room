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

// Editing a Post - GET /posts/:id/edit
router.get('/:id/edit', postsCtrl.edit);


//POST /posts
router.post('/', ensureLoggedIn, postsCtrl.create);

// Updating a post  PUT /posts/:_id
router.put('/:id', ensureLoggedIn, postsCtrl.update);

	
module.exports = router;
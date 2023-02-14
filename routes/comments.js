const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

//All routes start with '/'

//POST /posts/:id/comments
//Dont forget in routes the ':id" is just a variable for a parameter
router.post('/posts/:id/comments', commentsCtrl.create);




module.exports = router;
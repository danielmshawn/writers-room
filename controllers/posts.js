const Post = require('../models/post')

module.exports ={
    new: newPost,
    create
}

function newPost(req, res) {
    res.render('posts/new');
}

function create(req, res) {
const post = new Post(req.body);
post.save(function(err) {
  // if we don't redirect, the new page will be shown
  // with /movies in the address bar
  if (err) return res.redirect('/posts/new');
  console.log(post);
  // for now, redirect right back to new.ejs
  res.redirect('/posts/new');
});
}
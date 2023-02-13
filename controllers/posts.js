const Post = require('../models/post')

module.exports ={
    index,
    new: newPost,
    create
}

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', {
            posts,
            title: 'Posts'
        });
    });
}


function newPost(req, res) {
    const validCategories = Post.schema.path('category').enumValues;
    res.render('posts/new', 
    {
        validCategories,
        title: 'Create a Post'
    });
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
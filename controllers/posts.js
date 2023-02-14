const Post = require('../models/post')

module.exports ={
    index,
    new: newPost,
    show,
    create
}

function index(req, res) {
    Post.find({category: req.query.category}, function(err, posts) {
        res.render('posts/index', {
            posts,
            title: req.query.category
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

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/show', {
             title: 'Post Details',
             post });
    });
}

function create(req, res) {
    req.body.user = req.user._id
    const post = new Post(req.body);
    post.save(function(err) {
  // if we don't redirect, the new page will be shown
  // with /movies in the address bar
    if (err) return res.redirect('/posts/new');
    console.log(post);
  // for now, redirect right back to new.ejs
    res.redirect(`/posts/${post._id}`);
});
}
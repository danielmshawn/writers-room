const Post = require('../models/post')

module.exports = {
    index,
    new: newPost,
    show,
    create,
    edit,
    update
}

function index(req, res) {
    Post.find({ category: req.query.category })
        .populate('user')
        .exec(function (err, posts) {
            res.render('posts/index', { title: req.query.category, posts });
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
    Post.findById(req.params.id)
        .populate('user')
        .exec(function (err, post) {
            res.render('posts/show',
                {
                    title: 'Post Details',
                    post,
                });
        });
}

function create(req, res) {
    req.body.user = req.user._id
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const post = new Post(req.body);
    post.save(function (err) {
        if (err) return res.redirect('/posts/new');
        console.log(post);
        res.redirect(`/posts/${post._id}`);
    });
}

function edit(req, res) {
    Post.findOne({ _id: req.params.id, }, function (err, post) {
        if (err || !post) return res.redirect('/');
        res.render('posts/edit', {
            title: "Edit a Post",
            post
        });
    });
}

function update(req, res) {
    Post.findOneAndUpdate({ _id: req.params.id, user: req.user._id },
        // update object with updated properties
        req.body,
        // options object with new: true to make sure updated doc is returned
        { new: true },
        function (err, post) {
            console.log('req.body', req.body);
            if (err || !post) return res.redirect('/');
            res.redirect(`/posts/${post._id}`);
        }
    );
}
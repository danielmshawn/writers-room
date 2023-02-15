// Bring in the Post model as we need access to it
const Post = require('../models/post');


module.exports = {
    create,
    delete: deleteComment
}

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        // UPdating req.body to contain user info
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        // Now adding the comment
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`);
        });
    });
}

function deleteComment(req, res, next) {
    Post.findOne({
        'comments._id' : req.params.id,
        'comments.user' : req.user._id
    }).then(function(post) {
        if (!post) return res.redirect('/');
        post.comments.remove(req.params.id);
        post.save().then(function() {
            res.redirect(`/posts/${post._id}`);    
        }).catch(function(err) {
            return next(err);
        });
    });
}
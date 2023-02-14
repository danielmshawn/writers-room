// Bring in the Post model as we need access to it
const Post = require('../models/post');


module.exports = {
    create
}

function create(req, res) {
    //First find the specific post
    // the .id below is the  ':id' in routes.
    // if /posts/:tuna/comments, then
    // it would be req.params.tuna
    Post.findById(req.params.id, function(err, post) {
        // We push an object with the data for the
        // comment subdoc into Mongoose arrays
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`);
        });
    });
}
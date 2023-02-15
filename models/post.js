const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, { 
    timestamps: true

});

const postSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    description: String,
    content: { 
        type:String,
        required: true
    },
    category: {
        type: String,
        enum: ['PIECE', 'PITCH', 'PROMPT']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    comments: [commentSchema] 
    },
    // Add category, and comments properties when you figure out how.
    // Are comments  Schema.Types.ObjectId? 
    {
    //add ability for createdAt and updatedAt fields
    timestamps: true
});




// Compile the schema into a model and export it
module.exports = mongoose.model('Post', postSchema);

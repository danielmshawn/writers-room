const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    description: String,
    content: String,
    category: {
        type: String, enum: ['POST', 'PITCH', 'PROMPT']},
    
    },
    // Add category, and comments properties when you figure out how.
    // Are comments  Schema.Types.ObjectId? 
    {
    //add ability for createdAt and updatedAt fields
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Post', postSchema);

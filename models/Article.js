// models/Article.js
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },  // URL for the thumbnail image
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', articleSchema);

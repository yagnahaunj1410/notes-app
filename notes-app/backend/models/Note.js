const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: String,
    content: String,
    tags: [String],
    backgroundColor: String,
    archived: { type: Boolean, default: false },
    dueDate: Date,
    trashed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
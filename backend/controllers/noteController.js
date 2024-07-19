const Note = require('../models/Note');

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user.id, trashed: false });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const createNote = async (req, res) => {
    const { title, content, tags, backgroundColor, dueDate } = req.body;
    try {
        const newNote = new Note({
            userId: req.user.id,
            title,
            content,
            tags,
            backgroundColor,
            dueDate
        });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content, tags, backgroundColor, archived, dueDate, trashed } = req.body;
    try {
        const note = await Note.findById(id);
        if (!note || note.userId.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Note not found' });
        }

        note.title = title || note.title;
        note.content = content || note.content;
        note.tags = tags || note.tags;
        note.backgroundColor = backgroundColor || note.backgroundColor;
        note.archived = archived !== undefined ? archived : note.archived;
        note.dueDate = dueDate || note.dueDate;
        note.trashed = trashed !== undefined ? trashed : note.trashed;

        await note.save();
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findById(id);
        if (!note || note.userId.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Note not found' });
        }

        note.trashed = true;
        await note.save();
        res.json({ message: 'Note moved to trash' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getNotes, createNote, updateNote, deleteNote };

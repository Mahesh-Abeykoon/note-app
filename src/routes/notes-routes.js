const express = require('express');
const { fetchNotes, createNote, updateNote, fetchNote, removeNote } = require('../controllers/notes-controller');

const router = express.Router();

router.get('/', fetchNotes)
router.post('/', createNote)
router.get('/:id', fetchNote)
router.put('/:id', updateNote)
router.delete('/:id', removeNote)

module.exports = router
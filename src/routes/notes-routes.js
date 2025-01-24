const express = require('express');
const { fetchNotes, createNote } = require('../controllers/notes-controller');

const router = express.Router();

router.get('/', fetchNotes)
router.post('/', createNote)

module.exports = router
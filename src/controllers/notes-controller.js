const { getAllNotes, addNote, getNoteById, deleteNoteById } = require('../services/notes-service')
const { sendResponse } = require('../utils/response-util')

const fetchNotes = async (req, res, next) => {
    try {
        const notes = await getAllNotes()
        sendResponse(res, 200, notes)
    } catch(err) {
        next(err)
    }
}

const createNote = async (req, res, next) => {
    try {
        const note = await addNote(req.body)
        sendResponse(res, 201, note)
    }catch(err){
        next(err)
    }
}

module.exports = { fetchNotes, createNote }
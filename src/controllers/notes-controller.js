const { getAllNotes, addNote, getNoteById, updateNoteById, deleteNoteById } = require('../services/notes-service')
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

const fetchNote = async (req, res, next) => {
    try {
        const note = await getNoteById(req.params.id)
        sendResponse(res, 201, note)
    }catch(err){
        next(err)
    }
}

const updateNote = async (req, res, next) => {
    try {
        const note = await updateNoteById(req.params.id, req.body)
        sendResponse(res, 201, note)
    }catch(err){
        next(err)
    }
 
}
module.exports = { fetchNotes, createNote, fetchNote, updateNote  }
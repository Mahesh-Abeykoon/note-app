const prisma = require('../models/prisma-client');

/**
 * Fetch all notes from the database.
 */
const getAllNotes = async () => {
    return await prisma.note.findMany({ orderBy: { createdAt: 'desc'}})
}

/**
 * Add a new note to the database.
 */
const addNote = async (data) => {
    return await prisma.note.create({ data})
}

/**
 * Get a single note by ID.
 */
const getNoteById = async (id) => {
    const note = await prisma.note.findUnique({ where: { id: Number(id) } })
    if(!note) throw new Error('Note not found')
    return note
}

/**
 * Update a note by ID.
 */
const updateNoteById = async (id, data) => {
    const note = await prisma.note.update({ where: { id: Number(id) }, data: data })
    if(!note) throw new Error('Note not found')
    return note
}

/** 
 * Delete a note by ID
*/
const deleteNoteById = async (id) => {
    return await prisma.note.delete({ where: { id: Number(id) } })
}

module.exports = { getAllNotes, addNote, getNoteById, updateNoteById, deleteNoteById}
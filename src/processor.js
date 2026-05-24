let noteArray = []

function makeNote(title, description, dueDate, priority) {
    return {title, description, dueDate, priority}
}

function addNote(title, description, dueDate, priority) {
    const note = makeNote(title, description, dueDate, priority)
    note.noteID = noteArray.length
    noteArray.push(note)
    console.log(noteArray)
}

function deleteNote(noteID) {
    return noteArray.splice(noteID, 1)
}

function getNoteArray() {
    return noteArray.slice()
}

export { addNote, deleteNote, getNoteArray }
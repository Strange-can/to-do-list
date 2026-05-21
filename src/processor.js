let noteArray = []

function note(title, description, dueDate, priority) {
    return {title, description, dueDate, priority}
}

function addNote(title, description, dueDate, priority) {
    noteArray.push(note(title, description, dueDate, priority))
    console.log(noteArray)
}

function getNoteArray() {
    return noteArray.slice()
}

export { addNote, getNoteArray }
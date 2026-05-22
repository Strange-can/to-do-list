import { addNote, getNoteArray } from "./processor"

const projectPage = document.getElementById("project-page")
const notePopup = document.getElementById("note-form-overlay")

const project1Button = document.getElementById("one")
project1Button.addEventListener("click", () => {
    projectPage.textContent = ''
    projectPage.append(addButton)
})

const addButton = document.createElement("button")
addButton.textContent = "ADD"
addButton.id = "add"
addButton.addEventListener("click", () => {
    projectPage.append(notePopup)
    notePopup.style.display = "block"
})

notePopup.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const formObject = Object.fromEntries(formData.entries())

    addNote(formObject.title, formObject.desc, formObject.due, formObject.priority) 

    notePopup.style.display = "none"
    document.getElementById("note-form").reset()
    displayNotes(getNoteArray())
})

notePopup.addEventListener("click", (event) => {
    if (event.target === notePopup) {
        notePopup.style.display = "none"
        document.getElementById("note-form").reset()
    }
})

function displayNotes(arr) {
    projectPage.querySelectorAll(".note").forEach(el => el.remove())
    for (const note of arr) {
        projectPage.append(displayNote(note))
    }
}

function displayNote(note) {
    const noteText = document.createElement("p")
    noteText.textContent = `Title: ${note.title}\t\tDue: ${note.dueDate}`
    noteText.classList.add("note")

    const priorityCode = document.createElement("div")
    priorityCode.classList.add("priority-code")

    const noteDiv = document.createElement("div")
    noteDiv.classList.add("note-div")

    noteDiv.append(noteText)
    noteDiv.append(priorityCode)

    return noteDiv
}


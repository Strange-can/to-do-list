import { addNote, deleteNote, getNoteArray } from "./processor"

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

notePopup.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const formObject = Object.fromEntries(formData.entries())

    addNote(formObject.title, formObject.description, formObject.dueDate, formObject.priority) 

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
    projectPage.querySelectorAll(".note-div, .expanded-div").forEach(el => el.remove())
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

    const description = document.createElement("p")
    description.textContent = `${note.description}`

    const editButton = document.createElement("button")
    editButton.textContent = 'Edit'
    editButton.addEventListener("click", () => {
    projectPage.append(notePopup)
    notePopup.style.display = "block"
})

    const expandedDiv = document.createElement("div")
    expandedDiv.classList.add("expanded-div")
    expandedDiv.append(description)
    expandedDiv.append(editButton)

    const expandButton = document.createElement("button")
    expandButton.textContent = "+"
    expandButton.id = "expand"
    expandButton.addEventListener("click", () => {
        noteDiv.after(expandedDiv)
    })

    const noteDiv = document.createElement("div")
    noteDiv.classList.add("note-div")

    noteDiv.append(noteText)
    noteDiv.append(priorityCode)
    noteDiv.append(expandButton)

    return noteDiv
}


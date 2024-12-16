const projectPage = document.getElementById("project-page")

const project1Button = document.getElementById("one")
project1Button.addEventListener("click", () => {
    projectPage.textContent = ''
    oneText = document.createElement("p")
    oneText.textContent = 'this is tasks for project 1'
    projectPage.append(oneText)
})

const project2Button = document.getElementById("two")
project2Button.addEventListener("click", () => {
    projectPage.textContent = ''
    twoText = document.createElement("p")
    twoText.textContent = '222222222'
    projectPage.append(twoText)
})
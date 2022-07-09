let textInput = document.querySelector('.addtask-area input')
let buttonAdd = document.querySelector('.addtask-area button')
let task = document.querySelector('.task-area ul')
let editID;
let isEdited = false
let localStr = JSON.parse(localStorage.getItem("taskArray"))

buttonAdd.addEventListener('click' , ()=> {
let value = textInput.value.trim()
if (!isEdited) {
    if (!localStr) {
        localStr = []
    } 
    localStr.push(value)
} else {
    isEdited = false
    localStr[editID] = value
}
textInput.value = ''
localStorage.setItem("taskArray", JSON.stringify(localStr))
showTask()
})

function showTask() {
let li = ''
if(localStr) {
localStr.forEach((item, index) => {
    li += `<li>${item}<abbr title="Delete"><i onclick="deleteTask(${index})" class="fa-solid fa-trash"></i></abbr><abbr title="Edit"><i onclick="editTask(${index},'${item}')" class="fa-solid fa-pencil"></i></abbr></li>`
});
}
task.innerHTML = li
}

function deleteTask(index) {
localStr.splice(index, 1)
localStorage.setItem("taskArray", JSON.stringify(localStr))
showTask()
}

function editTask(index, item) {
    editID = index
    isEdited = true
    textInput.value = item
}

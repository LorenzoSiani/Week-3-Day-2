const inputNameField = document.getElementById('input-name')
const sendButton = document.getElementById('send')
const emptyButton = document.getElementById('empty')
const listSavedItems = document.querySelector('ul')

let saveValue = function () {
    let inputField = inputNameField.value 
    localStorage.setItem ("name", inputField)
    const newLi = document.createElement("li")
    listSavedItems.appendChild(newLi)
}

sendButton.addEventListener("click", saveValue)
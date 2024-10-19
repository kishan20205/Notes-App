const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("data") || "";
}
showNotes();

function updateStorage() {
    localStorage.setItem("data", notesContainer.innerHTML);
}

createButton.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    inputBox.addEventListener("keyup", updateStorage);
    updateStorage();
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notes.forEach(nt => {
    nt.addEventListener("keyup", updateStorage);
});
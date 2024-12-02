const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notescontainer.innerHTML = localStorage.getItem("notes");
    notes = document.querySelectorAll(".input-box"); 
    notes.forEach(nt => {
        nt.setAttribute("contenteditable", "true"); 
        nt.querySelector("img").addEventListener("click", function () {
            nt.remove();
            updateStorage();
        });
        nt.addEventListener("keyup", updateStorage);
    });
}

function updateStorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

createbtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./Asserts/Images/delete.png";
    notescontainer.appendChild(inputBox);
    inputBox.appendChild(img);

    
    img.addEventListener("click", function () {
        inputBox.remove();
        updateStorage();
    });

    
    inputBox.addEventListener("keyup", updateStorage);

    updateStorage();
});

notescontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});

// Initialize notes on page load
showNotes();


var popup = document.getElementById("popup");
var overlay = document.getElementById("overlay");

var bookContainer = document.getElementById("bookCont");
var mainContainer = document.getElementById("main-cont");

var bookTitle = document.getElementById("title");
var bookAuthor = document.getElementById("author");
var bookDesc = document.getElementById("descripFeild");


function show() {
  popup.style.display = "block";
  overlay.style.display = "block";
}

function cancelBtn() {
  popup.style.display = "none";
  overlay.style.display = "none";
}

function addBtn() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "bookCont");
  newDiv.innerHTML = `
    <h2 >${bookTitle.value} </h2>
    <h4 >${bookAuthor.value}</h4>
    <p >${bookDesc.value}</p>
    <button onclick="deleteBtn(event)">Delete</button>`;

  mainContainer.append(newDiv);
  popup.style.display = "none";
  overlay.style.display = "none";
}

function deleteBtn(event) {
  event.target.parentElement.remove();
}

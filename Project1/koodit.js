function newTask() {
  var task = document.getElementById("input").value;
  var li = document.createElement("li");
  li.id = document.getElementsByTagName("li").length;
  li.draggable = true;

  var text = document.createTextNode(task);
  li.appendChild(text);
  if (task === "") {
    document.getElementById("input").placeholder =
      "Empty task is not a thing to do!";
  } else {
    document.getElementById("list").appendChild(li);
    document.getElementById("input").placeholder = "Insert your task...";
  }

  document.getElementById("input").value = "";
}

//Drag & Drop
var dragged;

document.addEventListener("drag", function (event) {}, false);

document.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target;
    event.target.style.opacity = 0.75;
  },
  false
);

document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
  },
  false
);

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");
  dragged.parentNode.removeChild(dragged);
}

function edit(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");
  dragged.style.textDecoration = "line-through";
  dragged.style.color = "green";
}

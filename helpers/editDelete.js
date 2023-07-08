import { createTask } from "./createElements.js";

export function handleBtnClick(btn) {
  if (btn.className === "checkbox") {
    tickOff(btn);
  }
  // get the second class element for each button because id must be unique
  switch (btn.classList[1]) {
    case "deleteBtn":
      deleteTask(btn);
      break;
    case "editBtn":
      editTask(btn);
      break;
    case "saveBtn":
      saveTask(btn);
      break;
    case "cancelBtn":
      cancelEdit(btn);
      break;
  }
}
// removes the task
function deleteTask(task) {
  const item = task.parentNode.parentNode;
  item.remove();
}

// edits the task
function editTask(task) {
  // get parent divs
  const parentDiv = task.parentNode;
  const taskDiv = parentDiv.parentNode;

  // grab text that needs to be edited and place it inside the (edit)input
  const span = taskDiv.querySelector("#toDo");
  let text = span.textContent;

  const editInput = taskDiv.querySelector(".editInput");
  editInput.value = text;

  //shows aria
  const editAria = taskDiv.querySelector(".editTaskDiv");
  editAria.setAttribute("aria-hidden", "false");

  // Show/hide parent divs
  toggleVisibility(parentDiv);
  const editTaskDiv = taskDiv.querySelector(".editTaskDiv");
  toggleVisibility(editTaskDiv);
}

// saves the task
function saveTask(task) {
  // get parent divs
  const editTaskDiv = task.parentNode;
  const taskContainer = editTaskDiv.parentNode;
  const taskDiv = taskContainer.querySelector(".taskDiv");

  // get value/text from the new input and update the span text content
  const editInput = editTaskDiv.querySelector(".editInput");
  const updateSpan = taskDiv.querySelector("#toDo");
  updateSpan.textContent = editInput.value;

  // show/hides divs
  toggleVisibility(editTaskDiv);
  toggleVisibility(taskDiv);

  //hides aria
  // const editAria = taskDiv.querySelector(".editTaskDiv");
  // editAria.setAttribute("aria-hidden","true")
}

// cancel the changes
function cancelEdit(task) {
  const editTaskDiv = task.parentNode;
  const taskContainer = editTaskDiv.parentNode;
  const taskDiv = taskContainer.querySelector(".taskDiv");

  const editInput = editTaskDiv.querySelector(".editInput");
  editInput.value = "";

  // Show/hide divs
  toggleVisibility(editTaskDiv);
  toggleVisibility(taskDiv);

  //hides aria
  // const editAria = taskDiv.querySelector(".editTaskDiv");
  // editAria.setAttribute("aria-hidden","true")
}

// function to mark a task once completed
function tickOff(task) {
  const taskCompleted = task.parentNode.querySelector("#toDo");
  toggleMark(taskCompleted);
}

function toggleMark(div) {
  if (div.style.textDecoration !== "line-through") {
    div.style.textDecoration = "line-through";
    div.setAttribute("class", "completed");
  } else {
    div.style.textDecoration = "";
    div.removeAttribute("class", "completed");
  }
}

function toggleVisibility(div) {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

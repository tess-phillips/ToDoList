import { createTask } from "./createElements.js";

export function handleBtnClick(btn) {
  switch (btn.id) {
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
      cancelEdit(task);
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

  const editInput = taskDiv.querySelector("#editInput");
  editInput.value = text;

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
  const editInput = editTaskDiv.querySelector("#editInput");
  const updateSpan = taskDiv.querySelector("#toDo");
  updateSpan.textContent = editInput.value;

  // show/hides divs
  toggleVisibility(editTaskDiv);
  toggleVisibility(taskDiv);
}

function cancelEdit(task) {
  const editTaskDiv = task.parentNode;
  const taskContainer = editTaskDiv.parentNode;
  const taskDiv = taskContainer.querySelector(".taskDiv");
  toggleVisibility(editTaskDiv);
  toggleVisibility(taskDiv);
}

function toggleVisibility(div) {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

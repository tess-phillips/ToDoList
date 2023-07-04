import { createTask } from "./createElements.js";

export function handleBtnClick(btn) {
  switch (btn.id) {
    case "deleteBtn":
      deleteTask(btn);
    case "editBtn":
      editTask(btn);
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

function toggleVisibility(div) {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

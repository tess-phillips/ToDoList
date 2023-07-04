import { createTask } from "./createElements.js";

export function handleBtnClick(btn) {
  switch (btn.id) {
    case "deleteBtn":
      deleteTask(btn);
  }
}
// removes the task
export function deleteTask(btn) {
  const item = btn.parentNode.parentNode;
  console.log(item);
  item.remove();
}

// edits the task
export function editTask(task) {
  // gets the text that is already on the task
  const span = task.querySelector("span");
  const editInput = task.querySelector("#editInput");
  const taskText = span.textContent;
  console.log(taskText);
  // creates the input and new buttons
  // const editInput = createElement("input", { type: "text", value: taskText });
  // const saveBtn = createElement("button", { innerHTML: "Save" });
  // const cancelButton = createElement("button", { innerHTML: "Cancel" });

  // removes the existing text with the input (containing the prev task), save and cancel buttons
  task.replaceChild(editInput, span);
  // div.append(saveBtn, cancelButton);

  saveBtn.onclick = function () {
    label.textContent = editInput.value;
    div.removeChild(editInput);
    div.removeChild(saveBtn);
    div.removeChild(cancelButton);
    div.insertBefore(label, div.secondChild);
  };

  cancelButton.onclick = function () {
    div.removeChild(editInput);
    div.removeChild(saveBtn);
    div.removeChild(cancelButton);
    div.insertBefore(label, div.secondChild);
  };
}

function toggleVisibility(div) {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

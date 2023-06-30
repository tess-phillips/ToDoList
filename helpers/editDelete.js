import { createTask } from "./createElements.js";

// removes the task
export function deleteTask() {
  this.parentNode.remove();
}

// edits the task
export function editTask(label, div) {
  // gets the text that is already on the task
  const taskText = label.textContent;

  // creates the input and new buttons
  const editInput = createElement("input", { type: "text", value: taskText });
  const saveBtn = createElement("button", { innerHTML: "Save" });
  const cancelButton = createElement("button", { innerHTML: "Cancel" });

  // removes the existing text with the input (containing the prev task), save and cancel buttons
  div.replaceChild(editInput, label);
  div.append(saveBtn, cancelButton);

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

import { createElement } from "./helpers/createElements.js";

export function deleteTask() {
    this.parentNode.remove();
}

export function toggleCompleted() {
    this.classList.toggle('completed');
}
  
export function editTask(label,div) {
    const taskText = label.textContent;
    const editInput = createElement("input", { type: "text", value: taskText });
    const saveBtn = createElement("button", { innerHTML: "Save" });
    const cancelButton = createElement("button", { innerHTML: "Cancel" });
  
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
import { createElement } from "./createElements.js";

function deleteTask() {
    this.parentNode.remove();
}

function toggleCompleted() {
    this.classList.toggle('completed');
}
  
// function editTask() {
//     const taskText = label.textContent;
//     const editInput = createElement("input", { type: "text", value: taskText });
//     const saveBtn = createElement("button", { innerHTML: "Save" });
//     const cancelButton = createElement("button", { innerHTML: "Cancel" });
  
//     div.replaceChild(editInput, label);
//     div.append(saveBtn, cancelButton);
  
//     saveBtn.onclick = saveEditedTask;
//     cancelButton.onclick = cancelEdit;
// }
  
// function saveEditedTask() {
//     label.textContent = editInput.value;
//     div.removeChild(editInput);
//     div.removeChild(saveBtn);
//     div.removeChild(cancelButton);
//     div.insertBefore(label, div.secondChild); // Insert label as the first child of div
// }
  
// function cancelEdit() {
//     div.removeChild(editInput);
//     div.removeChild(saveBtn);
//     div.removeChild(cancelButton);
//     div.insertBefore(label, div.secondChild); // Insert label as the first child of div
// }

document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert("Please Enter a Task");
  } else {
    const tasksBlock = document.querySelector('#tasks');
    const taskValue = document.querySelector('#newtask input').value;

    const div = createElement("div", { className: "task" });
    const checkbox = createElement("input", { type: "checkbox", id: "box1", name: "box1" });
    const label = createElement("label", { id: "taskname", htmlFor: "box1", innerHTML: taskValue });
    const deleteBtn = createElement("button", { className: "delete", innerHTML: "delete" });
    const editBtn = createElement("button", { className: "edit", innerHTML: "edit" });
    div.append(deleteBtn, editBtn,checkbox, label);
    tasksBlock.append(div);

    deleteBtn.onclick = deleteTask;
    div.onclick = toggleCompleted;
    // editBtn.onclick = editTask;

    // div.onclick = function () {
    //   this.classList.toggle('completed');
    // };

    editBtn.onclick = function () {
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
        div.insertBefore(label, div.secondChild); // Insert label as the first child of div
      };
      
      cancelButton.onclick = function () {
        div.removeChild(editInput);
        div.removeChild(saveBtn);
        div.removeChild(cancelButton);
        div.insertBefore(label, div.secondChild); // Insert label as the first child of div
      };
    };

    document.querySelector("#newtask input").value = "";
  }
};

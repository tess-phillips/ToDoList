import { createElement } from "./helpers/createElements.js";
import { editTask, deleteTask } from "./helpers/editDelete.js";
import { sortByDate } from "./helpers/sort.js";

// Date starts in descending order
let isSortingAscending = false

// This defines what happens when the SortByDate button is clicked
document.querySelector('#sortPush').onclick = function () {
    const tasksBlock = document.querySelector('#tasks');

    // This calls one of the import functions sortByDate, that actually does the reordering
    const sortedTasks = sortByDate(tasksBlock, isSortingAscending);

    // Replaces the old tasks with the new order of tasks
    tasksBlock.innerHTML = ''; // Clear existing tasks
    sortedTasks.forEach(task => tasksBlock.appendChild(task));
    isSortingAscending = !isSortingAscending;
}

// This defines what happens when the add button is clicked
document.querySelector('#addPush').onclick = function () {
  
  // validation: if nothing as added an alert comes up
  if (document.querySelector('#newtask input').value.length == 0) {
    alert("Please Enter a Task");
  } 
  
  else {
    // if something IS added:

    const tasksBlock = document.querySelector('#tasks');
    const taskValue = document.querySelector('#newtask input').value;

    // makes the div for the task to go in
    const div = createElement("div", { className: "task" });
    const currentDate = new Date();
    div.setAttribute("data-date", currentDate.toISOString());
    
    // created the checkbox, label (the task text), edit and delete buttons
    const checkbox = createElement("input", { type: "checkbox", id: "box1", name: "box1" });
    const label = createElement("label", { id: "taskname", htmlFor: "box1", innerHTML: taskValue });
    const deleteBtn = createElement("button", { className: "delete", innerHTML: "delete" });
    const editBtn = createElement("button", { className: "edit", innerHTML: "edit" });
    div.append(deleteBtn, editBtn,checkbox, label);
    tasksBlock.append(div);

    // this defines what happens when edit and delete are pressed (functions called are in editDelete.js)
    deleteBtn.onclick = deleteTask;
    editBtn.onclick = function(){
        editTask(label,div)
    };

    // removes the text from the input area so it is empty for the next task
    document.querySelector("#newtask input").value = "";
  }
};

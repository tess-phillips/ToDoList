import { createElement } from "./helpers/createElements.js";
import { editTask, deleteTask, toggleCompleted } from "./editDeleteToggle.js";

let isSortingAscending = true

function sortByDate(tasksBlock, isSortingAscending) {
    const tasks = Array.from(tasksBlock.children);
  
    const sortedTasks = tasks.slice().sort((taskA, taskB) => {
      const dateA = new Date(taskA.dataset.date);
      const dateB = new Date(taskB.dataset.date);

      if (isSortingAscending) {
        return dateA.getTime() - dateB.getTime(); // Ascending order
      } else {
        return dateB.getTime() - dateA.getTime(); // Descending order
      }
    });
  
    return sortedTasks;
}

document.querySelector('#sortPush').onclick = function () {
    // const tasksBlock = document.querySelector('#tasks');
    // sortByDate(tasksBlock,isSortingAscending);
    const tasksBlock = document.querySelector('#tasks');
    const sortedTasks = sortByDate(tasksBlock, isSortingAscending);
  
    tasksBlock.innerHTML = ''; // Clear existing tasks
  
    sortedTasks.forEach(task => tasksBlock.appendChild(task));
  
    isSortingAscending = !isSortingAscending;
}


document.querySelector('#addPush').onclick = function () {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert("Please Enter a Task");
  } else {
    const tasksBlock = document.querySelector('#tasks');
    const taskValue = document.querySelector('#newtask input').value;

    // const div = createElement("div", { className: "task" });
    const div = createElement("div", { className: "task" });
    const currentDate = new Date();
    div.setAttribute("data-date", currentDate.toISOString());

    const checkbox = createElement("input", { type: "checkbox", id: "box1", name: "box1" });
    const label = createElement("label", { id: "taskname", htmlFor: "box1", innerHTML: taskValue });
    const deleteBtn = createElement("button", { className: "delete", innerHTML: "delete" });
    const editBtn = createElement("button", { className: "edit", innerHTML: "edit" });
    // const sortBtn = createElement("button", { id:"sortButton",className: "sort-date", innerHTML: "sort by date" });
    div.append(deleteBtn, editBtn,checkbox, label);
    tasksBlock.append(div);

    deleteBtn.onclick = deleteTask;
    div.onclick = toggleCompleted;
    editBtn.onclick = function(){
        editTask(label,div)
    };

    document.querySelector("#newtask input").value = "";
  }
};

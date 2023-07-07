import { createTask } from "./helpers/createElements.js";
import { handleBtnClick } from "./helpers/editDelete.js";
import { sortByDate } from "./helpers/sort.js";
import { test, equal } from "./helpers/testHelpers.js"


// Date starts in descending order
let isSortingAscending = false;

// Define global variables
const tasksBlock = document.querySelector("#tasksContainer");

// This defines what happens when the SortByDate button is clicked
document.querySelector("#sortPush").onclick = function () {
  // This calls one of the import functions sortByDate, that actually does the reordering
  const sortedTasks = sortByDate(tasksBlock, isSortingAscending);

  // Replaces the old tasks with the new order of tasks
  tasksBlock.innerHTML = ""; // Clear existing tasks
  sortedTasks.forEach((task) => tasksBlock.appendChild(task));
  isSortingAscending = !isSortingAscending;
};

// This defines what happens when the add button is clicked
document.querySelector("#addPush").onclick = function () {
  // validation: if nothing as added an alert comes up
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    // if something IS added:

    const taskValue = document.querySelector("#newtask input").value;
    createTask(taskValue)

    // removes the text from the input area so it is empty for the next task
    document.querySelector("#newtask input").value = "";
  }
};

const tasksSection = document.querySelector("#tasksSection");

tasksSection.addEventListener("click", (event) => {
  handleBtnClick(event.target);
});


// functionality for the enter button when using tab to navigate the page
const buttons = document.querySelectorAll('button');
// Add eve  nt listener to each button
buttons.forEach(button => {
  button.addEventListener('keydown', function(event) {
    // Check if the pressed key is Enter
    if (event.key === 13) {
      // Trigger a click event on the button
      button.click();
    }
  });
});

//functionlity for the enter button when used on a text input
const newTaskInput = document.getElementById('newTaskInput');

// Add event listener to "newTaskInput" for Enter key
newTaskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('addPush').click();
  }
});
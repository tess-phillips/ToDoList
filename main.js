import { createTask } from "./helpers/createElements.js";
import { handleBtnClick } from "./helpers/editDelete.js";
import { sortByDate } from "./helpers/sort.js";
import { sortByCompleted } from "./helpers/sortCompleted.js";
import { test, equal } from "./helpers/testHelpers.js"
import { simulateReverseTabNavigation } from "./helpers/keyboardFunctions.js";
import { simulateTabNavigation } from "./helpers/keyboardFunctions.js";


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

document.querySelector("#sortCompletedPush").onclick = function () {
  const sortedTasks = sortByCompleted(tasksBlock);
  tasksBlock.innerHTML = ""; // Clear existing tasks
  sortedTasks.forEach((task) => tasksBlock.appendChild(task));
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

// this should call the saveBtn when any key is pressed but it isn't working at the moment
tasksSection.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const editInput = event.target.closest(".editInput");
    if (editInput) {
      const saveBtn = editInput.parentNode.querySelector(".saveBtn");
      if (saveBtn) {
        handleBtnClick(saveBtn);
      }
    }
  }
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

//adding event listener for the left and right arrows
document.addEventListener('keydown', function(event) {
    // Get all focusable elements within the document
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    // Convert NodeList to Array
    const elementsArray = Array.from(focusableElements);
    
    // Get the currently focused element
    const currentElement = document.activeElement;
    // Find the index of the current element in the array
    const currentIndex = elementsArray.indexOf(currentElement);
  if (event.key === "ArrowLeft") {
    simulateReverseTabNavigation(currentIndex,elementsArray);
  }
  else if (event.key === "ArrowRight") {
    simulateTabNavigation(currentIndex,elementsArray);
  }
  // else if (event.key === )
});

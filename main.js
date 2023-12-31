import { createTask } from "./helpers/createTask.js";
import { handleBtnClick } from "./helpers/editDelete.js";
import { sortByDate } from "./helpers/sortbyDate.js";
import { sortByCompleted } from "./helpers/sortbyCompleted.js";
import { simulateReverseTabNavigation } from "./helpers/keyboardFunctions.js";
import { simulateTabNavigation } from "./helpers/keyboardFunctions.js";
import { tickOff } from "./helpers/checkboxHelpers.js";


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

// functionality for the enter button when using tab to navigate the page
const buttons = document.querySelectorAll('button');
// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('keydown', function(event) {
    // Check if the pressed key is Enter
    if (event.key === 13) {
      button.click();
    }
  });
});

//functionlity for the enter button when used on a text input
const newTaskInput = document.getElementById('newTaskInput');
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
  else if (event.key === "Enter" && currentElement.className === "checkbox"){
    // this adds the strikethrough for the checked task
    tickOff(currentElement)
    // this checks the box if it isn't already, otherwise it removes the check
    currentElement.checked ^=1
  }
});
import { createTask } from "./helpers/createElements.js";
import { test, equal } from "./helpers/testHelpers.js";
import { handleBtnClick } from "./helpers/editDelete.js";

test("Submitting a new task adds it to the list", () => {
  const expectBefore =
    document.querySelector("#tasksContainer").children.length - 1;
  const test1 = createTask("Test");
  const expectAfter =
    document.querySelector("#tasksContainer").children.length - 1;
  equal(expectBefore + 1, expectAfter);
  test1.remove();
});

test("Submitting a new task adds it to the list (simulating button push)", () => {
  // the number of tasks in the #taskContainer is the number of children - 1
  const expectBefore =
    document.querySelector("#tasksContainer").children.length - 1;

  const input = document.querySelector("#newTask input");
  input.value = "testSubmit";

  // simulate the click of addPush button to create a new task
  const addPushBtn = document.querySelector("#addPush");
  addPushBtn.click();

  // the number of tasks in the #taskContainer is the number of children - 1
  const expectAfter =
    document.querySelector("#tasksContainer").children.length - 1;

  // there should be a difference of 1 task because we just created 1. this is the equiv to saying
  // equal(expectAfter - expetBefore, 1)
  equal(expectBefore + 1, expectAfter);

  document.querySelector("li").remove();
});

test("Deleting a task from list", () => {
  // create an input value and add it to the list
  const input = document.querySelector("#newTask input");
  input.value = "testDelete";

  // simulate the click of addPush button to create a new task
  const addPushBtn = document.querySelector("#addPush");
  addPushBtn.click();

  /* Create array with all "span" elements, corresponding to the task:
     considering we push only 1 task we should get an array of 1 elements
  */
  const listItemsArray = document.getElementsByTagName("span");

  // simulate the click of deleteBtn to delete the task
  const deleteBtnArray = document.querySelector(".deleteBtn");
  deleteBtnArray.click();

  // Once the span is deleted the array should have 0 elements
  let expectResult = 0;

  // the new task/span should have been removed
  const actualResult = listItemsArray.length;
  equal(actualResult, expectResult);
});

test("Ticking off an item", () => {
  // create a new task
  let newTask = createTask("Checkbox test");
  const checkbox = document.querySelector(`.checkbox`);

  /* run a function that simulates the click on the checkbox and 
     add a new class to the task, marking it as completed */
  function tickoff() {
    checkbox.click();
    newTask.classList.add("completed");

    // Having already one class(".listElement"), ".completed" will be the second element of the array
    return newTask.classList[1];
  }

  // compare results
  const actualResult = tickoff();

  // look for the new task and check the second value in the classlist
  newTask = document.querySelector(".listElement");
  const expectResult = newTask.classList[1];
  equal(actualResult, expectResult);
  newTask.remove();
});

// test("Pressing the SortByDate button sorts the tasks", () => {
//   createTask('Test 1')
//   createTask('Test 2')
//   document.querySelector('#sortPush').click()
//   document.querySelectorAll("li").remove()

//   console.log(document.querySelector("#tasksContainer"))

// })

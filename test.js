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
  const expectBefore = document.querySelector("#tasksContainer").children.length - 1;

  const input = document.querySelector("#newTask input");
  input.value = "testSubmit";

  // simulate the click of addPush button to create a new task
  const addPushBtn = document.querySelector("#addPush");
  addPushBtn.click();

  const expectAfter =
    document.querySelector("#tasksContainer").children.length - 1;
  equal(expectBefore + 1, expectAfter);

  document.querySelector("#task").remove();
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

// test("Pressing the SortByDate button sorts the tasks", () => {
//   createTask('Test 1')
//   createTask('Test 2')
//   document.querySelector('#sortPush').click()
//   document.querySelectorAll("#task").remove()

//   console.log(document.querySelector("#tasksContainer"))

// })

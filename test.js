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
  const expectBefore =
    document.querySelector("#tasksContainer").children.length - 1;

  // simulating the #addPush button.
  document.querySelector("#addPush").onclick = function () {
    createTask("Test");
    document.querySelector("#newtask input").value = "";
  };
  //I would have just done this line below but I would have had to mess with main to get a "test" value in
  document.querySelector("#addPush").click();

  const expectAfter =
    document.querySelector("#tasksContainer").children.length - 1;
  equal(expectBefore + 1, expectAfter);

  document.querySelector("#task").remove();
});

test("Deleting a task from list", () => {
  // create an input value and add it to the list
  const input = document.querySelector("#newTask input");
  input.value = "test";

  // simulate the click of addPush button to create a new task
  document.querySelector("#addPush").click(createTask(input.value));

  /*  Create array with all "span" elements:
      with getElementsByTagName you get a HTMLCollection that includes
      both the span from the template and the newly generated one.
      There' ll be 2 elements
  */
  const listItemsArray = document.getElementsByTagName("span");

  // simulate the click of deleteBtn to delete the task
  const deleteBtn = document.querySelector(".deleteBtn");
  deleteBtn.click();

  // after the deletion the template won't be visible to the HTMLCollection
  let expectResult; // expected: undefined

  // the new task/span should have been removed
  const actualResult = listItemsArray.lenght;
  equal(actualResult, expectResult);
});

// test("Pressing the SortByDate button sorts the tasks", () => {
//   createTask('Test 1')
//   createTask('Test 2')
//   document.querySelector('#sortPush').click()
//   document.querySelectorAll("#task").remove()

//   console.log(document.querySelector("#tasksContainer"))

// })

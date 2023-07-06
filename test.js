import { createTask } from "./helpers/createElements.js"
import { test, equal } from "./helpers/testHelpers.js"

test('Submitting a new task adds it to the list', () => {
    const expectBefore = document.querySelector("#tasksContainer").children.length -1
    const test1 = createTask('Test')
    const expectAfter = document.querySelector("#tasksContainer").children.length -1
    equal(expectBefore+1, expectAfter)
    test1.remove()
  })

  test('Submitting a new task adds it to the list (simulating button push)', () => {
    const expectBefore = document.querySelector("#tasksContainer").children.length -1

    // simulating the #addPush button.
    document.querySelector("#addPush").onclick = function () {
        const taskValue = "test1";
        createTask(taskValue)
        document.querySelector("#newtask input").value = "";
      }
    //I would have just done this line below but I would have had to mess with main to get a "test" value in
    document.querySelector("#addPush").click()

    const expectAfter = document.querySelector("#tasksContainer").children.length -1
    equal(expectBefore+1, expectAfter)
    // test1.remove()
  })

// test("Pressing the SortByDate button sorts the tasks", () => {
//   const test1 = createTask('Test 1')
//   const test2 = createTask('Test 2')
//   document.querySelector('#sortPush').click()
//   document.querySelector('#sortPush').click()

//   console.log(document.querySelector("#tasksContainer"))

    
// })
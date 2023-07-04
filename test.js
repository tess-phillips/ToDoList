import { createTask } from "./helpers/createElements.js"
import { test, equal } from "./helpers/testHelpers.js"

test('Submitting a new task adds it to the list', () => {
    const expectBefore = document.querySelector("#tasksContainer").children.length -1
    const test1 = createTask('Test')
    const expectAfter = document.querySelector("#tasksContainer").children.length -1
    equal(expectBefore+1, expectAfter)
    test1.remove()
  })
export function sortByCompleted(tasksBlock) {
  const tasks = Array.from(tasksBlock.children);

  tasks.sort((a, b) => {
    const aToDoElement = a.querySelector("#toDo");
    const bToDoElement = b.querySelector("#toDo");

    // Check if the querySelector returned a valid element
    const aHasCompletedClass = aToDoElement && aToDoElement.classList.contains("completed");
    const bHasCompletedClass = bToDoElement && bToDoElement.classList.contains("completed");

    if (aHasCompletedClass && !bHasCompletedClass) {
      return 1; // a should come after b
    }
    if (!aHasCompletedClass && bHasCompletedClass) {
      return -1; // a should come before b
    }
    return 0; // a and b are equal
  });

  return tasks;
}
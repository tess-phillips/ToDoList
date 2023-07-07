const tasksBlock = document.querySelector("#tasksContainer");

let taskIdCounter = 1; // Counter variable to keep track of the current ID

export function createTask(task) {
  // get template for tasks (from html)
  const template = document.querySelector("#taskTemplate");
  // clone the content of the template (returns a DocumentFragment)
  const domFragment = template.content.cloneNode(true);

  const taskId = `task-${taskIdCounter}`; // Generate unique ID
  domFragment.querySelector("li").setAttribute("id", taskId);

  const editInput = domFragment.querySelector(".editInput");
  const editLabel = domFragment.querySelector("label[for='editInput']");

  editInput.setAttribute("id", `editInput-${taskIdCounter}`);
  editLabel.setAttribute("for", `editInput-${taskIdCounter}`);

  // add content into the span (<li> element)
  domFragment.querySelector("#toDo").textContent = task;

  //adds date to task
  const currentDate = new Date();
  domFragment
    .querySelector("li")
    .setAttribute("data-date", currentDate.toISOString());
  tasksBlock.appendChild(domFragment);

  taskIdCounter++; // Increment the counter for the next task

  const newTask = document.querySelector("li");
  return newTask;
}

const tasksBlock = document.querySelector("#tasksContainer");

export function createTask(task) {
  // get template for tasks (from html)
  const template = document.querySelector("#taskTemplate");
  // clone the content of the template (returns a DocumentFragment)
  const domFragment = template.content.cloneNode(true);
  // add content into the span (<li> element)
  domFragment.querySelector("#toDo").textContent = task;

  //adds date to task
  const currentDate = new Date();
  domFragment.querySelector("#task").setAttribute("data-date", currentDate.toISOString())
  tasksBlock.appendChild(domFragment);

  // return newTask;
}

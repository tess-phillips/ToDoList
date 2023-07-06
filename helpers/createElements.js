const tasksBlock = document.querySelector("#tasksContainer");

export function createTask(task) {
  // get template for tasks (from html)
  const template = document.querySelector("#taskTemplate");
  // clone the content of the template (returns a DocumentFragment)
  const domFragment = template.content.cloneNode(true);
  // console.log(domFragment.querySelector("#task"))
  // add content into the span (<li> element)
  domFragment.querySelector("#toDo").textContent = task;

  const currentDate = new Date();
  domFragment.querySelector("#task").setAttribute("data-date", currentDate.toISOString())
  tasksBlock.appendChild(domFragment);
  // const newTask = document.querySelector("#task");

  // // const newTask = createTask(taskValue);
  // const currentDate = new Date();
  // newTask.setAttribute("data-date", currentDate.toISOString());
  // return newTask;
}

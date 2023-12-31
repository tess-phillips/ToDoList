// This file contains the functions that determine the decoration and class of tasks that are ticked
// The tickOff function is called by handleBtnClick in editDelete

function toggleMark(div) {
    if (div.style.textDecoration !== "line-through") {
      div.style.textDecoration = "line-through";
      div.setAttribute("class", "completed");
    } else {
      div.style.textDecoration = "";
      div.removeAttribute("class", "completed");
    }
}

// function to mark a task once completed
export function tickOff(task) {
    const taskCompleted = task.parentNode.querySelector("#toDo");
    toggleMark(taskCompleted);
}
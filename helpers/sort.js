/**
 * sorts by date
 * @param {*} tasksBlock the div of divs (task block containing all tasks)
 * @param {*} isSortingAscending boolean
 * @returns tasksBlock sorted by date either asc or des
 */
export function sortByDate(tasksBlock, isSortingAscending) {
    const tasks = Array.from(tasksBlock.children);
  
    const sortedTasks = tasks.slice().sort((taskA, taskB) => {
      const dateA = new Date(taskA.dataset.date);
      const dateB = new Date(taskB.dataset.date);

      if (isSortingAscending) {
        return dateA.getTime() - dateB.getTime(); // Ascending order
      } else {
        return dateB.getTime() - dateA.getTime(); // Descending order
      }
    });
  
    return sortedTasks;
}
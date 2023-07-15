export const clearTasks = (tasks, saveData, showTasks, listContainer) => {
    // Filter out the checked tasks from the tasks array
    tasks = tasks.filter((task) => !task.complete);
    saveData(tasks);
    showTasks(listContainer, tasks);
  };
  
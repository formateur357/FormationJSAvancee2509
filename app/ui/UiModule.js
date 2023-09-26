import { addTask, removeTask, getTask } from "../tasks/taskModule";

function displayTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  const tasks = getTask();
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeTask(index);
      displayTasks();
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
  });
}

function init() {
  const addButton = document.getElementById("add-task-button");
  addButton.addEventListener("click", () => {
    const taskInput = document.getElementById("task-input");
    const task = (taskInput.value = "");
    if (task) {
      addTask(task);
      taskInput.value = "";
      displayTasks();
    }
  });

  displayTasks();
}

export { init };

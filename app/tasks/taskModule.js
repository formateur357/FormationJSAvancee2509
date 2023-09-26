// taskModule.js
let tasks = [];

function addTask(task) {
    tasks.push(task);
}

function removeTask(index) {
    tasks.splice(index, 1);
}

function getTask(task) {
    return tasks;
}

export { addTask, removeTask, getTask };
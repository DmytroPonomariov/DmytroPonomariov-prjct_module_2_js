"use strict";

// 1. Add new tasks+
// 2. Delete all task +
// 3. Delete separately tasks
// 4. Search task
// 5. Set and get to/from local storage


// const form = document.querySelector('.create-task-form');
// const taskInput = document.querySelector('.task-input');

// form.addEventListener('submit', addTask)

// function addTask(event) {
//     event.preventDefault();
     
//     const inputValue = event.target.
//     console.log('add task')
// }

const form = document.querySelector('.create-task-form');
const collection = document.querySelector('.collection');

form.addEventListener('submit', addTask)

function addTask(event) {
    event.preventDefault();
    const inputValue = event.target.task.value;
    const li = document.createElement('li');
    li.innerHTML = inputValue;
    collection.append(li)
}
































// const taskInput = document.querySelector('.task-input');
// const form = document.querySelector('.create-task-form');
// const collection = document.querySelector('.collection');
// const clearButton = document.querySelector('.clear-tasks');



// const TASKS_STORAGE_KEY = 'tasks';

// form.addEventListener('submit', addTask)
// document.addEventListener('DOMContentLoaded', renderTasks);
// clearButton.addEventListener('click', removeTasks);
// collection.addEventListener('click', removeTask)

// function renderTasks() {
//     if (getTasksFromLocalStorage()) {
//         const tasks = JSON.parse(getTasksFromLocalStorage())

//         tasks.forEach((task) => { 
//             createTask(task)
//         })
//     }
// }

// function createTask(task) {
//     const li = document.createElement('li');
//     li.innerHTML = task;
//     li.classList.add('task')

//     const button = document.createElement('button');
//     button.innerHTML = 'X';
//     button.className = 'button-icon button-delete'
//     li.append(button)



//     collection.append(li);
// }

// function addTask(event) {
//     event.preventDefault();

//     const currentForm = event.target;
//     const inputValue = currentForm.task.value;

//     if (!inputValue){
//         return;
//     }

//     createTask(inputValue);
//     setTaskToLocalStorage(inputValue);

//     currentForm.reset();
// }



// function setTaskToLocalStorage(task) {

//     let tasks = [];

//     if(getTasksFromLocalStorage()) {
//         tasks = JSON.parse(getTasksFromLocalStorage())
//     }

//     tasks.push(task)

//     setTasksToLocalStorage(tasks)
// }

// function getTasksFromLocalStorage() {
//     return localStorage.getItem(TASKS_STORAGE_KEY)
// }

// function setTasksToLocalStorage(tasks) {
//     return localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))

// }

// function clearTasksFromLocalStorage() {
//     localStorage.removeItem(TASKS_STORAGE_KEY);
// }

// function removeTasks() {
//     collection.innerHTML = '';
//     clearTasksFromLocalStorage();
// }

// function removeTask(event) {
//     if (event.target.classList.contains('button-delete')) {
//         const li = event.target.closest('.task')
//         console.log(li)
//         console.log(event.target)
//         li.remove();
//     }

// }
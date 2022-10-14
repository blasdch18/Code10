import { Task } from "./task.js";

const inputTask = document.querySelector(".input__task");
const btnCreate  =document.querySelector(".btn__create");
const listTask = document.querySelector(".container__list__task");

const arrayTask = [];
// Nota : Cuando una function no tiene nombre se llama funcion anonima
btnCreate.onclick = function () {
    const tasktext = inputTask.value;
    
    if (tasktext === "") {
        alert("Debe completar la caja de texto");
        return ;
    }

    const task = new Task(tasktext, new Date(), 1);
    arrayTask.push(task);

    listTask.innerHTML += task.render();

    inputTask.value= "";

};

function destroy() 
{
    //console.log("zzzz");
    const filterTask = arrayTask.filter((task) => task._id !== Number(id));
    arrayTask = filterTask;
    Task.destroyRender(id);
}

function edit(id) {
    const newText = prompt("Ingresa el nuevo nombre de la tarea");
    //find solo retorna 1 element
    const oneTask = arrayTasks.find(task) => task._id === id);
    oneTask._name = newText;
    oneTask._status = 2;
    console.log(arrayTask);
}
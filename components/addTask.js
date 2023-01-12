import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';
export const addTask = (event) => {
    event.preventDefault();

    //Obteniendo propiedades de las cajas
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    //obteniendo fecha para formatear fecha
    const value = input.value;
    const calendarFormat = moment(calendar.value).format('DD-MM-YYYY');
    
    if(value == '' || calendar.value == ''){
        return
    }
    input.value = '';
    calendar.value="";
    const complete= false;
    //alamcenamos informacion de la task
    const taskObject = {
        value,
        calendarFormat,
        complete,
        id:uuid.v4(),
    }
    list.innerHTML = '';
    const taskList = JSON.parse(localStorage.getItem('task')) || [];

    taskList.push(taskObject);

    localStorage.setItem('task',JSON.stringify(taskList))
    
    displayTasks();
}
export const createTask = ({value,calendarFormat,complete,id}) => {

    const task = document.createElement('li');
            task.classList.add('card');
    
    const taskContent = document.createElement('div');
    const check = checkComplete(id);
    if (complete) {
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }
    const titleTask = document.createElement('span');
            titleTask.classList.add('task');
            titleTask.innerText = value;
            taskContent.appendChild(check);
            taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    
          task.appendChild(taskContent);
          task.appendChild(deleteIcon(id));

    return task;
  };
  

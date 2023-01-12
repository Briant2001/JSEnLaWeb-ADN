import { displayTasks } from "./readTasks.js";
const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector('[data-list]')
  const tasks = JSON.parse(localStorage.getItem('task'));
  const index = tasks.findIndex((item) => item.id == id)
  console.log(index);
  tasks.splice(index,1);
  li.innerHTML='';
  localStorage.setItem('task',JSON.stringify(tasks))
  console.log(tasks);
  displayTasks()
};

export default deleteIcon;


/*const deleteTask = (event) => {
  const parent = event.target.parentElement;
  const task = event.target.parentElement.childNodes[0].innerText
  const date = event.target.parentElement.childNodes[1].innerText
  
  let list = JSON.parse(localStorage.getItem('task'));
  const filtered = list.filter(function(element){
    return element.value !== task && element.calendarFormat !== date
  });
  localStorage.setItem("task",JSON.stringify(filtered))
  parent.remove();
};*/
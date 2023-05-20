let text = document.getElementById('#text-box');
let textButton = document.getElementById('#add-button');
let toDoList = document.getElementById('#ToDoList');

text.addEventListener('input' , inputTextInToDo);
text.addEventListener('keydown' , (event)=>{
  if(event.key === 'Enter'){
  addToDo(event);
 }
});
textButton.addEventListener('click' , addToDo);

function inputTextInToDo() {
 textButton.disabled = !(text.value);
 textButton.value = textButton.disabled === true ? '' : 'add';
}



function addToDo(event) {
 if (!textButton.disabled) {
  toDoList.innerHTML += `<div onclick="CloseTask(this)" class="ToDo">
        <span>
             ${text.value}
        </span>
         <span onclick="deleteTask(this)" class="material-symbols-outlined">delete</span>`;
  text.value = '';
 }
 inputTextInToDo(event);
}

function deleteTask(button) {
 let taskDiv = button.parentNode;
 let todoListDiv = taskDiv.parentNode;
 todoListDiv.removeChild(taskDiv);
}

function CloseTask(button) {
 if( button.children[0].style.textDecoration === 'line-through 3px red'){
  button.children[0].style.textDecoration = 'none';
  return;
 }
  button.children[0].style.textDecoration = 'line-through 3px red';
}
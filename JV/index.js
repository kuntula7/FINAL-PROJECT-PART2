import TodoItem from "./helper.js";


const inp = document.getElementById('veli')
const dlt = document.getElementById('delete');
const edit = document.getElementById('edit')
const clearAll = document.getElementById('clearall')
const count = document.getElementById('count')
const add = document.getElementById('add')
const ul = document.getElementById('title')
const list = document.getElementById('list-items')
const toDos = []

add.addEventListener('click',()=>{
    let todoName = inp.value;
    let td = new TodoItem(todoName);
    toDos.push(td);
    let text = document.createTextNode(todoName);
    let li = document.createElement('li');
    li.appendChild(text);
    ul.appendChild(li)
    count.innerText = toDos.length
})
console.log(toDos)

// clear.addEventListener('click',()=>{
//     toDos.splice(0,toDos.length);
//     ul.innerHTML = '';
//     count.innerHTML = '';
//     inp.value = ''
// })
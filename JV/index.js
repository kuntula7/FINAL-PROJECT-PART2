import TodoItem, {inp,clearAll,add,div,sum,toDos} from "./helper.js";
import fetchData, {url,toDoData,output} from "./fakeapi.js"

window.addEventListener('load',()=>{
    fetchData()
})

add.addEventListener('click',()=>{
    let todoName = inp.value;
    let date = Date.now();
    let td = new TodoItem(todoName,date)
    let d = td.dabruneba()
    toDos.push(td)
    let text = document.createTextNode(todoName + ' '  + d.toLocaleString('en-US'));
    let li = document.createElement('li');
    li.appendChild(text);
    div.appendChild(li)
    sum.innerText = toDos.length
})


clearAll.addEventListener('click',()=>{
    toDos.splice(0,toDos.length);
    div.innerHTML = '';
    sum.innerHTML = '';
    inp.value = ''
})
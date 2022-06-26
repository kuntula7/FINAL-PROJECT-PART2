export const url = 'https://jsonplaceholder.typicode.com/todos'
export const toDoData = []
export const loader = document.getElementById('loading')
export const output = document.getElementById('output')
export default function fetchData(){
    loader.style.display = "block";
    fetch(url)
    .then((response)=>response.json())
    .then(data=>{
        toDoData.push(...data)
        loader.style.display = "none";

    })
    .catch(err => console.log(err))
}


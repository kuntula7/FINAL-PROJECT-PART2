export default class TodoItem{
    constructor(name,date){
        this.name = name;
        this.date = date
    } 
    dabruneba(){
        return new Date(this.date)
    }
}

export const inp = document.getElementById('veli')
export const clearAll = document.getElementById('clearall')
export const add = document.getElementById('add')
export const div = document.getElementById('yuti')
export const sum = document.getElementById('sum')
export const toDos = []
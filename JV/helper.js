export default class TodoItem{
    constructor(name){
        this.name = name;
    } 
    count(){
        return new Date(this.date)
    }
}
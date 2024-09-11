import React,{useState} from "react";

function ToDoFunction(){

const[item,setItem] = useState('');
const[todoList,setTodoList] = useState([]);

const handleSubmit = (e)=>{
    e.preventDefault();
    const list = [...todoList,item];
    setTodoList(list);
}

const handleChange = (e) =>{
    setItem(e.target.value);
}

const currentTodos = todoList.map((todo,index)=><p key={index}>{todo}</p>);

return (
    <>
    <label>ToDo Function</label>
    <form onSubmit={handleSubmit}>
        <input type="text"
        id="todoItem"
        value={item}
        onChange={handleChange}
        placeholder="what to do?"/>
        <button type="submit">Add</button>
        {currentTodos}
    </form>
    </>
);

}
export default ToDoFunction;
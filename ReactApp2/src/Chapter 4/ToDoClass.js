import React from "react";

class ToDoClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            item:'',
            todoList:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const list = [...this.state.todoList,this.state.item];
        this.setState({todoList:list});
    }

    handleChange(e){
        this.setState({item:e.target.value});
    }

    render(){
        const currentTodos = this.state.todoList.map((todo,index)=>
            <p key={index}>{todo}</p>
        );
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="todoItem"
                value={this.state.item}
                onChange={this.handleChange}
                placeholder="What to do?"/>
                <button type="submit">Add</button>
                {currentTodos}
            </form>
        );
    }
}
export default ToDoClass;
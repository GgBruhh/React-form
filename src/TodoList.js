import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const add = todoObj =>{
        setTodos(todos => [...todos, todoObj]);
    }
    const remove = id =>{
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }
    const todoComponents = todos.map(todo =>(
        <Todo 
        key={todo.id}
        id={todo.id}
        todo={todo.todoInfo}
        handleRemove={remove}
        />
    ))
    return (
        <div id="todo-list">
            <NewTodoForm createTodo={add} />
            {todoComponents}
        </div>
    )
}


export default TodoList;
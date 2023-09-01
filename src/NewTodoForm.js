import React, {useState} from "react";
import TodoList from "./TodoList";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({createTodo}) =>{
    const INITIAL_STATE = {
        todoInfo: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) =>{
        e.preventDefault()
        createTodo({...formData, id: uuid()})
        setFormData({todoInfo: ""})
    }
    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(data =>({
            ...data,
            [name]: value
        }))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todoInfo">Todo: </label>
                <input 
                    type="text"
                    name="todoInfo"
                    placeholder="Insert Todo"
                    id="todoInfo"
                    value={formData.todoInfo}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default NewTodoForm;
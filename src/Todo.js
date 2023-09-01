import React from "react";

const Todo = ({todo, handleRemove, id}) =>{
    const remove = () => handleRemove(id);
    return(
        <div>
            <li>{todo}</li>
            <button onClick={remove}>Remove Todo!</button>
        </div>
    )
}

export default Todo;
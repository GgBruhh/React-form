import React, {useState} from "react"
import BoxList from "./BoxList";



const Box = ({color, width=5, height=5, id, handleRemove, backgroundColor='blue'}) => {
    const remove = () => handleRemove(id);
    return(
        <div>
            <div 
                style={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor: backgroundColor
                }}            
            />
            <button onClick={remove}>Remove The Box!</button>
        </div>
    )
}

export default Box;

import React ,{useState} from "react"
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const add = boxObj =>{
        setBoxes(boxes => [...boxes, boxObj]);
    };
    const remove = id =>{
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };
    const boxComponents = boxes.map(box =>(
        <Box 
            key={box.id}
            id={box.id}
            height={box.height}
            width={box.width}
            handleRemove={remove}
            backgroundColor={box.backgroundColor}
        />
    ))
    return(
        <div id="box-list">
            <NewBoxForm createBox={add} />
            {boxComponents}
        </div>
    )
}

export default BoxList;
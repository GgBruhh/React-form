import React, {useState} from "react";
import BoxList from "./BoxList";
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({createBox}) =>{
    const INITIAL_STATE ={
        height: "",
        width: "",
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) =>{
        e.preventDefault();
        createBox({...formData, id: uuid()})
        setFormData({height: "", width: "", backgroundColor:""})
    }
    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="height">Height: </label>
                <input
                type="number"
                name="height"
                placeholder="Insert Height"
                id="height"
                value={formData.height}
                onChange={handleChange}
                />
                
                <label htmlFor="width">Width: </label>
                <input
                type="number"
                name="width"
                placeholder="Insert Width"
                id="width"
                value={formData.width}
                onChange={handleChange}
                />
                
                <label htmlFor="backgroundColor">Color: </label>
                <input
                type="text"
                name="backgroundColor"
                placeholder="Insert Color Name"
                id="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
                />
                <button>Add Color!</button>
            </form>
        </div>
    )
}


export default NewBoxForm;
import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = ({inputTask, setInputTask, todoArray, setTodoArray}) => {

    const submitForm = (e) => {
        e.preventDefault();
        setTodoArray([
            ...todoArray,
            {
            list : inputTask,
            status : false,
            id : uuidv4().split(0,1)[0]
        }])
        setInputTask("");
    }


    const taskChangeHandler = (event) => {
        setInputTask(event.target.value);
    }

    
    return (
            <div className="w-25">
                <form 
                className="d-flex"
                onSubmit={submitForm}>
                    <input type="text" 
                    className="form-control border"
                    placeholder="Add a Task"
                    onChange={taskChangeHandler}
                    value={inputTask}
                    />
                    <button
                    className="btn btn-success btn-sm ml-2"
                    >Add</button>
                </form>
            </div>
    )
}

export default Form
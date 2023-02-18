import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const c = console.log.bind(document);

const TableForm = (props) => {
    const [task, setTask] = useState("");

    const taskChangeHandler = (event) => {
        setTask(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        const newForm = {
            list : task,
            status : false
        }
        props.onSaveTaskData(newForm);
        setTask("");
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
                value={task}
                />
                <button
                className="btn btn-success btn-sm ml-2"
                >Add</button>
            </form>
        </div>
    )
}

export default TableForm;
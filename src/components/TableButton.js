import { Button } from "bootstrap";
import { useState } from "react";
import React from "react";
const c  = console.log.bind(document);
const TableButton = (props) => {
    // let change = props.tabBtn;
    const [condition, setCondition] = useState(props.tabBtn);
    const changeStatus = () => {
        // props.tabBtn = !props.tabBtn;
        c([condition]);
        setCondition(!condition);
        c([condition]);
        props.onNewCondition(condition);
    }
    return (
        <button 
        onClick={changeStatus}
        className="btn btn-warning"
        >
            {condition === false ? "Mark" : "Undo"}
        </button>
    )   
}

export default TableButton
import React, { useState } from "react";
import TableButton from "./TableButton";
// import "font-awesome/css/font-awesome.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Icon from "./Icon";
const c = console.log.bind(document);

const TableBody = (props) => {
    c(props.statuses);

    // const setNewCondition = (cond) => {
    //     c(cond);
    // }
    // c(setNewCondition)

    const [condition, setCondition] = useState(props.statuses);
    c(condition);

    const changeStatus = () => {
        // props.tabBtn = !props.tabBtn;
        c([condition]);
        setCondition(!condition);
        c([condition]);
    }

    return (
        <tr>
            <td></td>
            <td>{props.lists}</td>
            <td>
                {condition == false ? 
                    <i className="fa fa-times text-danger"></i> : 
                    <i className="fa fa-check text-success"></i>
                }
            </td>
            <td>
                <button 
                    onClick={changeStatus}
                    className="btn btn-warning"
                >
                    {condition === false ? 
                    "Mark" : 
                    "Undo"}
                </button>


                {/* <TableButton
                onNewCondition={setNewCondition}
                tabBtn={props.statuses}
                /> */}
            </td>
        </tr>
    )
}

export default TableBody
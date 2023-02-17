import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const c = console.log.bind(document);

const TableBody = (props) => {
    const [condition, setCondition] = useState(props.statuses);

    const changeStatus = () => {
        setCondition(!condition);
    }

    return (
        <tr>
            <td></td>
            <td>{props.lists}</td>
            <td>
                {
                    condition == false ? 
                    <i className="fa fa-times text-danger"></i> : 
                    <i className="fa fa-check text-success"></i>
                }
            </td>
            <td>
                <button 
                    onClick={changeStatus}
                    className="btn btn-warning"
                >
                    {
                        condition === false ? 
                        "Mark" :    
                        "Undo"
                    }
                </button>
            </td>
        </tr>
    )
}

export default TableBody
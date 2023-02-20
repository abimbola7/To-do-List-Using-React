import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const c = console.log.bind(document);

const TableBody = ({list,todoArray, setTodoArray, todo, id, status}) => {
    const deleteHandler = () => {
        c(todo)
        const a = todoArray.filter((el) => el.id !== id);
        setTodoArray(a);
    }

    const completeHandler = () => {
        setTodoArray(
            todoArray.map((elem) => {
                if (elem.id === id) {
                    return {
                        ...elem, status : !elem.status
                    }
                }
                return elem;
            }
            )
        );
    }

    return (
        <tr 
        className={!status ? "bg-secondary" : ""}>
            <td></td>
            <td className="todoItem">
                {list}
            </td>
            <td>
                {
                    status ? <i className="fa fa-check text-success"></i> : <i className="fa fa-times text-danger"></i>
                }
            </td>
            <td className="complete-btn">
                <button 
                className="btn btn-md btn-primary"
                onClick={completeHandler}>
                    {
                        status ? "Undo" : "Mark"
                    }
                </button>
            </td>
            <td className="trash-btn">
                <button 
                className="bg-secondary px-3 py-2 rounded-circle"
                onClick={deleteHandler}
                >
                   <i className="fa fa-trash text-danger"></i> 
                </button>
            </td>
        </tr>
    )
}

export default TableBody
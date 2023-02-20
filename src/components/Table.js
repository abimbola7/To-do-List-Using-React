import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableBody from "./TableBody";
const c = console.log.bind(document);

const Table = ({todoArray, setTodoArray}) => {
    return (
        <table className="table-bordered table-hover text-center w-100">
            <thead>
                <th>S/N</th>
                <th>Task</th>
                <th>Action</th>
                <th>Progress</th>
                <th></th>
            </thead>
            <tbody>
                {todoArray.map(todo => (
                    <TableBody
                    key={todo.id}
                    id={todo.id}
                    todo={todo}
                    list={todo.list}
                    status={todo.status}
                    todoArray={todoArray}
                    setTodoArray={setTodoArray}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Table
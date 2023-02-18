import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableBody from "./TableBody";
const c = console.log.bind(document);

const Table = (props) => {
    c(props.tableData[0].list)
    return (
        <table className="table-bordered table-hover text-center w-100">
            <thead>
                <th>S/N</th>
                <th>Task</th>
                <th>Action</th>
                <th>Progress</th>
            </thead>
            <tbody>
                {
                    props.tableData.map((data, index) => (
                        <TableBody
                        ind={index+1}
                        lists={data.list}
                        statuses={data.status}                        
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table
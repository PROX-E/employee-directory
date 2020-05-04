import React, { useState, useContext } from 'react';
import { useGet } from "../hooks/API.js"
import "./Table.css"
import Button from "./Button.js"
import { EmployeeContext } from './EmployeeContext.js';


function Table() {
    
    const [url] = useState("https://randomuser.me/api/?results=15")
    const { sortFunc } = useGet(url);
    // contains the employees to display in the table
    const { displayedEmployees} = useContext(EmployeeContext)

    
    return (
        <table>
            <thead>
                <tr>
                    <td onClick={() => sortFunc("name")}><Button>First Name</Button></td>
                    <td>Last Name</td>
                    <td>UID</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td onClick={() => sortFunc("age")}><Button>Age</Button></td>
                </tr>
            </thead>
        </table>
    )
}
export default Table;
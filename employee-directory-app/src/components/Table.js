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

    
}
export default Table;
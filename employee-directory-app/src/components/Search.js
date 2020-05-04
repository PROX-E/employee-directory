import React, {useState, useContext} from 'react';
import { EmployeeContext } from './EmployeeContext.js';

function Search(){
    // stores the characters being entered into the search input
    const [search, setSearch] = useState("")
    const {employees, setDisplayedEmployees} = useContext(EmployeeContext)
    
}
export default Search;
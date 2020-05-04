import React, {useState, useContext} from 'react';
import { EmployeeContext } from './EmployeeContext.js';

function Search(){
    // stores the characters being entered into the search input
    const [search, setSearch] = useState("")
    const {employees, setDisplayedEmployees} = useContext(EmployeeContext)
    
    function updateSearch({target}){
        // just using for readability
        const searchTerm = target.value
        // used for updating the value in the search input, so it always equals exactly what is saved in state
        setSearch(searchTerm)
        
    }
    // every letter entered triggers the onChange event.
    return(
       <input type="text" onChange= {updateSearch} value={search}></input>
    )
}
export default Search;
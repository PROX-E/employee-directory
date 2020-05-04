import {useEffect, useContext} from 'react';
import {EmployeeContext} from "../components/EmployeeContext"
import axios from "axios"

export function useGet(url){
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(EmployeeContext)

    
    // get employees from the api, stores them in employees, and displayed employees. 
    // Only occurs once, and when component is mounted.
    useEffect(()=> {
        async function getEmployees(){
              
        }
        getEmployees()
    },[])
}
import {useEffect, useContext} from 'react';
import {EmployeeContext} from "../components/EmployeeContext"
import axios from "axios"

export function useGet(url){
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(EmployeeContext)

    
    // get employees from the api, stores them in employees, and displayed employees. 
    // Only occurs once, and when component is mounted.
    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
                // using employees to store a copy of all the employees that will not be manipulated
                setEmployees(response.data.results)
                // use displayed employees as the version of data that will be displayed.
                setDisplayedEmployees(response.data.results)
            }
            catch (error) {
                console.log("error retrieving info from the API: ", error)
            }   
        }
        getEmployees()
    },[])

     // Sort function to trigger
     function sortFunc(sort){
        switch(sort){
            case "name":
                sortByName()
                break
            case "age":
                sortByAge()
                break
            default:
                console.log("sort does not match any cases")
        }
    }
    
    // sorts employees by first name.
    function sortByName(){
        employees.sort(function(a,b){
          if(a.name.first < b.name.first){
              return -1;
           }else{
               return 1;
        }
     })
    // Spread employees for react.
    setDisplayedEmployees([...employees])
    }
    
    // sorts employees by age.
    function sortByAge(){
        employees.sort(function(a,b){
            return (a.dob.age - b.dob.age)
        })
        setDisplayedEmployees([...employees])
    }

    return {displayedEmployees, sortFunc}
}
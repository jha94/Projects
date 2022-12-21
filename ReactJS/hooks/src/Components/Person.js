import { useState } from 'react';
import UserContext from './UserContext';
import Student from './Student';
import BusinessMan from './BusinessMan';
function Person(){
    const [value, setValue] = useState({fName:'Prashant', lName:'Jha'})
    return(
        <UserContext.Provider value={{value, setValue}}>
            <Student/>
            <BusinessMan/>
        </UserContext.Provider>
    )
}
export default Person;
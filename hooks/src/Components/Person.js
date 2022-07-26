import UserContext from './UserContext';
import Student from './Student';
import BusinessMan from './BusinessMan';
function Person(){
    const value = {fName:'Prashant', lName:'Jha'}
    return(
        <UserContext.Provider value={value}>
            <Student/>
            <BusinessMan/>
        </UserContext.Provider>
    )
}
export default Person;
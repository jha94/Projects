import { useContext } from "react";
import UserContext from "./UserContext";
function Student(){
    const test = useContext(UserContext)
    return(
           <p> {test.fName+' '+test.lName}</p>    
    )

}
export default Student;
import { useContext } from "react";
import UserContext from "./UserContext";
function Student(){
    const test = useContext(UserContext)
    return(
        <div>
           <p> {test.value.fName+' '+test.value.lName}</p>  
           <button onClick={()=>{
            test.setValue({fName:'Stu', lName:'dent'})
           }}>Update Global State</button>  
           </div>
    )

}
export default Student;
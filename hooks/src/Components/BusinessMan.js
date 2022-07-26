import { useContext } from "react";
import UserContext from "./UserContext";
function BusinessMan(){
    const test = useContext(UserContext)
    return(
        <p> {test.fName+' '+test.lName}</p>     
    )

}
export default BusinessMan;
import { useContext } from "react";
import Context from "./store/Context";
const Third = () => {
    const value = useContext(Context);
    return(
        <>
        Hi, I am Third component {value}
        </>
    )
}
export default Third
import { useState, useEffect } from "react";
import data from "../Data.json";
import './Tabs.css';
const Tabs = () => {
    const [activeTabIndex, setActiveTabindex] = useState(0);
    const [activeContent, setActiveContent] = useState('');
    const addActiveContent = () => {
        data.forEach(({content}, index)=>{
            if(activeTabIndex===index){
                setActiveContent(content)
            }
        })
    }

    const divStyle = {
        width:'100%',
        backgroundColor:'green',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'space-around',
    }

    useEffect(()=>{
        addActiveContent()
    }, [activeTabIndex])


    return(
        <>
        <div style={divStyle}>
        {data.map((value,index)=>{
           return <span
           id="span"
           onClick={()=>{
            setActiveTabindex(index)
           }}
           style={{
            width:'100%',
            backgroundColor:'green',
            display:'flex',
            justifyContent:'space-around',
            alignItems:'space-around',
            backgroundColor:activeTabIndex===index?'white':'green',
            cursor:activeTabIndex===index?'':'pointer',
            color:activeTabIndex===index?'black':'white',
        }}
           >{value.language}</span>
        })}
        </div>
        <p>{activeContent}</p>
        </>
    )
}
export default Tabs
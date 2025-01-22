import React from "react";
import Seat from "./Seat";
const SeatRow = ({seats, group, updateSeatList}) =>{
    return(
        <>
       {Object.keys(seats).map(value=>{
        return(
            <div style={{display:'flex', marginLeft:'20px'}} >
            <h4>{value}</h4>
            <Seat seat={seats[value]} group={group} category={value} updateSeatList={updateSeatList}/>
            </div>
        )
       })}
       </>
    )
}
export default SeatRow;
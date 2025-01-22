import React from "react";
const Seat = ({seat, group, category, updateSeatList}) =>{
    const getSeatColor = (availability, active) =>{
        if(availability==='booked' && active){
            return 'yellow'
        } else if(availability==='booked'){
            return 'grey'
        } else if(availability==='not available'){
            return 'red'
        } else{
            return 'green'
        }
    }
    const bookSeat = (index) =>{
        updateSeatList(group, category, index)
    }
    return(
        <div style={{display:'flex'}} >
       {seat.map(({availability, active}, index)=>
            <div
                onClick={()=>active?bookSeat(index):alert(availability)}
                style={{
                height:'60px',
                width:'60px',
                borderRadius:'30px',
                backgroundColor:getSeatColor(availability, active),
                marginLeft:'10px',
                marginTop:'5px',
            }}></div>
        )}
        </div>
    )
}
export default Seat;
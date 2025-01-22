import React, {useState} from 'react';
import {seats} from './Data';
import SeatRow from './SeatRow';
const SeatGroup = () =>{
    const [seatList, setSeatList] = useState(seats);
    const [selectedSeats, setSelectSeats] = useState([]);
    const updateSeatList = (group, category, index) =>{
        const selectedSeat = seatList[group][category][index];
        if(selectedSeat.availability==='booked'){
            selectedSeat.availability='available';
            selectedSeat.active=true
        } else{
            selectedSeat.availability='booked'
        }
        setSeatList({...seatList});
        setSelectSeats([...selectedSeats, {group, category, index}])
    }
    return(
        <>
        {Object.keys(seatList).map(value=>{
            return(
                <>
                <h2>{value}</h2>
                <SeatRow seats={seatList[value]} group={value} updateSeatList={updateSeatList} />
                </>
            )
        })}
        <button
            onClick={()=>{
                selectedSeats.map(({group, category, index})=>{
                    if(seatList[group][category][index].availability==='booked'){
                    delete seatList[group][category][index].active;
                    setSeatList({...seatList})
                    }
                })
            }}
            style={{
            height:'40px',
            width:'100px'
        }}>Confirm</button>
        </>
    )
}

export default SeatGroup;
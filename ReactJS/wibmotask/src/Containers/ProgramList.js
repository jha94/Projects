import React, {useContext, useState} from 'react'
import Button from '@mui/material/Button';
import { programDetailsContext } from '../Utils'

function ProgramList(){
  const [programDetails, setProgramDetails] = useContext(programDetailsContext);
    const [alignmentType, setAlignmentType] = useState('row')
    const { programList } =  programDetails;
    const renderprograms = () => {
      return  programList.length?
      programList.map(({programName, country:{name:countryName}, duration, selectedKYC, client, otherIdDetails, uID }, index)=>{
        console.log('Object.keys(otherIdDetails)', Object.values(otherIdDetails));
        return(
            <div style={{ display:'flex', flexDirection:alignmentType, paddingLeft:'15px', justifyContent:'space-evenly' }}>
                <p>Program: {programName}</p>
                <p>Country: {countryName}</p>
                <p>Duration(In Month): {duration}</p>
                <p>KYC Type :{selectedKYC.map(value=><p>{value}</p>)}</p>
                <p>Client : {client.name}</p>
               
                 {otherIdDetails.name? <p>Other ID Name: {otherIdDetails.name}</p>:''}
                 {otherIdDetails.type?<p>Other ID Type: {otherIdDetails.type}</p>:''}
                 {uID?<p>Unique Identifier: {uID}</p>:''}
                <button style={{width:'80px', height:'35px', marginTop:'6px'}} onClick={()=>{
                  programList.splice(index, 1)
                  setProgramDetails(prevState => ({
                    ...prevState,
                    programList:programList
                 }));
                }} >Delete</button>
                <button style={{width:'80px', height:'35px', marginTop:'6px'}} onClick={()=>{
                  setProgramDetails(prevState => ({
                    ...prevState,
                    showProgramList:false,
                    index:index
                 }));
                }} >Edit</button>
            </div>
        )
      })
      :<h2 style={{marginLeft:'40%' }} >No program available</h2>
    }
    return(
        <div>
        <div style={{justifyContent: 'flex-end', alignItems:'center', display:'flex', flexDirection:'row'}}>
        <Button variant="contained" style={{marginRight:'30px', marginTop:'20px' }} onClick={()=>{
          setProgramDetails(prevState => ({
            ...prevState,
            showProgramList:false
         }));
        }} >Create new Program</Button>
        </div>

        <Button disabled={alignmentType==='row'} variant="contained" style={{marginRight:'30px', marginTop:'20px' }} onClick={()=>{
            setAlignmentType('row')
        }} >Horizontal</Button>

<Button variant="contained" disabled={alignmentType==='column'} style={{marginRight:'30px', marginTop:'20px' }} onClick={()=>{
            setAlignmentType('column')
        }} >Vertical</Button>
        {renderprograms()}
        </div>
        )
}

export default ProgramList;
import React, {useContext, useState} from 'react'
import Button from '@mui/material/Button';
import '../App.css'
import { programDetailsContext } from '../Utils'

function ProgramList(){
  const [programDetails, setProgramDetails] = useContext(programDetailsContext);
    const [alignmentType, setAlignmentType] = useState('row')
    const { programList } =  programDetails;
    const renderprograms = () => {
      return  programList.length?
      programList.map(({programName}, index)=>{
        return(
            <div style={{ display:'flex', flexDirection:alignmentType }}>
                <p>{programName}</p>
                <button onClick={()=>{
                  programList.splice(index, 1)
                  setProgramDetails(prevState => ({
                    ...prevState,
                    programList:programList
                 }));
                }} >Delete</button>
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
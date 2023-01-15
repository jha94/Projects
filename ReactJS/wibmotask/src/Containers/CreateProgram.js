import React, {useContext, useState} from 'react';
import {TextField, Button, Box, Select, MenuItem,FormControlLabel, Checkbox, FormHelperText, FormControl } from '@mui/material';
import { programDetailsContext, programCreationData, allLetter, alphaNumeric } from '../Utils'

export default function CreateProgram() {
  const [programDetails, setProgramDetails] = useContext(programDetailsContext);
  const { programList: createdProgram, index: createProgramIndex } =  programDetails;
  const [programData, setProgramData] = useState({
    programName:((createdProgram.length && createProgramIndex>-1)&& createdProgram[createProgramIndex].programName)||'',
    client:'',
    duration:'',
    country:'',
    selectedKYC:[],
    minKYCType:'',
    fullKYCReqDocs: '',
    uID:'',
    otherIdDetails: {
      name:'',
      type:'',
      length:'',
    }
  })
    const handleSubmit = (event) => {
      const { programList, index } =  programDetails;
      const { selectedKYC } = programData;
        event.preventDefault();
          setProgramData(prevState => ({
            ...prevState,
            selectedKYC: !selectedKYC.length?['false']:selectedKYC,
            minKYCType:(selectedKYC.includes('Min KYC') && minKYCType==='')?false:minKYCType,
         }));
         if((selectedKYC.length && !selectedKYC.includes('false'))){
          if(selectedKYC.includes('Min KYC')){
            if(minKYCType){
         index>-1?programList[index]=programData:programList.push(programData)
        setProgramDetails({
          programList,
          showProgramList: true,
          index:-1
        })
          } }else{
            index>-1?programList[index]=programData:programList.push(programData)
        setProgramDetails({
          programList,
          showProgramList: true,
          index:-1
        })
          }
      }
      };
      const {programName , selectedKYC, uID, minKYCType, otherIdDetails} = programData
      const handleKYCCheck = (event) => {
        var selectedKYC = [...programData.selectedKYC];
        if (event.target.checked) {
          selectedKYC = [...programData.selectedKYC, event.target.value];
        } else {
          selectedKYC.splice(programData.selectedKYC.indexOf(event.target.value), 1);
        }
        if(selectedKYC.includes('false')){
          selectedKYC.splice(0,1)
        }
        setProgramData(prevState => ({
          ...prevState,
          selectedKYC:selectedKYC
       }));
      };


      const handleMinKYCType = ({target:{value}}) => {
        setProgramData(prevState => ({
          ...prevState,
          minKYCType:minKYCType!==value?value:''
       }));
      };
      const { clientList, countryList, supportedKYCList, minimumKYCOptions, fullKYCSupportedDocs, uniqueidentifiers } = programCreationData;
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
    <div style={{marginLeft:'50px'}} >
      <div>
      Program Name:  <TextField
          variant="standard"
          required
          name='name'
          type='text'
          value={programName}
          onChange={({target:{value}})=>{
            if(allLetter(value)){
              setProgramData(prevState => ({
                ...prevState,
                programName:value
             }));
            }
              }}
        />
      </div>
      <br/>
        Program IFI:  <TextField
          variant="standard"
          contentEditable={false}
          value='Gem bank, India'
        />
      Client:
      <Select
      required
          size='small'
          style={{minWidth:'150px', minHeight:'10px'}}
          onChange={({target:{value}})=>{
            setProgramData(prevState => ({
              ...prevState,
              client:value
           }));
          }}
        >
          {clientList.map(({name, code})=><MenuItem value={code}>{name}</MenuItem>)}
        </Select>
        <br/>
        <br/>
        

        Program Duration:  <TextField
        required
          variant="standard"
          name='duration'
          InputProps={{
            inputProps: { min: 1 }
          }}
          type='number'
          onChange={({target:{value}})=>{
            setProgramData(prevState => ({
              ...prevState,
              duration:value
           }));
          }}
        />
      Country:
      <Select
      required
          size='small'
          style={{minWidth:'150px', minHeight:'10px'}}
          onChange={({target:{value}})=>{
            setProgramData(prevState => ({
              ...prevState,
              country:value
           }));
          }}
         
        >
          {countryList.map(({name, code})=><MenuItem value={code}>{name}</MenuItem>)}
        </Select>
   
    <br/>

   
   <FormControl sx={{ m: 1, minWidth: 120 }} style={{ display:'flex', flexDirection:'row' }} error={selectedKYC.includes('false')}>
   Support KYC:
   {supportedKYCList.map((value)=><FormControlLabel control={<Checkbox onChange={handleKYCCheck} value={value} />} label={value} />)}
   {selectedKYC.includes('false')?<FormHelperText>This Field is mandatory</FormHelperText>:''}
   </FormControl>
        
        <br/>
        {(selectedKYC.length&&selectedKYC.includes('Min KYC'))?
           <FormControl sx={{ m: 1, minWidth: 120 }} style={{ display:'flex', flexDirection:'row' }} error={typeof minKYCType==='boolean'}>
            {minimumKYCOptions.map((value)=>
   <FormControlLabel control={<Checkbox checked={minKYCType===value} onChange={handleMinKYCType} value={value} />} label={value} />
            )}
   {typeof minKYCType==='boolean'?<FormHelperText>This Field is mandatory</FormHelperText>:''}

   </FormControl>
        :''}
        {(selectedKYC.length&&((selectedKYC.includes('Full KYC'))||selectedKYC.includes('Short Fall KYC')))?
           <FormControl sx={{ m: 1, minWidth: 120 }} style={{ display:'flex', flexDirection:'row' }}>
          Documents Supported :
         <Select
         required
         onChange={({target:{value}})=>{
          setProgramData(prevState => ({
            ...prevState,
            fullKYCReqDocs:value
         }));
         }}
        size='small'
        style={{minWidth:'150px', minHeight:'10px'}}
      >
        {fullKYCSupportedDocs.map((value)=><MenuItem value={value}>{value}</MenuItem>)}
      </Select>
   

      </FormControl>
        :''}
           <FormControl sx={{ m: 1, minWidth: 120 }} style={{ display:'flex', flexDirection:'row' }}>
Unique identifier :
         <Select
         required
        size='small'
        style={{minWidth:'150px', minHeight:'10px'}}
        onChange={(event)=>{
          setProgramData(prevState => ({
            ...prevState,
            uID:event.target.value
         }));
        }}
      >
        {uniqueidentifiers.map((value)=> <MenuItem value={value}>{value}</MenuItem>)}
      </Select>

      </FormControl>
      {uID==='Others'?
      <div>
        Define Others
<br/>
        ID Name:  <TextField
        required
          variant="standard"
          type='text'
          value={otherIdDetails.name}
          onChange={({target:{value}})=>{
            if(allLetter(value)){
            otherIdDetails.name=value
                setProgramData(prevState => ({
                  ...prevState,
                  otherIdDetails
               }));
              }
              }}
        />
        <br />

ID Type:  <TextField
          variant="standard"
          required
          value={otherIdDetails.type}
          type='text'
          onChange={({target:{value}})=>{
            if(alphaNumeric(value)){
            otherIdDetails.type=value
            otherIdDetails.length=value.length;
                setProgramData(prevState => ({
                  ...prevState,
                  otherIdDetails,
               }));
              }}
            }
        />
<br/>
ID Length:  <TextField
required
          variant="standard"
          InputProps={{
            inputProps: { min: 1 }
          }}
          type='number'
          value={otherIdDetails.length}
        />
      </div>

      :''}
        <br/>
      <Button
              type="submit"
              variant="contained"
            >
              Create Program
            </Button>
      
      </div>
      </Box>
  );
}




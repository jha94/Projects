import React, {useContext, useState} from 'react';
import {TextField, Button, Box, Select, MenuItem,FormControlLabel, Checkbox, FormHelperText, FormControl } from '@mui/material';
import { programDetailsContext, allLetter } from '../Utils'

export default function CreateProgram() {
  const [programDetails, setProgramDetails] = useContext(programDetailsContext);
  const { programList: createdProgram, index: createProgramIndex } =  programDetails;
  console.log('createProgramIndex', createProgramIndex);
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
      const { programName, selectedKYC, uID, duration, country } = programData;
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        otherIdDetails.name=!otherIdDetails.name?false:otherIdDetails.name
        otherIdDetails.type=!otherIdDetails.type?false:otherIdDetails.type
        otherIdDetails.length=!otherIdDetails.length?false:otherIdDetails.length
          setProgramData(prevState => ({
            ...prevState,
            programName:!programName?false:programName,
            client:!client? false:client,
            duration:!duration?false:duration,
            country:!country?false:country,
            selectedKYC: !selectedKYC.length?['false']:selectedKYC,
            fullKYCReqDocs: !fullKYCReqDocs?false:fullKYCReqDocs,
            uID: !uID?false:uID,
            otherIdDetails:otherIdDetails,
         }));
         console.log('index', index);
         index>-1?programList[index]=programData:programList.push(programData)
        
        setProgramDetails({
          // showProgramList:(programName && client && duration && country && selectedKYC && fullKYCReqDocs && uID && otherIdDetails),
          programList,
          showProgramList: true,
          index:-1
        })
      };
      const {programName , selectedKYC, uID, client, duration, country, minKYCType, fullKYCReqDocs, otherIdDetails} = programData
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
          minKYCType:value
       }));
      };
      const { programList, index } =  programDetails;
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <div style={{marginLeft:'50px'}} >
    
      <div>
      Program Name:  <TextField
          variant="standard"
          name='name'
          type='text'
          value={programName}
          onChange={({target:{value}})=>{
                setProgramData(prevState => ({
                  ...prevState,
                  programName:value
               }));
              }}
          error={programName===false}
          helperText={programName===false?'This field is mandatory':''}
        />
      </div>
      <br/>
        Program IFI:  <TextField
          variant="standard"
          contentEditable={false}
          value='Gem bank, India'
        />
      Client: 
      <FormControl sx={{ m: 1, minWidth: 120 }} error={client===false}>
      <Select
          size='small'
          style={{minWidth:'150px', minHeight:'10px'}}
          onChange={({target:{value}})=>{
            setProgramData(prevState => ({
              ...prevState,
              client:value
           }));
          }}
        >
          <MenuItem value={'gemini fin'}>Gemini Financial Pvt. Ltd.</MenuItem>
          <MenuItem value={'yes bank'}>Yes Bank</MenuItem>
          <MenuItem value={'HDFC'}>HDFC bank</MenuItem>
          
        </Select>
        {client===false?<FormHelperText>This Field is mandatory</FormHelperText>:''}
        </FormControl>
       
        <br/>
        <br/>
        

        Program Duration:  <TextField
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
          error={duration===false}
          helperText={duration===false?'This field is mandatory':''}
        />
      Country:
      <FormControl sx={{ m: 1, minWidth: 120 }} error={country===false}>
      <Select
          size='small'
          style={{minWidth:'150px', minHeight:'10px'}}
          onChange={({target:{value}})=>{
            setProgramData(prevState => ({
              ...prevState,
              country:value
           }));
          }}
          helperText={country===false?'This field is mandatory':''}
        >
          <MenuItem value={'+91'}>India</MenuItem>
          <MenuItem value={'+1'}>USA</MenuItem>
          <MenuItem value={'+33'}>France</MenuItem>
        </Select>
        {country===false?<FormHelperText>This Field is mandatory</FormHelperText>:''}
        </FormControl>
   
    <br/>

   
   <FormControl sx={{ m: 1, minWidth: 120 }} style={{ display:'flex', flexDirection:'row' }} error={selectedKYC.includes('false')}>
   Support KYC:
   <FormControlLabel control={<Checkbox onChange={handleKYCCheck} value="Full KYC" />} label="Full KYC" />
   <FormControlLabel control={<Checkbox onChange={handleKYCCheck} value="Min KYC" />} label="Min KYC" />
   <FormControlLabel control={<Checkbox onChange={handleKYCCheck} value="Short Fall KYC" />} label="Short Fall KYC" />
   {selectedKYC.includes('false')?<FormHelperText>This Field is mandatory</FormHelperText>:''}
   </FormControl>
        
        <br/>
        {(selectedKYC.length&&selectedKYC.includes('Min KYC'))?
           <FormControl sx={{ m: 1, minWidth: 120 }} style={{ display:'flex', flexDirection:'row' }} error={!minKYCType}>
   <FormControlLabel control={<Checkbox checked={minKYCType==='Cash Load'} onChange={handleMinKYCType} value="Cash Load" />} label="Cash Load" />
   <FormControlLabel control={<Checkbox checked={minKYCType==='No Cash Load'} onChange={handleMinKYCType} value="No Cash Load" />} label="No Cash Load" />
   <FormControlLabel control={<Checkbox checked={minKYCType==='Not Applicable'} onChange={handleMinKYCType} value="Not Applicable" />} label="Not Applicable" />
   {!minKYCType?<FormHelperText>This Field is mandatory</FormHelperText>:''}

   </FormControl>
        :''}
        {(selectedKYC.length&&((selectedKYC.includes('Full KYC'))||selectedKYC.includes('Short Fall KYC')))?
           <FormControl sx={{ m: 1, minWidth: 120 }} style={{ display:'flex', flexDirection:'row' }} error={!minKYCType}>
          Documents Supported :
         <Select
         onChange={({target:{value}})=>{
          setProgramData(prevState => ({
            ...prevState,
            fullKYCReqDocs:value
         }));
         }}
        error={selectedKYC.includes('Full KYC') && fullKYCReqDocs===false}
        size='small'
        style={{minWidth:'150px', minHeight:'10px'}}
      >
        <MenuItem value={'Aadhar Card'}>Aadhar Card</MenuItem>
        <MenuItem value={'Pan Card'}>Pan Card</MenuItem>
        <MenuItem value={'Voter ID'}>Voter ID</MenuItem>
      </Select>
   {selectedKYC.includes('Full KYC') && fullKYCReqDocs===false?<FormHelperText>This Field is mandatory</FormHelperText>:''}

      </FormControl>
        :''}
           <FormControl sx={{ m: 1, minWidth: 120 }} style={{ display:'flex', flexDirection:'row' }} error={uID===false}>
Unique identifier :
         <Select
        size='small'
        style={{minWidth:'150px', minHeight:'10px'}}
        onChange={(event)=>{
          setProgramData(prevState => ({
            ...prevState,
            uID:event.target.value
         }));
        }}
      >
        
        <MenuItem value={'Pan Card'}>Pan Card</MenuItem>
        <MenuItem value={'Mobile Number'}>Mobile Number</MenuItem>
        <MenuItem value={'Email ID'}>Email ID</MenuItem>
        <MenuItem value={'Others'}>Others</MenuItem>
      </Select>
   {uID===false?<FormHelperText>This Field is mandatory</FormHelperText>:''}

      </FormControl>
      {uID==='Others'?
      <div>
        Define Others
<br/>
        ID Name:  <TextField
          variant="standard"
          type='text'
          onChange={({target:{value}})=>{
            otherIdDetails.name=value
                setProgramData(prevState => ({
                  ...prevState,
                  otherIdDetails
               }));
              }}
              error={uID && otherIdDetails.name===false}
              helperText={uID && otherIdDetails.name===false?'This field is mandatory':''}
        />
        <br />

ID Type:  <TextField
          variant="standard"
          type='text'
          onChange={({target:{value}})=>{
            otherIdDetails.type=value
                setProgramData(prevState => ({
                  ...prevState,
                  otherIdDetails,
               }));
              }}
              error={uID && otherIdDetails.type===false}
              helperText={uID && otherIdDetails.type===false?'This field is mandatory':''}
        />
<br/>
ID Length:  <TextField
required
          variant="standard"
          type='text'
          onChange={({target:{value}})=>{
            otherIdDetails.length=value
                setProgramData(prevState => ({
                  ...prevState,
                  otherIdDetails,
               }));
              }}
          error={uID && otherIdDetails.length===false}
          helperText={uID && otherIdDetails.length===false?'This field is mandatory':''}
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




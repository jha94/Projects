import React, { useContext, useState } from "react";
import { TextField, Button, Box, Select, MenuItem, FormControlLabel, Checkbox, FormHelperText, FormControl, Grid,} from "@mui/material";
import {
  programDetailsContext,
  programCreationData,
  allLetter,
  alphaNumeric,
} from "../Utils";
import './CreateProgram.css'

export default function CreateProgram() {
  const [programDetails, setProgramDetails] = useContext(programDetailsContext);
  const { programList: createdProgram, index: createProgramIndex } = programDetails;
  const programToBeEdited = createdProgram.length &&
        createProgramIndex > -1 &&
        createdProgram[createProgramIndex]

  const [programData, setProgramData] = useState({
    programName: (programToBeEdited.programName) || '',
    client: (programToBeEdited.client) || '',
    duration: (programToBeEdited.duration) || '',
    country: (programToBeEdited.country) || '',
    selectedKYC: (programToBeEdited.selectedKYC) || [],
    minKYCType: (programToBeEdited.minKYCType) || '',
    fullKYCReqDocs: (programToBeEdited.fullKYCReqDocs) || '',
    uID: (programToBeEdited.uID) || '',
    otherIdDetails: {
      name: (programToBeEdited.otherIdDetails && programToBeEdited.otherIdDetails.name) || '',
      type: (programToBeEdited.otherIdDetails && programToBeEdited.otherIdDetails.type) || '',
      length: (programToBeEdited.otherIdDetails && programToBeEdited.otherIdDetails.length) || '',
    },
  });

  const handleSubmit = (event) => {
    const { programList, index } = programDetails;
    const { selectedKYC } = programData;
    event.preventDefault();
    setProgramData((prevState) => ({
      ...prevState,
      selectedKYC: !selectedKYC.length ? ["false"] : selectedKYC,
      minKYCType:
        selectedKYC.includes("Min KYC") && minKYCType === ""
          ? false
          : minKYCType,
    }));
    if (selectedKYC.length && !selectedKYC.includes("false")) {
      if (selectedKYC.includes("Min KYC")) {
        if (minKYCType) {
          index > -1
            ? (programList[index] = programData)
            : programList.push(programData);
          setProgramDetails({
            programList,
            showProgramList: true,
            index: -1,
          });
        }
      } else {
        index > -1
          ? (programList[index] = programData)
          : programList.push(programData);
        setProgramDetails({
          programList,
          showProgramList: true,
          index: -1,
        });
      }
    }
  };

  const { programName, selectedKYC, uID, minKYCType, otherIdDetails, fullKYCReqDocs, country, client, duration } = programData;

  const handleKYCCheck = (event) => {
    var selectedKYC = [...programData.selectedKYC];
    if (event.target.checked) {
      selectedKYC = [...programData.selectedKYC, event.target.value];
    } else {
      selectedKYC.splice(
        programData.selectedKYC.indexOf(event.target.value),
        1
      );
    }
    if (selectedKYC.includes("false")) {
      selectedKYC.splice(0, 1);
    }
    setProgramData((prevState) => ({
      ...prevState,
      selectedKYC: selectedKYC,
      fullKYCReqDocs:selectedKYC.includes("Full KYC")?fullKYCReqDocs:'',
      uID:selectedKYC.includes("Full KYC")?uID:'',
    }));
  };

  const handleMinKYCType = ({ target: { value } }) => {
    setProgramData((prevState) => ({
      ...prevState,
      minKYCType: minKYCType !== value ? value : "",
    }));
  };
  const {
    clientList,
    countryList,
    supportedKYCList,
    minimumKYCOptions,
    fullKYCSupportedDocs,
    uniqueidentifiers,
  } = programCreationData;

  const renderProgramSpecifications = () => {
    return (
      <>
        <Grid container my={2}>
          <Grid xs={2}>Program Name:</Grid>
          <Grid xs={9}>
            <TextField
              variant="standard"
              required
              fullWidth
              type="text"
              value={programName}
              onChange={({ target: { value } }) => {
                if (allLetter(value||programName)) {
                  setProgramData((prevState) => ({
                    ...prevState,
                    programName: value,
                  }));
                }
              }}
            />
          </Grid>
        </Grid>
        <Grid container my={2}>
          <Grid xs={2}>Program IFI:</Grid>
          <Grid xs={3}>
            <TextField
              variant="standard"
              contentEditable={false}
              value="Gem bank, India"
            />
          </Grid>
          <Grid xs={2}>Client:</Grid>
          <Grid xs={3}>
            <Select
              required
              readOnly={createProgramIndex>-1}
              size="small"
              value={client}
              defaultValue={client}
              className='Select'
              onChange={({ target: { value } }) => {
                setProgramData((prevState) => ({
                  ...prevState,
                  client: value,
                }));
              }}
            >
              {clientList.map(value => (
                <MenuItem value={value}>{value.name}</MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid container my={2}>
          <Grid xs={2}>Program Duration:</Grid>
          <Grid xs={3}>
            <TextField
              required
              variant="standard"
              name="duration"
              value={duration}
              InputProps={{
                inputProps: { min: 1 },
              }}
              type="number"
              onChange={({ target: { value } }) => {
                setProgramData((prevState) => ({
                  ...prevState,
                  duration: value,
                }));
              }}
            />
          </Grid>
          <Grid xs={2}>Country:</Grid>
          <Grid xs={3}>
            <Select
              required
              readOnly={createProgramIndex>-1}
              size="small"
              value={country}
              className='Select'
              onChange={({ target: { value } }) => {
                setProgramData((prevState) => ({
                  ...prevState,
                  country: value,
                }));
              }}
            >
              {countryList.map(value => (
                <MenuItem value={value}>{value.name}</MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </>
    );
  };

  const renderKYCDetails = () => {
    return (
      <>
        <Grid container my={2}>
          <Grid xs={2}>Support KYC:</Grid>
          {supportedKYCList.map((value) => (
            <Grid xs={3}>
              <FormControl
               className='FormControl'
                error={selectedKYC.includes("false")}
              >
                <FormControlLabel
                  control={<Checkbox onChange={handleKYCCheck} value={value} checked={selectedKYC.includes(value)}/>}
                  label={value}
                />
              </FormControl>
            </Grid>
          ))}
          {selectedKYC.includes("false") ? (
            <FormHelperText>This Field is mandatory</FormHelperText>
          ) : (
            ""
          )}
        </Grid>
        <Grid container my={2}>
          <Grid xs={5}>
            <Grid container>
              {selectedKYC.length &&
              (selectedKYC.includes("Full KYC")) ? (
                <>
                  <Grid xs={4}>Documents Supported :</Grid>
                  <Grid xs={6} ml={4}>
                    <Select
                      required
                      value={fullKYCReqDocs}
                      onChange={({ target: { value } }) => {
                        setProgramData((prevState) => ({
                          ...prevState,
                          fullKYCReqDocs: value,
                        }));
                      }}
                      size="small"
                      className="Select"
                    >
                      {fullKYCSupportedDocs.map((value) => (
                        <MenuItem value={value}>{value}</MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
          <Grid xs={7}>
            {selectedKYC.length && selectedKYC.includes("Min KYC") ? (
              <FormControl
              className='FormControl'
                error={typeof minKYCType === "boolean"}
              >
                {minimumKYCOptions.map((value) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={minKYCType === value}
                        onChange={handleMinKYCType}
                        value={value}
                      />
                    }
                    label={value}
                  />
                ))}
                {typeof minKYCType === "boolean" ? (
                  <FormHelperText>This Field is mandatory</FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </>
    );
  };

  const renderOtherUID = () => {
    return (
      <Grid container p={2}>
        <Grid xs={2}></Grid>
        <Grid xs={2} my={2}>Define Others</Grid>
        <Grid container>
          <Grid xs={2}></Grid>
          <Grid xs={1}>ID Name:</Grid>
          <Grid xs={2}>
            <TextField
              required
              
              variant="standard"
              type="text"
              value={otherIdDetails.name}
              onChange={({ target: { value } }) => {
                if (allLetter(value || otherIdDetails.name)) {
                  otherIdDetails.name = value;
                  setProgramData((prevState) => ({
                    ...prevState,
                    otherIdDetails,
                  }));
                }
              }}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={2}></Grid>
          <Grid xs={1}>ID Type:</Grid>
          <Grid xs={2}>
            <TextField
              variant="standard"
              required
              value={otherIdDetails.type}
              type="text"
              onChange={({ target: { value } }) => {
                if (alphaNumeric(value || otherIdDetails.type)) {
                  otherIdDetails.type = value;
                  otherIdDetails.length = value.length;
                  setProgramData((prevState) => ({
                    ...prevState,
                    otherIdDetails,
                  }));
                }
              }}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={2}></Grid>
          <Grid xs={1}>ID Length:</Grid>
          <Grid xs={2}>
            <TextField
              required
              variant="standard"
              InputProps={{
                readOnly:true,
                inputProps: { min: 1 },
              }}
              type="number"
              value={otherIdDetails.length}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Grid p={2} container>
        {renderProgramSpecifications()}
        {renderKYCDetails()}
       {fullKYCReqDocs? <Grid xs={2}>Unique identifier :</Grid>:''}
      {fullKYCReqDocs?<Grid xs={4}>
          <FormControl
            sx={{ minWidth: 120 }}
            className='FormControl'
          >
            <Select
              value={uID}
              required
              size="small"
              className="Select"
              onChange={(event) => {
                setProgramData((prevState) => ({
                  ...prevState,
                  uID: event.target.value,
                }));
              }}
            >
              {uniqueidentifiers.concat(fullKYCReqDocs).map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>:''}
        
      </Grid>
      {uID === "Others" ? renderOtherUID() : ""}
      <Grid container p={2} mt={2}>
      <Button type="submit" variant="contained">
        Create Program
      </Button>
      </Grid>
    </Box>
  );
}

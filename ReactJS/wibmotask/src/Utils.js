import { createContext, useState } from 'react';

//create a context, with createContext api
const programDetailsContext = createContext();

const ProgramDetailsProvider = (props) => {
        // this state will be shared with all components 
    const [programDetails, setProgramDetails] = useState({
        showProgramList:true,
    programList: [],
    index: -1,
    });

    return (
                // this is the provider providing state
        <programDetailsContext.Provider value={[programDetails, setProgramDetails]}>
            {props.children}
        </programDetailsContext.Provider>
    );
};

const validationData = Object.freeze({
    validPasswords: ['9080764512', 'SE2312'],
    UserIDWarningMsg:'Please enter user ID',
    wrongPasswordWarningMsg: 'Please enter valid password',
})

const programCreationData = Object.freeze({
  clientList: [
    {name:'Gemini Financial Pvt. Ltd.', code:'gemini fin'},
    {name:'Yes Bank', code:'yes bank'},
    {name:'HDFC Bank', code:'HDFC'},
  ],
  countryList: [
    {name:'India', code:'+91'},
    {name:'USA', code:'+1'},
    {name:'France', code:'+33'}
  ],
  supportedKYCList: ['Full KYC', 'Min KYC','Short Fall KYC'],
  minimumKYCOptions:[ 'Cash Load', 'No Cash Load', 'Not Applicable'],
  fullKYCSupportedDocs: [ 'Aadhar Card', 'Pan Card', 'Voter ID'],
  uniqueidentifiers: ['Mobile Number', 'Email ID', 'Others']
})

const alphaNumeric = (value)=> {
  const alphaNumeric = /^[0-9a-zA-Z]+$/;
    if (value.match(alphaNumeric)) {
      return true;
    } else{
    alert("Oops!! Please don't enter special characters.");
     return false;
    }
};

function allLetter(inputtext)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtext.match(letters))
     {
      return true;
     }
   else
     {
     alert("Oops!! Please enter only alphabets.");
     return false;
     }
  }
  

export { programDetailsContext, ProgramDetailsProvider, validationData, allLetter, programCreationData, alphaNumeric }


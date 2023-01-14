import { createContext, useState } from 'react';

//create a context, with createContext api
const programDetailsContext = createContext();

const ProgramDetailsProvider = (props) => {
        // this state will be shared with all components 
    const [programDetails, setProgramDetails] = useState({
        showProgramList:true,
    programList: []
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

function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }
  

export { programDetailsContext, ProgramDetailsProvider, validationData, allLetter }


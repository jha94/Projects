import React, { useState } from 'react';
import './Styles/App.css'
import UseEffect from "./Components/UseEffect"
import Person from './Components/Person';
function App() {
  const [name, setName] = useState('Anil')
  const [namefromAPI, setNamefromAPI] = useState('')
  UseEffect('https://randomuser.me/api/', setNamefromAPI)
  return (
    <div className='App'>
    <h1>#1 bullshit guy {name}</h1>
    <button onClick={()=>{
      if(name==='Anil'){
        setName('Harkaran')
      } else{
        setName('Anil')
      }
    }}>Chnage bullshit guy</button>
    <h2>{namefromAPI}</h2>
    <Person/>
    </div>
  );
}
export default App;

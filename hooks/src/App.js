import React, {useState} from 'react';
import './App.css'
function App() {
  const [name, setName] = useState('Anil')
  return (
    <div className='App'>
    <h1>#1 Bullshit guy - {name}</h1>
    <button onClick={()=>
      setName(name==='Anil'?'Harkaran':'Anil')
    }>Change bullshit guy</button>
    </div>
  );
}

export default App;

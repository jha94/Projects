import React, {useState} from 'react';
import './App.css'
import useFetch from './useFetch';
function App() {
  const [name, setName] = useState('Anil')
 const name2 = useFetch('https://randomuser.me/api/');
  return (
    <div className='App'>
    <h1>#1 Bullshit guy - {name}</h1>
    <button onClick={()=>
      setName(name==='Anil'?'Harkaran':'Anil')
    }>Change bullshit guy</button>
    <p>{name2 && name2.first}</p>
    <p>{name2 && name2.last}</p>
    </div>
  );
}
export default App;

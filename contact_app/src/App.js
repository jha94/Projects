import React, {useState} from 'react';
import './Styles/App.css'
function App() {
const [name, setname] = useState('')
const [nameList, setNameList] = useState([])
const [editIndex, setEditIndex] = useState(-1);
  return (
    <div className='App'>
    <h1>Contact Manager</h1>
    <input
    value={name}
    placeholder='Name'
    onChange={({target:{value}})=>{
      setname(value)
    }}
    ></input>
    <button
    className='Button'
    onClick={()=>{
      setNameList(nameList => [...nameList, name])
      setname('')
    }}
    >Add</button>
    {nameList && nameList.length?nameList.map((val, index)=>{
     return(
      <div>
        {
          editIndex===index?<input
          value={name}
          onChange={({target:{value}})=>{
            setname(value)
          }}
          />:<p>{val}</p>
        }
     
     {editIndex!==index?
     <div>
      <button onClick={()=>{
      setNameList(nameList=>nameList.splice(nameList.indexOf(val), 1))
     }}>Delete</button>
     <button onClick={()=>{
      setEditIndex(index)
     }}>Edit</button>
     </div>:
     <button onClick={({target:{value}})=>{
      setNameList(nameList[index]=name)
      setEditIndex()
     }} >Save</button>
     }
     
     </div>
     )
    }):''}
    </div>
  );
}

export default App;

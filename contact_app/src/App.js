import React, {useState} from 'react';
import './Styles/App.css'
function App() {
const [name, setname] = useState('')
const [nameList, setNameList] = useState([])
const [editIndex, setEditIndex] = useState(-1);
const [changedName, setChangedName] = useState('');

const renderAddButton = () =>{
  return(
    <button
    className='Button'
    onClick={()=>{
      setNameList(nameList => [...nameList, name])
      setname('')
    }}
    >Add</button>
  )
}

const renderDeleteButton = (val) =>{
  return(
    <button
          className='Button'
          onClick={()=>{
      setNameList(nameList=>nameList.splice(nameList.indexOf(val), 1))
     }}>
      Delete
      </button>
  )
}

const renderSaveButton = (index) =>{
  return(
    <button
          className='Button'
          onClick={()=>{
            setNameList(nameList=>nameList, nameList.splice(index, 1, changedName))
            setEditIndex(-1)
          }}
          >Save</button>
  )
}

const renderEditButton = (val, index) =>{
  return(
    <button
     className='Button'
     onClick={()=>{
      setChangedName(val)
      setEditIndex(index)
     }}>Edit</button>
  )

}


  return (
    <div className='App'>
    <h1>Contact Manager</h1>
    <input
    className='Input'
    value={name}
    placeholder='Add your contact'
    onChange={({target:{value}})=>{
      setname(value)
    }}
    ></input>
  {renderAddButton()}
    {nameList && nameList.length?nameList.map((val, index)=>{
     return(
      <div>
        {
          editIndex===index?
          <div>
          <input
          className='Input'
          value={changedName}
          onChange={({target:{value}})=>{
            setChangedName(value)
          }}
          />
          {renderSaveButton(index)}
          </div>
          :
          <div>
          <p className='AddedContact'>{val}</p>
          {renderDeleteButton(val )}
     {renderEditButton(val, index)}
          </div>
        }
     </div>
     )
    }):''}
    </div>
  );
}

export default App;

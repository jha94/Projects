
import './App.css';
import {useState} from 'react'
function App() {
  const [toDos, setToDo] = useState([])
  const [current, setCurrent] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <h2>ToDO List</h2>
        <div>
        <input
        value={current}
        onChange={({target:{value}})=>{
          setCurrent(value)
        }}>
        </input>
        <button
        onClick={()=>{
          toDos.push(current)
          setToDo([...toDos])
          setCurrent('')
        }}
        disabled={!current}
        >Save</button>
        </div>
        {toDos.length ? toDos.map((value)=>{
          return(
            <div id='AddedToDo' >
            <p>{value}</p>
            <button onClick={()=>{
              const res = toDos.filter(val=>val!==value)
              setToDo([...res])
            }}>Delete</button>
            <button onClick={()=>{
              setCurrent(value)
              const res = toDos.filter(val=>val!==value)
              setToDo([...res])
            }} >Edit</button>
            </div>
          )
        }):''}
      </header>
    </div>
  );
}

export default App;

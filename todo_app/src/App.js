import { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import firebase from "firebase";
import './App.css';
import Todo from "./ToDo"
import {db} from "./firbase"


function App() {
  const [todos,setTodos] = useState([]);
  const [input, setInput] = useState('');

  // listen to DB, when app loads fetch new todos
  useEffect(()=>{
    //this code fires when app loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    })
  }, [])

  const addTodo = (event)=>{
    event.preventDefault();     // will stop refresh
    // setTodos([...todos, input])   //push into list
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');   //clear text input field after submit
  }
  return (
    <div className="App">
     <h1>Prashant's ToDo</h1>
     <form>
     
     <FormControl>
       <InputLabel>Write a todo</InputLabel>
       <Input
        value={input}
        onChange={(event)=>
          setInput(event.target.value)
        }
       ></Input>
     </FormControl>
     <Button
     type="submit"
     variant="contained"
     color="primary"
     disabled={!input}
     onClick = {addTodo}
     style={{
       marginTop:'15px',
       marginLeft:'10px',
     }}
     >
  Add ToDo
</Button>
     </form>
     <ul>
       {todos.map(todo=>
         <Todo text={todo}/>
       )}
       </ul>
    </div>
  );
}

export default App;

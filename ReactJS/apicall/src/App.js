import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState();

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/`+ new URLSearchParams({
      
    })).then(value=>value.json()).then(value=>{
      setPosts(value)
    })
  }, [])

  return (
    <div className="App">
      <input type='text' value={id} onChange={(e)=>setPosts(posts.filter(value=>value.title.includes(e.target.value)))} ></input>
      {posts.length ? posts.map(({title})=>
        <p>{title}</p>
      ):<p>{posts.title}</p>}
     
    </div>
  );
}

export default App;

import {useEffect, useState} from 'react';
function App() {
  const [posts, setPosts] = useState([]);

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts').then(value=>value.json()).then(value=>{
    setPosts(value)
  })
})


  return(
    <div>
      <input onChange={(event)=>{
        setPosts(posts.filter((value)=>value.title.includes(event.target.value)))
      }}></input>
    {posts.length && posts.map(({title})=><p>{title}</p>)}
    </div>

  )

}
export default App;

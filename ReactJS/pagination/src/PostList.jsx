import React, {useEffect, useState} from "react";
import { debounce } from "./utils";
const Posts = () =>{
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPage] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(value=>{
            setPosts(value);
            for(let i=1;i<=value.length/10;i++){
                setTotalPage([...totalPages, totalPages.push(i)])
            }
        })
    }, [])
    return(<>
        {posts.length?posts.slice(page-1, page+9).map(({title})=><h3 style={{color:'black'}} key={title}>{title}<br/></h3>):'loading'}
        <div>{totalPages.map(value=><button onClick={()=> setPage(value)}>{value}</button>)}</div>
        </>
    )
}

export default Posts
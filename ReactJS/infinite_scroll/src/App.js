import {useState, useEffect, useRef, useCallback} from 'react';
import fetchData from './FetchData';
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchresults] = useState([]);
  const pageNumber = useRef(1)
  const observer = useRef(null);
  const lastElementObserver = useCallback(node=>{
    if(isLoading) return
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){
        pageNumber.current+=1
        setIsLoading(true)
        fetchData(searchTerm, pageNumber, setIsLoading, setSearchresults)
      }
    })
    if(node) observer.current.observe(node)
  })

  useEffect(()=>{
    fetchData(searchTerm, pageNumber, setIsLoading, setSearchresults)
  }, [searchTerm])
  return(
    <div>
    <input onChange={(event)=>{
      setIsLoading(true)
      setSearchTerm(event.target.value)
    }}></input>
    {searchResults.length ? searchResults.map(({title}, index)=>
      <div ref={index===searchResults.length-1?lastElementObserver:null}>{title}</div>
    ):''}
    <p>{isLoading?'loading...':''}</p>
    </div>
  )
}
export default App;

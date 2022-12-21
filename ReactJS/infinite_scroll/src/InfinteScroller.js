import { useEffect } from "react"
export default function InfinteScroller(URL, searchTerm, pageNumber, setIsLoading, setSearchresults) {
    console.log('calling API', pageNumber)
    useEffect(()=>{
        fetch(`${URL}`+new URLSearchParams({
            q:searchTerm,
            page:pageNumber.current,
        })).then(value=>value.json()).then(val=>{
            setIsLoading(false)
            setSearchresults(val.docs)
          })
    }, [searchTerm])
}

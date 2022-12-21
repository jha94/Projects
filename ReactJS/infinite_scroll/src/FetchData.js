
export default function fetchData(searchTerm, pageNumber, setIsLoading, setSearchresults){
    fetch(`https://openlibrary.org/search.json?`+new URLSearchParams({
      q:searchTerm,
      page:pageNumber.current,
    })).then(value=>value.json()).then(val=>{
      setIsLoading(false)
      setSearchresults(val.docs)
    })
  }

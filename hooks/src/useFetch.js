import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const [name, setName] = useState()
   useEffect(()=>{
        fetch(url).then(value=>value.json()).then(value => {
            setName(value.results[0].name)
        })
    }, [])
    return name;
}

export default useFetch;
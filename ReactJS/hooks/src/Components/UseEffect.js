import { useEffect } from "react";
export default function UseEffect(API, result){
    useEffect(()=>{
        fetch(API).then(value=>value.json()).then((value)=>{
          if(value && value.results && value.results.length && value.results[0].name){
            result(value.results[0].name.first+' '+value.results[0].name.last)
          }
        })
      }, [])
      return result
}
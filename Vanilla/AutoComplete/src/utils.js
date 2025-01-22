import { FRUITS } from "./data.js";

export const getSuggestions = async(keyword)=>{
    const result = FRUITS.filter(i=>i.substr(0, keyword.length).toLowerCase()===keyword.toLowerCase())
    return new Promise((res)=>{
        setTimeout(()=>{
            res(result)
        }, 1000)
    })
}

export const debounce = (fn, delay=500) =>{
    let timerCtx;
    return function(){
        const self = this;
        const args = arguments;
        clearTimeout(timerCtx)
        timerCtx = setTimeout(()=>{
            console.log('hello')
            fn.apply(self, args)
        }, delay)
    }
}
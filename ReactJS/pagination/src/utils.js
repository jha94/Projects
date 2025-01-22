export const debounce = (fn, delay=500) =>{
    let timerCtx;
    return function(){
        const self = this;
        const args = arguments;
        clearTimeout(timerCtx)
        timerCtx = setTimeout(()=>{
            fn.apply(self, args)
        }, delay)
    }
}
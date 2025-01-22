import React, {useState, useEffect, useRef} from 'react'

function Learn() {
  const [open, setOpen] = useState(false);

  const useClickOutside = (callback) => {
    const domRef = useRef();
    useEffect(()=>{
      const handler = (event)=>{
        if(domRef?.current?.contains(event.target)){
          callback()
        }
      }
      document.addEventListener('click', handler);
      return () => document.removeEventListener('click', handler)
    })
    return domRef;
  }



  const domRef = useClickOutside(()=>setOpen(!open));
  return(
    <div>
    <button onClick={()=>setOpen(!open)} >{open?'Close Modal':'Open Modal'}</button>
    {open&&<div ref={domRef}>I am Model</div>}
    </div>
  )
}

export default Learn

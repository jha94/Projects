import React, {useState} from 'react'

const CommentForm=({setComment})=> {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false)

  const addComment = ()=>{
    setComment((prev)=>[...prev, {id:Date.now(), text:text}])
    setText('')
  }

  return (
    <div>
      <h2>Comment Form</h2>
      <input
      placeholder='write your comment'
      value={text}
      onChange={(e)=>
        setText(e.target.value)
      }
      />
      <input
      type='checkbox'
      id='checkbox'
      defaultChecked={checked}
      onChange={()=>setChecked(!checked)}
      />
      <label htmlFor='checkbox'>I agree with terms and conditions</label>
      <button
      disabled={!checked||!text}
      onClick={addComment}
      >Comment</button>
      
    </div>
  )
}

export default CommentForm
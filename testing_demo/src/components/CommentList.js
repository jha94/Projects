import React from 'react'

const CommentList = ({allComments}) => {
    if(!allComments.length){
        return <h2>No Comments available</h2>
    }
  return (
    <div>
        <ul>{
            allComments.map((value)=>{
                return <li key = {value.id}>{value.text}</li>
            })
            }</ul>
    </div>
  )
}

export default CommentList
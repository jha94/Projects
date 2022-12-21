import React from 'react'
import { StoryTile } from './StoryTile'

export const Main = ({totalStories}) => {
  
    let total = []
    totalStories.forEach(value=> total.push(...Object.values(...Object.values(value))))
    totalStories.forEach((value, index)=>total[index]['path']=Object.keys(value)[0])
  return (
    <div style={{ display:'grid', gridTemplateColumns:'auto auto auto', padding:'10px' }}>
        {total.length && total.map(value=>{
            return (
              
                <StoryTile title={value.title} image={value.image} path={value.path}/>
                
            )
        })}
    </div>
  )
}

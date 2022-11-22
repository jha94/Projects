import React from 'react'
import { StoryTile } from './StoryTile'

export const Main = ({totalStories}) => {
    let total = []
    totalStories.forEach(value=> total.push(...Object.values(...Object.values(value))) )
  return (
    <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
        {total.length && total.map(value=>{
            return (
                <StoryTile title={value.title} image={value.image}/>
            )
        })}
    </div>
  )
}

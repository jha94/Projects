import React from 'react'
import { StoryTile } from './StoryTile'

export const Main = ({totalStories}) => {
    let total = []
    totalStories.forEach(value=> total.push(...Object.values(...Object.values(value))) )
  return (
    <div style={{ display:'grid', gridTemplateColumns:'auto auto auto', padding:'10px' }}>
        {total.length && total.map(value=>{
            return (
              <div>
                <StoryTile title={value.title} image={value.image}/>
                </div>
            )
        })}
    </div>
  )
}

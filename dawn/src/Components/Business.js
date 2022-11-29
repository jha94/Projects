import React from 'react'
import { StoryTile } from './StoryTile'
export const Business = ({businessStories=[]}) => {
  let total = []
  businessStories.length && businessStories.forEach(value=> total.push(...Object.values(value)))
  return (
    <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
        {total.length && total.map(value=>{
          console.log('value', value);
            return (
                <StoryTile title={value.title} image={value.image} story={value.story}/>
            )
        })}
    </div>
  )
}

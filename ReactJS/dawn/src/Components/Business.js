import React from 'react'
import { StoryTile } from './StoryTile';
import {getCatWiseData} from './utils'
export const Business = ({businessStories=[]}) => {
  let total = getCatWiseData(businessStories)
  return (
    <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
        {total.length && total.map(value=>{
            return (
                <StoryTile title={value.title} image={value.image} story={value.story}/>
            )
        })}
    </div>
  )
}

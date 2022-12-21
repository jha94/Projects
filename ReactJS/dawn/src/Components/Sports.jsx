import React from 'react'
import { StoryTile } from './StoryTile';
import {getCatWiseData} from './utils'
export const Sports = ({sportsStories}) => {
  let total = getCatWiseData(sportsStories)
  return (
    <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
        {total.length && total.map(value=>
                <StoryTile title={value.title} image={value.image} story={value.story}/>
            )}
    </div>
  )
}

import React from 'react'
import { StoryTile } from './StoryTile';
import {getCatWiseData} from './utils'
export const ScienecTech = ({scienceStories}) => {
  let total = getCatWiseData(scienceStories)
  return (
    <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
        {total.length && total.map(value=>
                <StoryTile title={value.title} image={value.image} story={value.story}/>
            )}
    </div>
  )
}

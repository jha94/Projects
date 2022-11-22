import React from 'react'
import {useLocation} from 'react-router-dom';
export const MainStory = () => {
  const { state: {title, image, story}={} } = useLocation();
  return (
    <div style={{color:'black'}}>{story}</div>
  )
}

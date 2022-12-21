import React from 'react'
import {useLocation} from 'react-router-dom';
export const MainStory = () => {
  const { state: {title, image, story}={} } = useLocation();
  console.log('story', story);
  return (
    <div style={{
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      alignSelf:"flex-start",
      justifySelf:"flex-start",
      flexDirection:"column",
      // marginLeft:'-5%',
      marginTop:'20px',
      // backgroundColor:'#000',
      maxWidth:'70%',
      minWidth:'95%'
      }}>
    <div
    style={{
      // backgroundColor:'#ff884d',
      color:'#4d1a00',
      height:'30px',
      width:'100%',
      justifyContent:'start',
      alignItems:"start",
      display:'flex',
      // borderRadius:'20px',
      // margin:'50px',
      fontSize:'30px',
      fontWeight:'bold',
      borderWidth:'0px',
      alignSelf:'flex-start'
      // backgroundImage: `url(${image})`,
      // backgroundRepeat:'no-repeat',
      // backgroundSize:'cover',
    }}
    >{title}</div>
    <div style={{color:'#000', fontSize:'18px', fontWeight:'normal' }}>{story}</div>
    </div>
    
  )
}

import React from 'react'

export const CategoryTile = ({title, image}) => {
  return (
    <button style={{backgroundColor:'#ff884d', color:'#e64d00',height:'200px', width:'300px', justifyContent:'center', alignItems:"center", display:'flex', borderRadius:'20px', margin:'20px', fontSize:'30px', fontWeight:'bold', borderWidth:'0px', backgroundImage: `url(${image})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>{title}</button>
  )
}

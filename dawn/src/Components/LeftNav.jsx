import React from 'react'
import {
  Link,
} from "react-router-dom";
export const LeftNav = ({categoryList=[]}) => {
  const getHeader = () =>{
    return (
    <Link to={'/'}>
    <p style={{ fontWeight:'bold', fontSize:'30px', marginTop:'-3px', color:'#fff' }}>DAWN</p>
    </Link>
    )
  }

  const getLeftNavCategory = () =>{
    return categoryList.length? categoryList.map(value=>{
      return(
        <Link to={Object.keys(value)[0]}>
        <p style={{color:'#fff'}}>{Object.keys(value)[0]}</p>
        </Link>
      )
    }):''
  }

  return(
    <div style={{ backgroundColor:'red', height:'70vh', backgroundColor:'#e67300', borderTopRightRadius:'10px', borderBottomRightRadius:'10px', paddingTop:'50px', minWidth:'300px', paddingLeft:'10px' }}>
      {getHeader()}
      {getLeftNavCategory()}
    </div>
  )



}



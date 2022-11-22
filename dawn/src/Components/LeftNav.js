import React from 'react'
import {
  Link,
} from "react-router-dom";
export const LeftNav = ({categoryList=[]}) => {
  const getHeader = () =>{
    return <p style={{ fontWeight:'bold', fontSize:'30px', marginTop:'-3px', color:'#fff' }}>DAWN</p>
  }

  const getLeftNavCategory = () =>{
    return categoryList.length && categoryList.map(value=>{
      return(
        <Link to={Object.keys(value)[0]}>
        <p style={{color:'#fff'}}>{Object.keys(value)[0]}</p>
        </Link>
      )
    })
  }

  return(
    <div style={{backgroundColor:'#e67300', minHeight:'90vh', paddingTop:'70px', minWidth:'200px', marginLeft:'-00px' }}>
      {getHeader()}
      {getLeftNavCategory()}
    </div>
  )



}



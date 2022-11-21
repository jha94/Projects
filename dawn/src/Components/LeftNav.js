import React from 'react'

export const LeftNav = ({categoryList=[]}) => {
  const getHeader = () =>{
    return <p style={{ fontWeight:'bold', fontSize:'30px', marginTop:'-3px', color:'#fff' }}>DAWN</p>
  }

  const getLeftNavCategory = () =>{
    return categoryList.length && categoryList.map(value=>{
      return(
       <p style={{color:'#fff'}}>{Object.keys(value)[0]}</p>
      )
    })
  }

  return(
    <div style={{backgroundColor:'#e67300', minHeight:'90vh', paddingTop:'70px', minWidth:'200px', alignSelf:"flex-start" }}>
      {getHeader()}
      {getLeftNavCategory()}
    </div>
  )



}



import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div style={{width:'100%', height:'50px', backgroundColor:'#000', display:'flex',justifyContent:"space-around", alignItems:'center'}}>
        <Link to='/' style={{color:'white'}} >Home</Link>
        <Link to='/cart' style={{color:'white'}} >cart</Link>
    </div>
  )
}

export default Header
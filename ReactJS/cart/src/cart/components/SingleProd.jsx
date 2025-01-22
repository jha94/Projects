import React, {useContext} from 'react'
import { Contextvalue } from '../../utils.js/Context'
const SingleProd = ({product}) => {
    const {cart, setCart} = useContext(Contextvalue);
  return (
    <div style={{height:"15rem", width:'20%', paddingBottom:'10px', marginBottom:'10px',marginLeft:'20px', border:'solid grey 1px'}}>
        <img src={product.image} alt="" style={{height:'60%', width:'100%'}} />
        <p style={{color:'black'}}>
            {product.price}<br/>
            {product.name}
        </p>
        <button style={{width:'80%', marginBottom:'10px'}} onClick={()=>{
            if(cart.includes(product)){
                setCart(cart.filter(value=>value!==product))
            } else{
                setCart([...cart, product])
            }
        }} >{cart.includes(product)?'Remove from cart':'Add to Cart'}</button>
    </div>
  )
}

export default SingleProd
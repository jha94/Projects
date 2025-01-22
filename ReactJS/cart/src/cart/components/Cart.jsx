import React, {useContext, lazy, Suspense} from 'react'
import { Contextvalue } from '../../utils.js/Context'

const Cart = () => {
    const {cart} = useContext(Contextvalue);
    const SingleProd = lazy(()=>import('./SingleProd'));
  return (
    <div style={{display:'flex', flexWrap:'wrap', margin:'15px', justifyContent:'center', alignItems:'center', flexDirection:'column'}} >
        <Suspense fallback={<p>loading...</p>} >
        <p>Total Price : {cart.reduce((a,b)=>{
        a = a+Number(b.price);
        return a;
    }, 0)}</p>
     {cart.length?cart.map((prod)=><SingleProd product={prod}/>):'Nothing in Cart😔'}
        </Suspense>
    </div>
  )
}

export default Cart
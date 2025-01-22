import React, {useState, useEffect, lazy, Suspense} from 'react'
import { faker } from '@faker-js/faker';

faker.seed(100);
const Home = () => {
    const [products, setProducts] = useState([]);
    const SingleProd = lazy(()=>import('./SingleProd'));
    useEffect(()=>{
        for(let index=0;index<10;index++){
            setProducts([...products, products.push({
                id:faker.datatype.uuid(),
                name:faker.commerce.productName(),
                price: faker.commerce.price(),
                image: faker.image.imageUrl(),
            })])
        }
    }, [])
   
  return (
    <div style={{display:'flex', flexWrap:'wrap', margin:'15px'}} >
        <Suspense fallback={<p>loading...</p>} >
        {products.length?products.map((prod)=><SingleProd product={prod}/>):''}
        </Suspense>
    </div>
  )
}

export default Home
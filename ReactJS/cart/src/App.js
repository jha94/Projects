import React, {useState, useEffect} from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const debounce = (callBack, delay) =>{
  let timer;
  return (...args) =>{
    clearTimeout(timer);
   return timer = setTimeout(()=> callBack(...args), delay )
  }
}

function App() {
  // const Header = lazy(()=>import('./cart/components/Header'));
  // const Home = lazy(()=>import('./cart/components/Home'));
  // const Cart = lazy(()=>import('./cart/components/Cart'));
  const [query, setQuery] = useState('');

  const print = () =>{
    console.log('print hello');
  }

  return (
    <div className="App">
      <input onChange={({target:{value}})=>{
        setQuery(value);
        debounce(print, 3000)()
      }} /><br/>
      Nams is {query}
      {/* <BrowserRouter>
      <Suspense fallback={<p>loading...</p>}>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/cart' exact element={<Cart/>} />
      </Routes>
      </Suspense>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

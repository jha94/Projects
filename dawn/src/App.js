import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import {db} from './firebase'
import './App.css';
import { collection , getDocs } from 'firebase/firestore';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { LeftNav } from './Components/LeftNav';
import { Business } from './Components/Business';
import { FromOurDayToDayLife } from './Components/FromOurDayToDayLife';
import { ScienecTech } from './Components/Scienec&Tech'
import {Sports} from './Components/Sports';

function App() {

  const [categoryList, setCategoryList] = useState([])
  const [loading,setLoading] = useState(false);
  
  useEffect(()=>{
    const categories = []
    setLoading(true)
    getDocs(collection(db, "/thrive")).then(value=>{
      value.forEach(item=>{
        categories.push({
          [item.id]:item.data()
        });
          setCategoryList(categories)
      }
        )
    })
    setLoading(false)
  }, [])

  return (
    <div class="parent">
  <div class="child"><Header/></div>
  <div class="main">
    <div class="child"><LeftNav categoryList={categoryList}/></div>
    <div class="child content">
         <Routes>
           <Route path="/Business" element={<Business/>}/>
           <Route path="/From our day to day life" element={<FromOurDayToDayLife/>} />
           <Route path="/Science & Tech" element={<ScienecTech/>}/>
           <Route path="/Sports" element={<Sports/>}/>
        </Routes>
      </div>  
  </div>
  <div class="child"><Footer/></div>
</div>
  );
  
}

export default App;

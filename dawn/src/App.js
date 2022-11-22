import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
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
import {Main} from './Components/Main';
import {MainStory} from './Components/MainStory';

function App() {

  const [categoryList, setCategoryList] = useState([])
  
  useEffect(()=>{
    const categories = []
    
    getDocs(collection(db, "/thrive")).then(value=>{
      value.forEach(item=>{
        categories.push({
          [item.id]:item.data()
        });
          setCategoryList(categories)
      }
        )
    })
    
  }, [])
  return (
    <div class="parent">
  <div class="child"><Header/></div>
  <div class="main">
    <div class="child"><LeftNav categoryList={categoryList}/></div>
    <div class="child content">
         <Routes>
         <Route path="/" element={<Main totalStories = {categoryList}/>}/>
         <Route path="/story" element={<MainStory />}/>
           <Route path="/Business" element={<Business businessStories = {categoryList &&categoryList.length && Object.values(categoryList[0])}/>}/>
           <Route path="/From our day to day life" element={<FromOurDayToDayLife dailyStories={categoryList[1]}/>} />
           <Route path="/Science & Tech" element={<ScienecTech scienceStories={categoryList[2]}/>}/>
           <Route path="/Sports" element={<Sports sportsStories={categoryList[3]}/>}/>
        </Routes>
      </div>  
  </div>
  <div class="child"><Footer/></div>
</div>
  );
  
}

export default App;

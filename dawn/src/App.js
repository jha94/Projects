import { useEffect, useState } from 'react';
import {db} from './firebase'
import './App.css';
import { collection , getDocs } from 'firebase/firestore';
import { CategoryTile } from './Components/CategoryTile';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { LeftNav } from './Components/LeftNav';

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
    <div className="App">
    <LeftNav categoryList={categoryList}/>
    <Header/>
    <Footer/>
    </div>
  );
  
}

export default App;

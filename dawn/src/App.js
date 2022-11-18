import { useEffect, useState } from 'react';
import {db} from './firebase'
import './App.css';
import { collection , onSnapshot, FieldValue, Firestore, getDoc } from 'firebase/firestore';
import { CategoryTile } from './Components/CategoryTile';
function App() {
  const [categoryList, setCategoryList] = useState([])
  const categories = [];
  useEffect(() => {
   console.log()
    getDoc(collection(db, '/thrive'),(snapshot)=>{
      console.log('snapshot', snapshot);
    //  snapshot.docs.forEach(doc => categories.push(doc.id))
    })
    console.log('categories', categories)
    setCategoryList(categories)
    }, []);
    console.log('categoryList======', categoryList);
  return (
    <div className="App">
     <p style={{ fontWeight:'bold', fontSize:'30px', marginTop:'-3px' }}>DAWN</p>
     <p style={{ fontSize:'20px', marginTop:'-30px' }}>Sun can never be shadowed by clouds</p>
     {categoryList.length ? categoryList.map((value)=>{
     return      <p style={{ fontWeight:'bold', fontSize:'30px', marginTop:'-3px' }}>DAWN</p>

     }):''}
    </div>
  );
}

export default App;

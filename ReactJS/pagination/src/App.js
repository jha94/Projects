
import React, {lazy, Suspense} from 'react';
import './App.css';
function App() {
  const Posts = lazy(()=>import('./PostList'));
  
  return (
    <div className="App">
      <Suspense fallback={<p>loading...</p>}>
        <Posts/>
      </Suspense>
    </div>
  );
}

export default App;

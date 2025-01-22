
import './App.css';
import {lazy, Suspense} from 'react';

function App() {
  const Tabs = lazy(()=>import('./components/Tabs'))
  return (
    <div>
      <Suspense fallback={<p>loading....</p>} >
      <Tabs/>
      </Suspense>
    </div>
  );
}

export default App;

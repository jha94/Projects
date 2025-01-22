import {lazy, Suspense} from 'react';
import Context from './components/store/Context';
function App() {
const First = lazy(()=>import('./components/First'))
  return (
    <Suspense fallback={<p>loading....</p>}>
      <Context.Provider value={"Jha"}>
      <First/>
      </Context.Provider>
      </Suspense>
  );
}

export default App;

import React, {lazy, Suspense, useState} from 'react';
import {ProgramDetailsProvider} from './Utils'
const SignIn = lazy(()=>import('./Containers/SignIn'));
const Home = lazy(()=>import('./Containers/Home'));

function App(){
  const [isLoggedIn, navigateToHomePage] = useState(true)
  
  return(
    <Suspense fallback={<p>loading..</p>}>
      <ProgramDetailsProvider>
      {isLoggedIn?<Home />:<SignIn navigateToHomePage = {navigateToHomePage}/>}
      </ProgramDetailsProvider>
    </Suspense>
  )
}
export default App;
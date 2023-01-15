import React, {lazy, Suspense, useContext} from 'react'
import { programDetailsContext } from '../Utils'
const Header = lazy(()=>import('../Components/Header'))
const Footer = lazy(()=>import('../Components/Footer'))
const ProgramList = lazy(()=>import('./ProgramList'))
const CreateProgram = lazy(()=>import('./CreateProgram'))



function Home(){
    const [programDetails] = useContext(programDetailsContext);
    const {showProgramList} = programDetails;
    return(
        <Suspense fallback={<p>loading...</p>}>
        <Header/>
        <div style={{minHeight:'80vh', display:'flex', flexDirection:'column'}}>
            {showProgramList?<ProgramList />:<CreateProgram/>}
        </div>
        <div style={{marginTop:'auto'}}>
            <Footer/>
        </div>
        </Suspense>
        )
}

export default Home;
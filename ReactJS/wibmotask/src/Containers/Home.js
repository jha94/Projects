import React, {lazy, Suspense, useContext} from 'react'
import { programDetailsContext } from '../Utils'
import './Home.css'
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
        <div className='Program'>
            {showProgramList?<ProgramList />:<CreateProgram/>}
        </div>
        <div className='Footer'>
            <Footer/>
        </div>
        </Suspense>
        )
}

export default Home;
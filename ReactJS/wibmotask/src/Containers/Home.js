import React, {lazy, Suspense, useContext} from 'react'
import { programDetailsContext } from '../Utils'
import '../App.css'
const Header = lazy(()=>import('../Components/Header'))
const Footer = lazy(()=>import('../Components/Footer'))
const ProgramList = lazy(()=>import('./ProgramList'))
const CreateProgram = lazy(()=>import('./CreateProgram'))



function Home(){
    const [programDetails] = useContext(programDetailsContext);
    const {showProgramList} = programDetails;
    console.log('programData', programDetails);
    return(
        <Suspense fallback={<p>Header loading...</p>}>
        <Header/>
        {showProgramList?<ProgramList />:<CreateProgram/>}
        <Footer/>
        </Suspense>
        )
}

export default Home;
import {lazy, Suspense} from 'react';
const First = () => {
    const Second = lazy(()=>import('./Learn'))
    return(
        <Suspense fallback={<p>loading....</p>}>
        Hi, I am first component
        <Second/>
        </Suspense>
    )
}
export default First
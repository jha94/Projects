import {lazy, Suspense} from 'react';
const Second = () => {
    const Third = lazy(()=>import('./Third'))
    return(
        <Suspense fallback={<p>loading....</p>}>
        Hi, I am Second component
        <Third/>
        </Suspense>
    )
}
export default Second
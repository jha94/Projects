import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Context from './utils.js/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = lazy(()=>import('./App'));

root.render(
  <React.StrictMode>
    <Context>
    <Suspense fallback={<p>loading...</p>}>
      <App/>
      </Suspense>
      </Context>
  </React.StrictMode>
);

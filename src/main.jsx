import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'
import Home from './components/pages/home/Home.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';






createRoot(document.getElementById('root')).render(
<Provider store={store}>
   <BrowserRouter>
     <Routes>
      <Route element={ <App/>}>
          <Route path='/' element={ <Home/> }/>
          <Route path='/product' element={ <div>Products Page</div> }/>
          <Route path='/cart' element={ <div>Cart Page</div> }/>
      </Route>
     </Routes>
 </BrowserRouter>
</Provider>
)

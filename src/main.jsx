import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'
import Home from './components/pages/home/Home.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import CartPage from './components/pages/carts/CartPage.jsx';






createRoot(document.getElementById('root')).render(
<Provider store={store}>
   <BrowserRouter>
     <Routes>
      <Route element={ <App/>}>
          <Route path='/' element={ <Home/> }/>
          <Route path='/product' element={ <div>Products Page</div> }/>
          <Route path='/cart' element={ <CartPage/> }/>
      </Route>
     </Routes>
 </BrowserRouter>
</Provider>
)

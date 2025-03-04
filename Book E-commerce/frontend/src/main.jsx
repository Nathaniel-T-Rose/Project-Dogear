import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import CartState from './pages/Cart/CartState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartState>
  ,
)

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoryContainer from './components/CategoryContainer';
import UserContainer from './components/UserContainer';
import ProductContainer from './components/ProductContainer';
import OrderContainer from './components/OrderContainer';
import BasketContainer from './components/BasketContainer';
import './App.css';

const App = () => {
  return (
      <Router>
        <div>
          <nav>
              <ul>
                  <li><Link to="/users">Users</Link></li>
                  <li><Link to="/products">Products</Link></li>
                  <li><Link to="/categories">Categories</Link></li>
                  <li><Link to="/orders">Orders</Link></li>
                  <li><Link to="/baskets">Basket</Link></li>
              </ul>
          </nav>
            <Routes>
                <Route path='/categories' element={<CategoryContainer/>}/>
                <Route path='/users' element={<UserContainer/>} />
                <Route path='/products' element={<ProductContainer/>} />
                <Route path='/orders' element={<OrderContainer/>} />
                <Route path='/baskets' element={<BasketContainer/>} />
            </Routes>
        </div>
      </Router>
  );
};

export default App;

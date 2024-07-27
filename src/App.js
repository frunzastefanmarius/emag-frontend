import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoryContainer from './components/CategoryContainer';
import UserContainer from './components/UserContainer';
import ProductContainer from './components/ProductContainer';
import OrderContainer from './components/OrderContainer';
import BasketContainer from './components/BasketContainer';
import './App.css';
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";
import AddCategory from "./components/AddCategory";
import UpdateCategory from "./components/UpdateCategory";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import AddOrder from "./components/AddOrder";
import UpdateOrder from "./components/UpdateOrder";
import AddBasket from "./components/AddBasket";
import UpdateBasket from "./components/UpdateBasket";
import Home from "./components/Home";

const App = () => {
  return (
      <Router>
        <div>
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/users">Users</Link></li>
                  <li><Link to="/products">Products</Link></li>
                  <li><Link to="/categories">Categories</Link></li>
                  <li><Link to="/orders">Orders</Link></li>
                  <li><Link to="/baskets">Basket</Link></li>
              </ul>
          </nav>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/categories' exact element={<CategoryContainer/>}/>
                <Route path='/categories/create' element={<AddCategory/>} />
                <Route path='/categories/update/:id' element={<UpdateCategory/>} />
                <Route path='/users' exact element={<UserContainer/>} />
                <Route path='/users/create' element={<AddUser/>} />
                <Route path='/users/update/:id' element={<UpdateUser/>} />
                <Route path='/orders' exact element={<OrderContainer/>} />
                <Route path='/orders/create' element={<AddOrder/>} />
                <Route path='/orders/update/:id' element={<UpdateOrder/>} />
                <Route path='/baskets' exact element={<BasketContainer/>} />
                <Route path='/baskets/create' element={<AddBasket/>} />
                <Route path='/baskets/update/:id' element={<UpdateBasket/>} />
                <Route path='/products' exact element={<ProductContainer/>} />
                <Route path='/products/update/:id' element={<UpdateProduct/>} />
                <Route path='/products/create' element={<AddProduct/>} />
            </Routes>
        </div>
      </Router>
  );
};

export default App;

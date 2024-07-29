import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from 'react-router-dom';
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
import Signup from "./components/Signup";
import Login from "./components/Login";


const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = !!localStorage.getItem('authToken');
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login"/>;
};


const App = () => {
    const [auth, setAuth] = useState(localStorage.getItem('authToken') || '');
    const [isBuyer, setIsBuyer] = useState(false);

    useEffect(() => {
        if (auth) {
            const user = JSON.parse(auth);
            setIsBuyer(user.isBuyer);
        }
        // localStorage.setItem('authToken', auth);
    }, [auth]);

    const handleLogout = () => {
        setAuth('');
        localStorage.removeItem('authToken');
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <Router>
            <div>
                {auth && (
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            {!isBuyer && <li><Link to="/users">Users</Link></li>}
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/orders">Orders</Link></li>
                            <li><Link to="/baskets">Basket</Link></li>
                            <li className="logout-button">
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </nav>
                )}
                <Routes>
                    <Route path="/login" element={<Login setAuth={setAuth}/>}/>
                    <Route path="/signup" element={<Signup setAuth={setAuth}/>}/>


                    <Route path='/' exact element={<PrivateRoute component={Home}/>}/>
                    <Route path='/categories' exact element={<PrivateRoute component={CategoryContainer}/>}/>
                    {!isBuyer && <Route path='/categories/create' element={<PrivateRoute component={AddCategory}/>}/>}
                    {!isBuyer && <Route path='/categories/update/:id' element={<PrivateRoute component={UpdateCategory}/>}/>}
                    {!isBuyer && <Route path='/users' exact element={<PrivateRoute component={UserContainer}/>}/>}
                    <Route path='/users/create' element={<PrivateRoute component={AddUser}/>}/>
                    <Route path='/users/update/:id' element={<PrivateRoute component={UpdateUser}/>}/>
                    <Route path='/orders' exact element={<PrivateRoute component={OrderContainer}/>}/>
                    <Route path='/orders/create' element={<PrivateRoute component={AddOrder}/>}/>
                    <Route path='/orders/update/:id' element={<PrivateRoute component={UpdateOrder}/>}/>
                    <Route path='/baskets' exact element={<PrivateRoute component={BasketContainer}/>}/>
                    {!isBuyer && <Route path='/baskets/create' element={<PrivateRoute component={AddBasket}/>}/>}
                    <Route path='/baskets/update/:id' element={<PrivateRoute component={UpdateBasket}/>}/>
                    <Route path='/products' exact element={<PrivateRoute component={ProductContainer}/>}/>
                    {!isBuyer && <Route path='/products/update/:id' element={<PrivateRoute component={UpdateProduct}/>}/>}
                    {!isBuyer && <Route path='/products/create' element={<PrivateRoute component={AddProduct}/>}/>}
                </Routes>
            </div>
        </Router>
    );
};

export default App;

import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {login} from '../services/authService';

const Login = ({ setAuth }) => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(credentials)
            .then(data => {
                setAuth(data.id); // Assuming the token is returned in the response
                setIsLoggedIn(true);
            })
            .catch(console.error);
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="auth-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={credentials.username} onChange={handleChange} required/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password" value={credentials.password} onChange={handleChange}
                           required/>
                </label>
                <br/>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;

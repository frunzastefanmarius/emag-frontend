import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {signup} from '../services/authService';

const Signup = ({ setAuth }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(userData)
            .then(data => {
                setAuth(data.id); // Assuming the token is returned in the response
                setIsSignedUp(true);
            })
            .catch(console.error);
    };

    useEffect(() => {
        if (isSignedUp) {
            navigate('/');
        }
    }, [isSignedUp, navigate]);

    return (
        <div className="auth-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={userData.username} onChange={handleChange} required/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password" value={userData.password} onChange={handleChange} required/>
                </label>
                <br/>
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>

        </div>
    );
};

export default Signup;

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css';

const Login = () => {
    const {signInUsignGoogle} = useAuth();
    return (
        <div className="login">
            <div>
            <h3>Login</h3>
            <Link to="/login">
                <button className="btn btn-primary" onClick={signInUsignGoogle}>Continue with Google</button>
            </Link>
            </div>
        </div>
    );
};

export default Login;
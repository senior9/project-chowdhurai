import React from 'react';
import "./Login.css"
import logo from "../../Images/chowdhuranyLogo-03.png";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login container mt-5'>

            <div className="mobile-screen">
                <div className="header1">
                    <h1 className='log'>  Please Log in Your Account</h1>
                </div>

                <div className="logo"></div>
                {/* <div className="logo1 mt-4">
                    <img src={logo} alt="" />
                </div> */}

                <form id="registration-form">
                    <input className='input' type="email" name="email" placeholder="E-mail" />
                    <input className='input' type="password" name="pass" placeholder="Password" />
                    <input className='input' type="password" name="repass" placeholder="Repeat password" />
                    <a href="#" className="login-btn" id="signup-btn">Sign Up</a>
                </form>

                <form id="login-form">
                    <input className='input' type="email" name="email" placeholder="E-mail" />
                    <input className='input' type="password" name="pass" placeholder="Password" />
                    <a href="#" className="login-btn">Log in</a>
                </form>

                <form id="fpass-form">
                    <input className='input' type="text" name="forgotten" placeholder="E-mail or phone number" />
                    <a href="#" className="login-btn" id="getpass-btn">Get Password</a>
                </form>

                <div className="other-options">
                    <div className="option" id="newUser"><Link to='/register'><p className="option-text">New User</p></Link></div>
                    <div className="option" id="fPass"><p className="option-text"> Forgotten password</p></div>
                </div>

            </div>
        </div>
    );
};

export default Login;
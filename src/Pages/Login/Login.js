import React, {  } from 'react';
import "./Login.css"
// import logo from "../../Images/chowdhuranyLogo-03.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebse.Init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
// import { async } from '@firebase/util';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogInSubmitForm = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.pass.value;
        await signInWithEmailAndPassword(email, password);
    }

    const from = location?.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }

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
                    {/* <a className="login-btn" id="signup-btn">Sign Up</a> */}
                </form>

                <Form onSubmit={handleLogInSubmitForm} style={{ bottom: '240px' }} id="login-form">
                    <input required className='input' type="email" name="email" placeholder="E-mail" />
                    <input required className='input' type="password" name="pass" placeholder="Password" />
                    <Button variant='danger' type='submit' className="login-btn">Log in</Button>
                </Form>

                <form id="fpass-form">
                    <input className='input' type="text" name="forgotten" placeholder="E-mail or phone number" />
                    <Button className="login-btn" id="getpass-btn">Get Password</Button>
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
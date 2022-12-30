import React, { useEffect, useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form"
import "./Register.css"
import auth  from "../../firebse.Init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Button from 'react-bootstrap/esm/Button';
import { async } from '@firebase/util';


const Register = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const navigate=useNavigate();
    const[agree, setAgree]=useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

     const handleSubmit =async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.pass.value;
        const name = event.target.name.value;
        console.log("form submited")
        await createUserWithEmailAndPassword (email, password, name);

     }
     useEffect(()=>{
        if (user){
            navigate('/login');
            console.log(user)
         }
     },[user,navigate])
     





    return (
        <div className='container mt-5'>
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
                    <a className="login-btn" id="signup-btn">Sign Up</a>
                </form>

                <Form style={{bottom:'50px'}}  onSubmit={handleSubmit} id="login-form">
                    <input required className='input' type="text" name="name" placeholder="Enter Your Name" />
                    <input required className='input' type="email" name="email" placeholder="E-mail" />
                    <input required className='input' type="password" name="pass" placeholder="Password" />
                    <input required className='input' type="password" name="repass" placeholder="Repeat password" />
                    <input onClick={()=>setAgree(!agree)} className='' type="checkbox" name="terms" id="terms" />
                    <label className='input' style={{color:'whiteSmoke'}} htmlFor='terms'>Chowdhurani Terms & Conditions APplied</label>
                    <Button disabled={!agree} variant='danger' type='submit' className="login-btn">Sign in</Button>
                </Form>

                <form id="fpass-form">
                    <input className='input' type="text" name="forgotten" placeholder="E-mail or phone number" />
                    <a  className="login-btn" id="getpass-btn">Get Password</a>
                </form>

                <div className="other-options">
                    <div className="option" id="newUser"><Link to='/login'><p className="option-text">Already User ?</p></Link></div>
                    <div className="option" id="fPass"><p className="option-text"> Forgotten password</p></div>
                </div>

            </div>
        </div>
    );
};

export default Register;
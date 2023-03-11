import React from 'react';
import loginImg from "../../Image/sec3/model1.png";
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='login-sec'>
                <div className='login-img'>
                    <h1>FASHION</h1>
                </div>
                <div className='login-text-sec'>
                   <h1>Create an account</h1> 
                   <p className='log-small'>Let's get your account</p><br></br>
                   <input className='login-input' type='text' placeholder='Name' /><br></br>
                   <input className='login-input' type='email' placeholder='Email' /><br></br>
                   <input className='login-input' type='password' placeholder='Password' /><br></br>
                   <button className='login-btn one'>Create Account</button><br></br>
                   <p className='or'>or</p>
                   <button className='login-btn two'> <i class="fa-brands fa-google"></i> Sign up with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
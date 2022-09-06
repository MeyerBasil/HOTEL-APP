import React, { } from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate, useState } from 'react';
import { auth } from '../components/config/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import logo  from '../assets/logo.jpg'








function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [name, setName] = useState('');


    const Register = () => {
        createUserWithEmailAndPassword(auth,  email, password).then(() => {

            alert("Registered successfuully")
           
        }).cath((error) => {
            console.log(error);
        })

    }

    return (

        <div>
            <div className='Register-box'>
                <div className='left'>
                    <img  src={logo} />
                    <h1 id="register-heading">Welcome back!</h1>
                    <p className='para1'>To keep connected with us please<br/> login or signup with your personal info</p>
                    <button onClick={Register} type='submit' className='btn1'>Signup</button>
                </div>
                <div className='right'>
            
            <div id='register-form-content'>
            <label className='label1'>Create Account</label>
            <div>
           
                <input type="email"
                    className="form-control"
                    placeholder='Enter Email' 
                    onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="password"
                    className="form-control"
                    placeholder='Enter Password'
                    onChange={(e)=>setPassword(e.target.value)} />
            </div>
           
            <button onClick={Register} type='submit' className='btn'>Register</button>

            <p  style= {{color:"red"}}>Already have an account? <NavLink to="/">
                Login here
            </NavLink></p>

            </div>
           

          

                </div>
            </div>
        </div>





        
      
       
    )
}

export default Register

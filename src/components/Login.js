import { NavLink, useNavigate } from "react-router-dom";
import { auth } from '../components/config/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [name, setName] = useState('');

  let navigate = useNavigate()


  const Login =(() => {
    signInWithEmailAndPassword(auth, email, password).then(() => {

      navigate('/HOME')


        
      }).catch((error) => {
          console.log(error);
      })

  })

  return (
    <div className="login1">
        <div className="login-box">
          <label className="label2">Login</label>
          
              {/* <div>
                  <input type="text"
                      className="form-control"
                      placeholder='Enter full Name'
                      onChange={(e)=>setName(e.target.value)}/>
              </div> */}

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
             
              <button onClick={Login} type='submit' className='btn btn-dark btn-leg btn-block'>Register</button>

              <p style= {{color:"red"}}>Already have an account? <NavLink to="/register">
                  Login here
              </NavLink></p>
      </div>
    </div>
      
  )
}

export default Login

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../module.css/LoginPage.module.css'
import Button from '../components/Button';
import imagepath from "../assets/logo.jpg"

const LoginPage = () => {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const handlelogin=()=>{
    if (username.toLowerCase()==="shivam" && password==="pirate"){
      alert("Login Successul")
      navigate("/homepage",{state:{username}});
    }
    else{
      alert("incorrect username or password");
    }
  }

  return (
    <div className={styles.wrapper}>
    
    <span className={styles.logincard}>
      <span className={styles.cardleft}>
        <h1>Login Page</h1>
        <img src={imagepath} alt="image" style={{width:"300px", padding:"20px"}}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat sed libero dolorum tenetur natus corporis amet voluptatem. Error, dolore.</p>
      </span>
      
      <span className={styles.cardright}>
        <span>
          <h4>Email:</h4>
          <input type="text" name="username" id="loginusername" placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </span>
          <span>
          <h4>Password:</h4>
          <input type="password" name="password" id="loginpassword" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
          </span>
        <span className='buttonwrapper'>
          <Button text="Login" onClick={handlelogin}/>
          <Link to="/register">
          <Button text="Register"/>
          </Link>
      
        </span>

        <Link to="/change-password">
          <h5>Forgot Password?</h5>
          </Link>


       </span>
    </span>
  </div>
  );
};

export default LoginPage;

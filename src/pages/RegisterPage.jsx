import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../module.css/LoginPage.module.css'
import Button from '../components/Button';
import imagepath from '../assets/logo.jpg'

const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
    
    <span className={styles.logincard}>
      <span className={styles.cardleft}>
        <h1>Register Yourself</h1>
        <img src={imagepath} alt="image" style={{width:"300px", padding:"20px"}}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat sed libero dolorum tenetur natus corporis amet voluptatem. Error, dolore.</p>
      </span>
      
      <span className={styles.cardright}>
        <span>
          <h4>Email:</h4>
          <input type="text" name="username" id="loginusername" placeholder='enter username'/>
          </span>

          <span>
          <h4>Password:</h4>
          <input type="password" name="password" id="loginpassword" placeholder='password' />
          </span>

        <span className='buttonwrapper'>

          <Link to="/">
          <Button text="Login"/>
          </Link>
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

export default RegisterPage;

import React from "react";
import { Link } from "react-router-dom";
import styles from '../module.css/Header.module.css'

const Header=()=>{
    return(
        <header>
            <nav className={styles.navbar}>
                <span className={styles.navlogo}>
                    <img src="../assets/" alt="logo image" />
                </span>
                
                <span className={styles.navelem}>
                    <Link to="/homepage"><span>Home</span></Link>
                    <Link to="/about-us"><span>About Us</span></Link>
                    <Link to="/"><span>Login</span></Link>
                    <Link to="/register"><span>Register</span></Link>
                    <Link to="/cart"><span>Cart</span></Link>
                </span>

            </nav>
        </header>




    );

}

export default Header;
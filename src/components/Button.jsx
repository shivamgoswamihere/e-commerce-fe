import React from "react";
import '../module.css/button.css';



const Button=({text, onClick})=>{
    return(
<button class="btn34" onClick={onClick}><span>{text}</span></button>
    )
}

export default Button;
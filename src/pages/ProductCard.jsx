import React, { useState } from "react";
import style from '../module.css/ProductCard.module.css'
import Button from '../components/Button'

const ProductCard = ({products,  onAddToCart})=>{
   

    return(

        <span className={style.productwrapper}>
            {products && products.length > 0 ? (
        products.map((product)=>(
            <span key={product.id}>
            <span className={style.cardwrapper}>

            <div className={style.cardimagewrapper}>
                <img src={product.image} alt=""/>
            </div>
                
            <div className={style.detailswrapper}>
                <div>
                    <h5>{product.title}</h5>
                </div>
                <div className={style.productrating}>
                    <p>$ {product.price}</p>
                    <p>{product.rating.rate} ⭐ 
                    ({product.rating.count})</p>
                </div>

                <div>
                    <Button text="Add to Cart" onClick={() => onAddToCart(product)}/>
                </div>

            </div>
            </span>
            
            </span>
        ))
    ) : (
        <h1 style={{display:'flex', justifyContent:'center',alignItems:'center', margin:'20rem 40rem', fontSize:'40px'}}>Loading products...</h1>
      )}
        
        
        </span>
    )
}

export default ProductCard;
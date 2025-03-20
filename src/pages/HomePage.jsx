import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link, useLocation } from 'react-router-dom';
import styles from '../module.css/HomePage.module.css';
import FilterProduct from '../components/FilterProduct';
import ProductCard from './ProductCard';
const HomePage = () => {
  
  const location = useLocation();
  const username = location.state?.username || "Guest";

  // Managing Product State
  const [products, setProducts]=useState([]);
  // Managing Filter State
 
  // Fetch products from the API
  useEffect(()=>{
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [])


  const [filters, setFilters] = useState({
    category: "ALL", // Default to showing all categories
    priceRange: "ALL", // Default to showing all price ranges
    minRating: 0, // Default to showing all ratings
    searchQuery: "", // Default to no search query
  });

  const filteredProducts = products
  .filter((product) =>
    filters.category === "ALL" ? true : product.category === filters.category
  )
  .filter((product) => {
    if (filters.priceRange === "ALL") return true;
    const [min, max] = filters.priceRange.split("-").map(Number);
    return product.price >= min && product.price <= max;
  })
  .filter((product) => product.rating.rate >= filters.minRating)
  .filter((product) =>
    product.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
  );

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const isAlreadyInCart = prevCart.some((item) => item.id === product.id);
      if (isAlreadyInCart) return prevCart; // Avoid duplicates
      return [...prevCart, product]; // Add the new product
    });
  };


  console.log(filters)

  return (
    <div className={styles.pagewrapper}>
      <Header />


      <div className={styles.navbottom}>   
        <h4>Home/{filters.category}</h4>   
        <h5>Welcome to Hompage, {username}</h5>
      </div>


      <div className={styles.contentwrapper}>
   
      <aside className={styles.aside}>
      <FilterProduct filters={filters} setFilters={setFilters} />

      </aside>

      <main className={styles.main}>
      <ProductCard products={filteredProducts} onAddToCart={handleAddToCart} />




      </main>

      
      </div>

    </div>
  );
};

export default HomePage;

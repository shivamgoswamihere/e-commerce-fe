import React from 'react';
import { Link, useLocation, } from 'react-router-dom';
import styles from '../module.css/FilterProduct.module.css'
const FilterProduct = ({ filters, setFilters }) => {


  return (
    <>
    <div>
      {/* Search Filter */}
        <h4>Search:</h4>
      <div className={styles.category}>
        <input className={styles.searchbox}
          type="text"
          placeholder="Search Products..."
          value={filters.searchQuery}
          onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
        />
      </div>


      <h3>FIlter Products: </h3>
      <div className={styles.category}>
      <input type="radio" name="category" value="ALL" onChange={() => setFilters((prev) => ({ ...prev, category: "ALL" }))}
          checked={filters.category === "ALL"}/>
        <span>All</span>

        <input type="radio" name="category" value="men's clothing" onChange={() => setFilters((prev) => ({ ...prev, category: "men's clothing" }))}
          checked={filters.category === "men's clothing"}/>
        <span>Men's Clothing</span>

        <input type="radio" name="category" value="women's clothing" onChange={() => setFilters((prev) => ({ ...prev, category: "women's clothing" }))}
          checked={filters.category === "women's clothing"}/>
        <span>Women's Clothing</span>

        <input type="radio" name="category" value="electronics" onChange={() => setFilters((prev) => ({ ...prev, category: "electronics" }))}
          checked={filters.category === "electronics"}/>
        <span>Electronics</span>

        <input type="radio" name="category" value="jewelery" onChange={() => setFilters((prev) => ({ ...prev, category: "jewelery" }))}
          checked={filters.category === "jewelery"}/>
        <span>Jewelery</span>


          
      </div>

        <h4>Price Range:</h4>
        <div  className={styles.category}>
        <select
          value={filters.priceRange}
          onChange={(e) => setFilters((prev) => ({ ...prev, priceRange: e.target.value }))}
        >
            <option value="All">All</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            </select>
        </div>



        <h4>Minimum Rating:</h4>
        <div  className={styles.category}>
        <select value={filters.minRating} onChange={(e) => {
      // Update the minRating in the filters state
      const newMinRating = Number(e.target.value); // Convert the selected value to a number
      setFilters((prev) => ({ ...prev, minRating: newMinRating }));
    }}
  >
    <option value="0">All Ratings</option>
    <option value="1">1 Star & Above</option>
    <option value="2">2 Stars & Above</option>
    <option value="3">3 Stars & Above</option>
    <option value="4">4 Stars & Above</option>
    <option value="5">5 Stars Only</option>
  </select>
      </div>


      </div>

    </>
  );
};

export default FilterProduct;

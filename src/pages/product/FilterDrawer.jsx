import {React, useState, useEffect} from 'react';
import "./product.css";

function FilterDrawer({drawerVisibility}) {

    // hiding drawer on small screen size
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

  return (
    <section style={{display: (width <= 800 && drawerVisibility)  ? 'none' : 'block'}} className="filter-drawer p-4">
        <div className="filter-head flex justify-between items-center">
            <h3>Filters</h3>
            <button className="btn btn-outline">Clear</button>
        </div>
        
        <span className='hr-gray-line'></span>
        <div className='filter price-range'>
            <h4>Price Range</h4>
            <input type="range" list="price-list"/>
            <datalist id="price-list">
                <option value="0" label='0'></option>
                <option value="250"></option>
                <option value="500"></option>
                <option value="750"></option>
                <option value="1000" label='1000'></option>
                <option value="1250"></option>
                <option value="1500"></option>
                <option value="1750"></option>
                <option value="2000" label='2000'></option>
            </datalist>
        </div>
        <span className="hr-gray-line"></span>
        <div className="filter category">
            <h4>Category</h4>
            <h5>Male</h5>
            <ul>
                <li>
                <label htmlFor="casual-m">
                <input type="checkbox" value="casual-m" id="casual-m" />Casual</label>
                </li>
                <li>
                <label htmlFor="formal-m">
                <input type="checkbox" value="formal-m" id="formal-m" />Formal</label>
                </li>
                <li>
                <label htmlFor="sport-m">
                <input type="checkbox" value="sport-m" id="sport-m" />Sport</label>
                </li>
            </ul>
            <h5>Female</h5>
            <ul>
                <li>
                <label htmlFor="casual-f">
                <input type="checkbox" value="casual-f" id="casual-f" />Casual</label>
                </li>
                <li>
                <label htmlFor="boot-f">
                <input type="checkbox" value="boot-f" id="boot-f" />Boot</label>
                </li>
            </ul>
        </div>
        <span className="hr-gray-line"></span>
        <div className="filter rating">
            <h4>Rating</h4>
            <label htmlFor="four">
            <input type="radio" name="rating" value="4" id="four" />4 star or above</label>
            <label htmlFor="three">
            <input type="radio" name="rating" value="3" id="three" />3 star or above</label>
            <label htmlFor="two">
            <input type="radio" name="rating" value="2" id="two" />2 star or above</label>
            <label htmlFor="one">
            <input type="radio" name="rating" value="1" id="one" />1 star or above</label>   
        </div>
        <span className="hr-gray-line"></span>
        <div className="filter sort-by">
            <h4>Sort by</h4>
            <label htmlFor="low">
            <input type="radio" name="price" value="l" id="low" />Price - low to high</label>
            <label htmlFor="high">
            <input type="radio" name="price" value="h" id="high" />Price - high to low</label>
        </div>
        <span className="hr-gray-line"></span>
        <div className="filter stock-delivery">
            <h4>Stock/Delivery</h4>
            <ul>
                <li>
                <label htmlFor="inStock">
                <input type="checkbox" value="inStock" id="inStock" />In Stock Only</label>
                </li>
                <li>
                <label htmlFor="isFastDelivery">
                <input type="checkbox" value="isFastDelivery" id="isFastDelivery" />Fast Delivery Only</label>
                </li>
            </ul>
        </div>
    </section>
  )
}

export {FilterDrawer};
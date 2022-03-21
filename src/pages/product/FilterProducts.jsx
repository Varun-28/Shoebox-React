import {React, useEffect, useState} from 'react';
import axios from 'axios';
import "./product.css";
import {Card} from "../../components/Card";

function FilterProducts({drawerVisibility, setDrawerVisibility}) {

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        try{
            (async () => {
                const response = await axios.get('/api/products');
                setFilteredProducts(response.data.products);
            })();
        }catch(err){
            console.log(err);
        }
    },[])

  return (
    <section className="product-section">

        {/* filter btn */}
        <div className="filter-btn">
            <button className="btn btn-fab btn-round" id="btn-filter" 
            onClick={()=> setDrawerVisibility(val => !val)}>
            {drawerVisibility ? <i className="fa-solid fa-filter"></i> 
            : <i className="fa-solid fa-xmark"></i>}
            </button>
        </div>

        {/* products */}
        <div className="product-cards">
            {
                filteredProducts.length === 0 ?
                <p>Loading Products ...</p> :
                filteredProducts.map(({id, brand, title, prodImage, rating, price, inStock}) => 
                <Card key={id} 
                brand={brand} 
                title={title} 
                prodImage={prodImage} 
                rating={rating} 
                price={price} 
                inStock={inStock} />)
            }
        </div>
    </section>
  )
}

export {FilterProducts};
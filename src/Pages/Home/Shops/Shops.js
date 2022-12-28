import React, { useEffect, useState } from 'react';

import Shop from '../Shop/Shop';
import "./Shops.css"

const Shops = () => {
    const [shops,setShops]= useState([]);
    useEffect(() => {
        fetch('shop.json')
            .then(res => res.json())
            .then(data => setShops(data));
    }, []);
    console.log(shops);
    return (
        <div className='mt-5 container' id='shop'>
            <h1 className='text-center text-success'> Our Product </h1>
            
           <div className='card-container'>

           {
                 
                 shops.map(shopProduct=> <Shop
                 key={shopProduct.id}
                 shopProduct={shopProduct}
                 >
                 </Shop>)
             }
             
           </div>
        </div>
    );
};

export default Shops;
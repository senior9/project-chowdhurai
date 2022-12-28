import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    // console.log(props.product);
    // const{name,price,img}=product;
    return (
        <div>
             <h1> R A Tomar kintu eita pochondo Hoiche Amra bujhte parchi </h1>
             <h3>Tara Tari checkout koro</h3>
             <Link to ='/checkout'><Button variant='success'>Checkout</Button></Link>
             
             
        </div>
    );
};

export default ProductDetail;
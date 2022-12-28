import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} =useParams()
    return (
        <div>
             <h1> R A Tomar kintu eita pochondo Hoiche Amra bujhte parchi </h1>
             <h3>Tara Tari checkout koro</h3>
        </div>
    );
};

export default ProductDetail;
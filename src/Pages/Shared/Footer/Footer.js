import React from 'react';
import copywright from "../../../Images/copywright.png"

const Footer = () => {
    return (
        <div className='mt-5'>
            <div style={{ height: "1px", backgroundColor: "gray" }} className='w-100'></div>
             <h6>All Rights Reserved <img style={{height:"20px",width:'20px'}} src={copywright} alt="" /> Chowdhurani </h6>
        </div>
    );
};

export default Footer;
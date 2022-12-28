import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../../../Images/Banner/Banner1.png"
import Banner2 from "../../../Images/Banner/Banner2.png"
import Banner3 from "../../../Images/Banner/Banner3.png"

const banner = () => {
    return (
        <div className=''>
            <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='text-danger'>Customer Satisfaction </h2>
          <h4 className='text-success'>Be Unique,Be Unique</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2 className='text-danger'>Good Quality Product</h2>
          <h4 className='text-success'>Be Unique,Be Unique</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2 className='text-danger'>24/7 Customer Support </h2>
          <h4 className='text-success'>Be Unique,Be Unique</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default banner;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Shop.css"


const Shop = ({shopProduct}) => {
    const navigate=useNavigate()
    // console.log(props);
    const { name, id, description, img, price } = shopProduct;

    const navigateCheckOut=id=>{
        navigate(`/shopDetail/${id}`)
    }

    return (
        <div className='container '>

            <div className="card mb-3" 
                    style={{maxWidth: '1000px', margin:'10% auto', backgroundColor:"#F5FFFA"}}>
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <img src={img} className="card-img" alt="Guide to Web Design" style={{padding:'5px', borderRadius:'8px'}}/>
          </div>
          <div className="col-md-12">
            <div className="card-body">
                        <h4 className="card-title"><strong>{name}</strong></h4>
                        <button type="button" className="btn btn-outline-success"   
                        onClick={()=>navigateCheckOut(id)}
                        style={{marginTop:'15px',marginBottom: "20px"}}>Add to Cart
                        </button>
                        <div>
                            <h5 style={{fontWeight: "400"}}>Product price :{price}</h5><hr/>
                            <h4 style={{fontWeight: "400"}}>Product Description</h4><hr/>
                            <p className="card-text" style={{padding:'5px'}}>{description}</p>
                        </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    )
};

export default Shop;
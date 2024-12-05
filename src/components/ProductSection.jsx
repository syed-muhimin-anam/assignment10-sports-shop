import React from 'react';
import { Link } from 'react-router-dom';

const ProductSection = ({productData}) => {
   
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productData.category}</h2>
                <h4 className='text-xl text-lime-300'>{productData.item}</h4>
                <p>{productData.description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${productData._id}`}><button  className="btn btn-primary">View Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
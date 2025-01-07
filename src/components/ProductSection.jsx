import React from 'react';
import { Link } from 'react-router-dom';

const ProductSection = ({ productData }) => {
  return (
    <div className="card rounded-lg card-compact bg-base-100 shadow-lg max-w-xs mx-auto">
      <figure className="w-full h-48 overflow-hidden flex items-center justify-center">
        <img
          src={productData.photo}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="text-sm sm:text-base font-semibold">
          <span className="font-bold mr-1">Category:</span>
          {productData.category}
        </h2>
        <h4 className="text-sm sm:text-base font-medium">
          <span className="font-bold mr-1">Item:</span>
          {productData.item}
        </h4>
        <h4 className="text-sm sm:text-base font-medium">
          <span className="font-bold mr-1">Price:</span>
          {productData.price}
        </h4>
        
        <div className="card-actions mt-3">
          <Link to={`/details/${productData._id}`}>
            <button
              className="btn btn-sm"
              style={{
                backgroundColor: '#87c451',
                color: '#fff',
                fontSize: '0.875rem',
              }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

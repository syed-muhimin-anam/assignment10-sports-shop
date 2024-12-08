import React from 'react';
import { Link } from 'react-router-dom';

const ProductSection = ({ productData }) => {

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="w-full h-64 overflow-hidden flex items-center justify-center">
                <img
                    src={productData.photo}
                    alt="Product"
                    className="w-auto h-full object-contain"
                />
            </figure>
            <div className="card-body">
                <h2 className="text-xl">
                    <span className="text-xl font-bold mr-2">Category:</span>
                    {productData.category}
                </h2>
                <h4 className="text-xl">
                    <span className="text-xl font-bold mr-2">Item:</span>
                    {productData.item}
                </h4>
                <h4 className="text-xl">
                    <span className="text-xl font-bold mr-2">Price:</span>
                    {productData.price}
                </h4>
                <p>{productData.description}</p>
                <div className="card-actions">
                    <Link to={`/details/${productData._id}`}>
                        <button className="btn btn-neutral">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;

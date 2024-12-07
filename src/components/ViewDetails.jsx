import { Link, useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const equipmentsDetails = useLoaderData();




    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Album" />
            </figure>
            <div className="card-body">
            <h1>Category: {equipmentsDetails.category}</h1>
            <h1>Item: {equipmentsDetails.item}</h1>
            <h1>Price: {equipmentsDetails.price}</h1>
           <h1>rating: {equipmentsDetails.rating}</h1>
           <h1>customization: {equipmentsDetails.customization}</h1>
           <h1>time: {equipmentsDetails.time}</h1>
           <h1>stock: {equipmentsDetails.stock}</h1>
           <h1>Description: {equipmentsDetails.description}</h1>
                <div className="card-actions justify-end">
                    <Link to={'/'}>   <button className="btn btn-neutral">Back</button></Link>
                  
                </div>
            </div>
        </div>

    );
};

export default ViewDetails;

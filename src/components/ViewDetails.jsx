import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const equipmentsDetails = useLoaderData();

    return (
        <div>
            <h1 className="text-2xl font-bold my-5 text-center">Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-base-100 shadow-xl">

                <figure className="w-full h-64 overflow-hidden flex items-center justify-center">
                    <img
                        src={equipmentsDetails.photo}
                        alt="image"
                        className="w-auto h-full object-contain"
                    />
                </figure>
                <div className="card-body">
                    <h1 className="text-lg font-bold">Category: <span className="font-normal">{equipmentsDetails.category}</span></h1>
                    <h1 className="text-lg font-bold">Item: <span className="font-normal">{equipmentsDetails.item}</span></h1>
                    <h1 className="text-lg font-bold">Price: <span className="font-normal">{equipmentsDetails.price}</span></h1>
                    <h1 className="text-lg font-bold">Rating: <span className="font-normal">{equipmentsDetails.rating}</span></h1>
                    <h1 className="text-lg font-bold">Customization: <span className="font-normal">{equipmentsDetails.customization}</span></h1>
                    <h1 className="text-lg font-bold">Time: <span className="font-normal">{equipmentsDetails.time}</span></h1>
                    <h1 className="text-lg font-bold">Stock: <span className="font-normal">{equipmentsDetails.stock}</span></h1>
                    <h1 className="text-lg font-bold">Description: <span className="font-normal">{equipmentsDetails.description}</span></h1>
                    <div className="card-actions justify-end">
                        <Link to={'/'}>
                            <button className="btn btn-neutral">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;

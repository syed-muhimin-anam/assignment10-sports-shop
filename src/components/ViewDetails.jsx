import { Link, useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const equipmentsDetails = useLoaderData()
    return (
        <div>
            <h1>{equipmentsDetails.category}</h1>
            <h1>{equipmentsDetails.item}</h1>
            <h1>{equipmentsDetails.price}</h1>
            <h1>{equipmentsDetails.description}</h1>
            <Link className="btn" to={`/update/${equipmentsDetails._id}`}><button>update</button></Link>
            <Link className="btn"><button>delete</button></Link>
            
        </div>
    );
};

export default ViewDetails;
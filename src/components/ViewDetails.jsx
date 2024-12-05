import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const equipmentsDetails = useLoaderData()
    return (
        <div>
            <h1>{equipmentsDetails.category}</h1>
        </div>
    );
};

export default ViewDetails;
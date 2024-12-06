

const ViewDetails = () => {
    const equipmentsDetails = useLoaderData();


    return (
        <div>
            <h1>Category: {equipmentsDetails.category}</h1>
            <h1>Item: {equipmentsDetails.item}</h1>
            <h1>Price: {equipmentsDetails.price}</h1>
            <h1>Description: {equipmentsDetails.description}</h1>
       
        </div>
    );
};

export default ViewDetails;

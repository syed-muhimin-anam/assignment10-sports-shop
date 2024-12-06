import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";


const MyEquipment = () => {
    const myEquipments = useLoaderData();
    const {user} = useContext(AuthContext);
    const filteredEquipments = myEquipments.filter(myEquipment => myEquipment.userEmail === user?.email);
    return (
        <div>
            <h1>My equipment</h1>
            <h2>{filteredEquipments.length}</h2>
            {
                filteredEquipments.map(equipment => <div key={equipment._id} className="equipment-card">
                    <h2>{equipment.item}</h2>
                    <p>Category: {equipment.category}</p>
                    <p>Price: ${equipment.price}</p>
                    <p>Stock: {equipment.stock}</p>
                </div>  )
            }
        </div>
    );
};

export default MyEquipment;
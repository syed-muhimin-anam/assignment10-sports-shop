import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link, useLoaderData } from "react-router-dom";


const MyEquipment = () => {
    const myEquipments = useLoaderData();
    const { user } = useContext(AuthContext);
    const filteredEquipments = myEquipments.filter(myEquipment => myEquipment.userEmail === user?.email);
    
    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/equipments/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
           
        })
       
    };
    
    return (
        <div>
            <h1>My equipment</h1>
            <h2>{filteredEquipments.length}</h2>
            {
                filteredEquipments.map(equipment => <div key={equipment._id} className="">
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{equipment.item}</h2>
                            <p>{equipment.price}</p>
                            <p> {equipment.category}</p>
                            <h2>{equipment.item}</h2>
                    <p>Category: {equipment.category}</p>
                    <p>Price: ${equipment.price}</p>
                    <p>Stock: {equipment.stock}</p>
                            <Link className="btn" to={`/update/${equipment._id}`}>
                        <button>Update</button>
                    </Link>
                    <button className="btn" onClick={() => handleDelete(equipment._id)}>Delete</button>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyEquipment;
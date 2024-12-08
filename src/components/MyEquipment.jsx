import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import Loading from "./Loading";

const MyEquipment = () => {
    const myEquipments = useLoaderData();
    const { user, loading } = useContext(AuthContext);
 
    const filteredEquipments = myEquipments.filter(
        (myEquipment) => myEquipment.userEmail === user?.email
    );
    const [myItem, setMyItem] = useState(filteredEquipments);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this item??",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              fetch(`http://localhost:5000/equipments/${_id}`, {
                method: "DELETE",
            })
                .then((res) => {
                    if (loading === true) {
                        return <Loading />;
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = myItem.filter((item) => item._id !== _id);
                        setMyItem(remaining);
                    }
                });
            }
          });
      
    };

    return (
        <div>
            <h1 className="text-4xl text-center my-10">My Equipment: Total - {myItem.length}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {myItem.map((equipment) => (
                    <div key={equipment._id} className="">
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Equipment"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-xl">
                                    <span className="text-xl font-bold mr-2">
                                        Category:
                                    </span>
                                    {equipment.category}
                                </h2>
                                <h4 className="text-xl">
                                    <span className="text-xl font-bold mr-2">
                                        Item:
                                    </span>
                                    {equipment.item}
                                </h4>
                                <h4 className="text-xl">
                                    <span className="text-xl font-bold mr-2">
                                        Price:
                                    </span>
                                    {equipment.price}
                                </h4>
                                <p>{equipment.description}</p>
                                <div className="card-actions">
                                    <Link className="btn" to={`/update/${equipment._id}`}>
                                        Update
                                    </Link>
                                    <button
                                        className="btn"
                                        onClick={() => handleDelete(equipment._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEquipment;

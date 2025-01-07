import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
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
      text: "You want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://sports-equipment-store-server-blue.vercel.app/equipments/${_id}`,
          { method: "DELETE" }
        )
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
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-405px)] px-4 pt-28">
      <h1 className="text-2xl md:text-4xl text-center mb-20 text-[#578a29]">
        My Equipment: Total - {myItem.length}
      </h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300">#</th>
              <th className="border border-gray-300">Photo</th>
              <th className="border border-gray-300">Category</th>
              <th className="border border-gray-300">Item</th>
              <th className="border border-gray-300">Price</th>
              <th className="border border-gray-300">Description</th>
              <th className="border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myItem.map((equipment, index) => (
              <tr key={equipment._id} className="hover:bg-gray-100">
                <th className="border border-gray-300">{index + 1}</th>
                <td className="border border-gray-300">
                  <img
                    src={equipment.photo}
                    alt="Equipment"
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-300">{equipment.category}</td>
                <td className="border border-gray-300">{equipment.item}</td>
                <td className="border border-gray-300">{equipment.price}</td>
                <td className="border border-gray-300">{equipment.description}</td>
                <td className="border border-gray-300">
                  <div className="flex gap-2">
                    <Link
                      className="btn btn-sm bg-[#87c451] text-white"
                      to={`/update/${equipment._id}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-sm bg-red-600 text-white"
                      onClick={() => handleDelete(equipment._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEquipment;

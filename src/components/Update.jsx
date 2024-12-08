import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Update = () => {
  const { user } = useContext(AuthContext);
  const loadedEquipment = useLoaderData();

  const navigate = useNavigate()
  const handleUpdateEquipment = (event) => {
    event.preventDefault();

    const photo = event.target.photo.value === "" ? loadedEquipment.photo : event.target.photo.value;
    const item =event.target.item.value === "" ? loadedEquipment.item : event.target.item.value;
    const category =
     event.target.category.value === "" ? loadedEquipment.category : event.target.category.value;
    const description = event.target.description.value === "" ? loadedEquipment.description : event.target.description.value;
    const rating = event.target.rating.value === "" ? loadedEquipment.rating : event.target.rating.value;
    const price = event.target.price.value === "" ? loadedEquipment.price :  parseFloat(event.target.price.value);
    const customization = event.target.customization.value === "" ? loadedEquipment.customization : event.target.customization.value;
    const time = event.target.time.value === "" ? loadedEquipment.time : event.target.time.value;
    const stock = event.target.stock.value === "" ? loadedEquipment.stock : event.target.stock.value;

    const equipmentData = {
      photo,
      item,
      category,
      description,
      rating,
      price,
      customization,
      time,
      stock,
      userName: user?.displayName,
      userEmail: user?.email,
    };


    fetch(`https://sports-equipment-store-server-blue.vercel.app/equipments/${loadedEquipment._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(equipmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Congratulations!",
          text: "successfully updated your item!",
          icon: "success"

        });

        event.target.reset();
        navigate('/')
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-center text-2xl font-semibold mb-8">Update Equipment</h1>


        {/* Update Form */}
        <form onSubmit={handleUpdateEquipment} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Photo URL */}
          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder={loadedEquipment.photo}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Item Name */}
          <div>
            <label className="block mb-1 font-medium">Item Name</label>
            <input
              type="text"
              name="item"
              placeholder={loadedEquipment.item}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Category Name */}
          <div>
            <label className="block mb-1 font-medium">Category Name</label>
            <input
              type="text"
              name="category"
              placeholder={loadedEquipment.category}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <input
              type="text"
              name="description"
              placeholder={loadedEquipment.description}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              type="text"
              name="price"
              placeholder={loadedEquipment.price}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block mb-1 font-medium">Rating</label>
            <input
              type="text"
              name="rating"
              placeholder={loadedEquipment.rating}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Customization */}
          <div>
            <label className="block mb-1 font-medium">Customization</label>
            <input
              type="text"
              name="customization"
              placeholder={loadedEquipment.customization}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Processing Time */}
          <div>
            <label className="block mb-1 font-medium">Processing Time</label>
            <input
              type="text"
              name="time"
              placeholder={loadedEquipment.time}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Stock Status */}
          <div>
            <label className="block mb-1 font-medium">Stock Status</label>
            <input
              type="text"
              name="stock"
              placeholder={loadedEquipment.stock}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block mb-1 font-medium">User Email</label>
            <input
              type="text"
              name="userEmail"
              defaultValue={user?.email}
              readOnly
              className="w-full px-4 py-2 border bg-gray-100 rounded-lg focus:outline-none"
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block mb-1 font-medium">User Name</label>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              readOnly
              className="w-full px-4 py-2 border bg-gray-100 rounded-lg focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 focus:ring focus:ring-blue-400"
            >
              Update Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;

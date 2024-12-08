import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()


  const handleAddEquipment = (event) => {
    event.preventDefault();
    const form = event.target;
    const equipmentData = {
      photo: form.photo.value,
      item: form.item.value,
      category: form.category.value,
      description: form.description.value,
      rating: form.rating.value,
      price: form.price.value,
      customization: form.customization.value,
      time: form.time.value,
      stock: form.stock.value,
      userName: form.userName.value,
      userEmail: form.userEmail.value,
    };

    fetch("http://localhost:5000/equipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(equipmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Congratulations!",
          text: "successfully added your item!",
          icon: "success"

        });
        event.target.reset();
        navigate('/')

      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-4xl w-full  rounded-lg shadow-lg p-8">
      
        <h1 className="text-2xl md:text-3xl font-bold  my-10 text-center">
          Add New Equipment
        </h1>
        <form onSubmit={handleAddEquipment} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Photo URL */}
          <div>
            <label className="block  font-medium mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Item Name */}
          <div>
            <label className="block  font-medium mb-1">Item Name</label>
            <input
              type="text"
              name="item"
              placeholder="Enter item name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Category Name */}
          <div>
            <label className="block  font-medium mb-1">Category Name</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Description */}
          <div>
            <label className="block  font-medium mb-1">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Price */}
          <div>
            <label className="block  font-medium mb-1">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Enter price"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Rating */}
          <div>
            <label className="block  font-medium mb-1">Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="Enter rating"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Customization */}
          <div>
            <label className="block  font-medium mb-1">Customization</label>
            <input
              type="text"
              name="customization"
              placeholder="Enter customization details"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Processing Time */}
          <div>
            <label className="block  font-medium mb-1">Processing Time</label>
            <input
              type="text"
              name="time"
              placeholder="Enter processing time"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Stock Status */}
          <div>
            <label className="block  font-medium mb-1">Stock Status</label>
            <input
              type="text"
              name="stock"
              placeholder="Enter stock status"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* User Email */}
          <div>
            <label className="block  font-medium mb-1">User Email</label>
            <input
              type="text"
              name="userEmail"
              defaultValue={user?.email}
              className="w-full px-4 py-2 border  rounded-lg"
              readOnly
            />
          </div>
          {/* User Name */}
          <div>
            <label className="block  font-medium mb-1">User Name</label>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              className="w-full px-4 py-2 border  rounded-lg"
              readOnly
            />
          </div>
          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            >
              Add Equipment
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};


export default AddEquipment;

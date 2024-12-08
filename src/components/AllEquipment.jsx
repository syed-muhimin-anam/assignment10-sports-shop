import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import Loading from "./Loading";
import { AuthContext } from "../providers/AuthProviders";

const AllEquipment = () => {
  const initialData = useLoaderData();
  const [allEquipmentsData, setAllEquipmentsData] = useState(initialData);
  const { loading, setLoading } = useContext(AuthContext);

  const handleSort = () => {
    setLoading(true);
    const sortedData = [...allEquipmentsData].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    setAllEquipmentsData(sortedData);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mb-4 ">
        <button onClick={handleSort} className="btn">
          Sort
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">SL</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Stock</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {allEquipmentsData.map((equipmentData, index) => (
              <tr key={equipmentData._id}>
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {equipmentData.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {equipmentData.item}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {equipmentData.price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {equipmentData.stock}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link to={`/details/${equipmentData._id}`}>
                    <button className="btn">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;

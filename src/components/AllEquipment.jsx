import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import Loading from "./Loading";
import { AuthContext } from "../providers/AuthProviders";

const AllEquipment = () => {
  const initialData = useLoaderData();
  const [allEquipmentsData, setAllEquipmentsData] = useState(initialData);
  const {loading, setLoading} = useContext(AuthContext);

  const handleSort = () => {
    setLoading(true); 

    fetch("http://localhost:5000/equipments/sort")
      .then((response) => response.json())
      .then((sortedData) => {
        setAllEquipmentsData(sortedData); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); 
      });
  };

 
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <button onClick={handleSort} className="btn">Sort</button>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>SL</th>
              <th>Category</th>
              <th>Item</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allEquipmentsData.map((equipmentData, index) => (
              <tr key={equipmentData._id}>
                <th>{index + 1}</th>
                <td>{equipmentData.category}</td>
                <td>{equipmentData.item}</td>
                <td>{equipmentData.price}</td>
                <td>{equipmentData.stock}</td>
                <td>
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

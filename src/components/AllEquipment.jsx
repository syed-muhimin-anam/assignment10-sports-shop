import { Link, useLoaderData } from "react-router-dom";


const AllEquipment = () => {
    const allEquipmentsData = useLoaderData();
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL</th>
        
        <th>Category</th>
        <th>item</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {allEquipmentsData.map((equipmentData, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th> 
                                
                                <td>{equipmentData.category }</td> 
                                <td>{equipmentData.item }</td> 
                                <td>{equipmentData.price}</td> 
                                <td>{equipmentData.stock}</td> 
                                <td>
                                 <Link to={`/details/${equipmentData._id}`}><button className="btn">View Details</button></Link> 
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
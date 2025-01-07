import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const EquipmentCards = () => {
  const equipmentsDetails = useLoaderData(); 
  const [sortedEquipments, setSortedEquipments] = useState(equipmentsDetails);

  const handleSort = () => {
    const sorted = [...sortedEquipments].sort((a, b) => b.price - a.price); 
    setSortedEquipments(sorted);
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold text-center my-20 text-[#7eb84b]">
        All Sports Equipment
      </h1>

      {/* Sort Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleSort}
          className="btn btn-sm bg-[#87c451] text-white px-4 py-2"
        >
          Sort by Price: High to Low
        </button>
      </div>

      {/* Equipment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedEquipments.map((product) => (
          <div
            key={product._id}
            className="card rounded-lg bg-base-100 shadow-lg mx-auto w-full flex flex-col"
            style={{
              height: "450px", // Fixed height for uniform cards
              maxWidth: "280px",
            }}
          >
            <figure
              className="w-full h-48 overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: "#f9f9f9", // Subtle background for images
              }}
            >
              <img
                src={product.photo}
                alt={product.item}
                className="w-auto h-full object-contain" // Ensures the image is centered and maintains aspect ratio
              />
            </figure>
            <div className="card-body p-4 flex-grow">
              <h2 className="text-sm sm:text-base font-semibold">
                <span className="font-bold mr-1">Category:</span>
                {product.category}
              </h2>
              <h4 className="text-sm sm:text-base font-medium">
                <span className="font-bold mr-1">Item:</span>
                {product.item}
              </h4>
              <h4 className="text-sm sm:text-base font-medium">
                <span className="font-bold mr-1">Price:</span>
                {product.price}
              </h4>
              <h4 className="text-sm sm:text-base font-medium">
                <span className="font-bold mr-1">Stock:</span>
                {product.stock}
              </h4>
              <h4 className="text-sm sm:text-base font-medium">
                <span className="font-bold mr-1">Description:</span>
                {product.description}
              </h4>
            </div>
            <div className="card-actions p-4 mt-auto">
              <Link to={`/details/${product._id}`}>
                <button
                  className="btn btn-sm w-full"
                  style={{
                    backgroundColor: "#87c451",
                    color: "#fff",
                    fontSize: "0.875rem",
                  }}
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentCards;

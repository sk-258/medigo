// src/pages/Medicines.js
function Medicines() {
    return (
      <div className="p-6 bg-gray-50">
        <h1 className="text-3xl text-[#0097b2] font-bold mb-4">Medicines</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Medicine" className="w-full h-32 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold">Medicine 1</h2>
            <p className="text-gray-700">Price: ₹100</p>
            <button className="bg-[#0097b2] text-white px-4 py-2 mt-4 rounded hover:bg-[#007b94]">Add to Cart</button>
          </div>
          {/* Add more medicine cards here */}
        </div>
      </div>
    );
  }
  
  export default Medicines;
  
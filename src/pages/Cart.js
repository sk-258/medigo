// src/pages/Cart.js
function Cart() {
    return (
      <div className="p-6 bg-gray-50">
        <h1 className="text-3xl text-[#0097b2] font-bold mb-4">Your Cart</h1>
        <div className="bg-white p-4 rounded shadow-lg mb-4">
          <h2 className="text-xl font-semibold">Medicine 1</h2>
          <p className="text-gray-700">Price: ₹100</p>
          <button className="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-700">Remove</button>
        </div>
        {/* Add more cart items here */}
        <div className="mt-6 text-right">
          <button className="bg-[#0097b2] text-white px-6 py-3 rounded hover:bg-[#007b94]">Checkout</button>
        </div>
      </div>
    );
  }
  
  export default Cart;
  
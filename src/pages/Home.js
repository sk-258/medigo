// src/pages/Home.js
function Home() {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="text-4xl text-[#0097b2] font-bold mb-4">Welcome to MediGo</h1>
        <p className="text-lg text-center mb-6">Order medicines, consult with doctors, and get the healthcare services you need, all in one place.</p>
        <div>
          <a href="/medicines" className="bg-[#0097b2] text-white px-6 py-3 rounded hover:bg-[#007b94] mr-4">
            Browse Medicines
          </a>
          <a href="/cart" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Go to Cart
          </a>
        </div>
      </div>
    );
  }
  
  export default Home;
  
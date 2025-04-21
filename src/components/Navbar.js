// src/components/Navbar.js
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">MediGo</h1>
        <div>
          <Link to="/" className="px-4 py-2 hover:bg-blue-700 rounded">Home</Link>
          <Link to="/medicines" className="px-4 py-2 hover:bg-blue-700 rounded">Medicines</Link>
          <Link to="/cart" className="px-4 py-2 hover:bg-blue-700 rounded">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

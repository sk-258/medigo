import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Update path if needed

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Logo & Description Section */}
      <div className="text-center py-20">
        <img src={Logo} alt="MediGo Logo" className="mx-auto h-32 mb-4" />
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to MediGo</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          MediGo simplifies your healthcare experience by bringing medicines and doctor consultations right to your fingertips. Browse medicines, consult doctors online or offline, and get your prescriptions delivered to your doorstep.
        </p>
      </div>

      {/* Main Options Section */}
      <div className="flex flex-col items-center gap-8 mb-12 lg:flex-row lg:justify-center">
        {/* Medicine Delivery Card */}
        <Link
          to="/medicines"
          className="w-60 h-60 bg-medicines bg-cover bg-center rounded-xl shadow-lg hover:shadow-xl text-white transition-shadow duration-30 text-center p-6 flex flex-col justify-end relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl z-0"></div>
          <div className="z-10">
            <h2 className="text-2xl  font-semibold">Medicine Delivery</h2>
            <p>Browse and order medicines directly from our platform.</p>
          </div>
        </Link>

        {/* Doctor Consultation Card */}
        <Link
          to="/consultation"
          className="w-60 h-60 bg-doctor bg-cover bg-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-white text-center p-6 flex flex-col justify-end relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-0"></div>
          <div className="z-10">
            <h2 className="text-2xl font-semibold">Doctor Consultation</h2>
            <p>Schedule online or offline consultations with experienced doctors.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;

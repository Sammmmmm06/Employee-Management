import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeMenu() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          
          {/* Logo / Title */}
          <div className="text-2xl font-bold text-blue-600">
            Employee
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default WelcomeMenu;

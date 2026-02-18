import axios from 'axios';
import React, { useState } from 'react';

function Register() {

  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    password: ''
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  const reset = () => {
    setEmployee({
      name: '',
      email: '',
      password: ''
    });
  };

  const register = (e) => {
    e.preventDefault();

    axios.post('https://employee-crud-hbuz.onrender.com/register', {
      name: employee.name,
      email: employee.email,
      password: employee.password
    })
    .then((response) => {
      if (response.data) {
        alert('Registration Successful!');
        reset(); // ✅ clear form only after success
      } else {
        alert('User already exists!');
      }
    })
    .catch((error) => {
      console.error(error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <form 
        onSubmit={register} 
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Register</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={inputHandler}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={inputHandler}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={employee.password}
            onChange={inputHandler}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

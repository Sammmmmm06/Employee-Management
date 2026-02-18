import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EmployeeProfile() {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    id: 0,
    name: '',
    email: '',
    password: '',
  });

  // ✅ Fetch employee details by ID on load
  useEffect(() => {
    axios
      .get(`https://employee-crud-hbuz.onrender.com/getById?id=${id}`)
      .then((response) => setEmployee(response.data))
      .catch((error) => alert(error.message || 'Something went wrong'));
  }, [id]);

  // ✅ Handle input change
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  // ✅ Update employee
  const update = (e) => {
    e.preventDefault();

    axios
      .put('https://employee-crud-hbuz.onrender.com/update', {
        id: id,
        name: employee.name,
        email: employee.email,
        password: employee.password,
      })
      .then((response) => {
        alert('Employee updated successfully!');
      })
      .catch((error) => {
        alert(error.message || 'Something went wrong during update');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <form
        onSubmit={update}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Update Employee
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">ID</label>
          <input
            type="number"
            name="id"
            value={employee.id}
            onChange={inputHandler}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your id"
            readOnly
          />
        </div>

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
          Update
        </button>
      </form>
    </div>
  );
}

export default EmployeeProfile;

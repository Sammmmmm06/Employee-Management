import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);


  const navigate =useNavigate();
  // Fetch all employees when the component loads
  useEffect(() => {
    axios
      .get("https://employee-crud-hbuz.onrender.com/getAll")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch(() => {
        console.log("Something went wrong while fetching employees");
      });
  }, []);

  // Delete employee by ID
  const deleteEmployee = (id) => {
    axios
      .delete(`https://employee-crud-hbuz.onrender.com/delete?id=${id}`)
      .then((response) => {
        if (response.data === true) {
          alert("Employee deleted successfully");

          // Update UI by removing the deleted employee from state
          setEmployees((prevEmployees) =>
            prevEmployees.filter((emp) => emp.id !== id)
          );
        } else {
          alert("Employee not deleted");
        }
      })
      .catch((error) => {
        alert(error.message || "Something went wrong");
      });
  };

  const showEmployee =(id) =>{
    //navigate to profile with specific id
    navigate(`/employee-profile/${id}`)

  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Employee Dashboard
        </h1>

        {employees.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            Loading employee data...
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">#</th>
                  <th className="py-3 px-4 text-left">ID</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Password</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr
                    key={emp.id}
                    className={`border-b hover:bg-blue-50 transition ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{emp.id}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {emp.name}
                    </td>
                    <td className="py-3 px-4">{emp.email}</td>
                    <td className="py-3 px-4 text-gray-500">
                      {emp.password}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => deleteEmployee(emp.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 mr-3 rounded-md shadow-sm transition"
                      >
                        Delete
                      </button>
                      <button 
                      onClick={() =>showEmployee(emp.id)}
                      className="bg-blue-600 hover:bg-blue-400 text-white px-4 py-1 rounded-md shadow-sm transition">
                        Update
                      </button>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeDashboard;

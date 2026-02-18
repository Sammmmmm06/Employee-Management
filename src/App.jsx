
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './components/Welcome'
import Login   from './components/Login'
import Register from './components/Register'
import EmployeeDashboard from './components/EmployeeDashboard'
import EmployeeProfile from './components/EmployeeProfile'

function App() {
  

  return (
    <>
   
      <Routes>
        <Route path='/' element={<Welcome />}> </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/dashboard' element={<EmployeeDashboard />}></Route>
        <Route path='employee-profile/:id' element={<EmployeeProfile />}></Route>
       
      </Routes>
   
    </>
  )
}

export default App

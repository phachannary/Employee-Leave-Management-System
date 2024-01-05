import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LeaveDetail from "./pages/LeaveDetail";
import Dashboard from "./pages/dashboard";
import LeaveManagement from './pages/LeaveManagement';
import LeaveType from './pages/LeaveType';
import ChangePassword from './pages/Profile/change-password';
import LeaveTypes from './pages/LeaveTypes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/leave-management' element={<LeaveManagement/>} />
          <Route path='/employee-leave' element={<LeaveTypes/>} />
          <Route path='/leave-detail/:leaveID' element={<LeaveDetail/>} />
          <Route path='/leave-type' element={<LeaveType/>} />
          <Route path='/change-password' element={<ChangePassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

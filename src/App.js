import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LeaveDetail from "./pages/LeaveDetail";
import Dashboard from "./pages/dashboard";
import LeaveManagement from './pages/LeaveManagement';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/leave-management' element={<LeaveManagement/>} />
          <Route path='/leave-detail/:leaveID' element={<LeaveDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

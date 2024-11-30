import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin';
import Navbar from './Components/Navbar';
import AddUser from './Components/AddUser';

const App = ()=>{
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='' element={<Admin />} />
          <Route path='adduser' element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
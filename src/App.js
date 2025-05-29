import './App.css';
import Navbar from './Component/Navbar/navbar'
import Home from './Pages/Home/home';
import { useState } from 'react';
function App() {
  const [sideNavbar,setSideNavbar] = useState(true);

  const setSideNavbarFunc=(value)=>{
    setSideNavbar(value)
  }
  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Home sideNavbar={sideNavbar} />
    </div>
  );
}

export default App;

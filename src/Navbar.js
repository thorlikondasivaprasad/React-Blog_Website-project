import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1><span>🖊</span> Bloggers Fort <span>🏰</span></h1>
      <div className="links">

        <Link to="/">Home🏡</Link>
        <Link to="/create" style={{
          color:"white",
          backgroundColor:"rgb(55, 72, 253)",
          borderRadius:'9px'
        }}>New Blog 📄 +</Link>

      </div>
    </nav>
  )
};
export default Navbar


// import React from "react";
// import { Link } from "react-router-dom"

// export default function NavBar() {
//   return (
//     <div>
//       This is NavBar
//       <div>Home</div>
  
//       <Link to="/menu"> <button>Menu</button>  </Link>
//       <Link to= "/Products"><button>Products</button></Link>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Fashion</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}

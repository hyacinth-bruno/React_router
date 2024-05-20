import React from "react";
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      This is NavBar
      <div>Home</div>
      {/* <div>Menu</div> */}
      <Link to="/menu"> <button>Menu</button>  </Link>
      <Link to= "/Products"><button>Products</button></Link>
    </div>
  );
}

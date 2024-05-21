// import React from 'react'
// import { Routes, Route } from 'react-router-dom';

// import Home from './components/Home';
// import Menu from './components/Menu';
// // import Products from './components/Products';
// import NavBar from './components/NavBar';
// import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';

// function App() {
//   return (
//     <div>
//       <NavBar />
      
//       <Routes>
//         <Route path="" element={<Home />}></Route> 
//         <Route path="/menu" element={<Menu />}></Route> 
//         <Route path="/products" element={<ProductList />}></Route> 
//         <Route path="/products/:id" element={<ProductDetails />}></Route> 
//     </Routes>
//       </div>
//   )
// }

// export default App;




import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

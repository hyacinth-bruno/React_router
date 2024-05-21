// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Products({item}) {
//   return (
//     <div>
//       {item.title}
//      <Link to = {`/products/${item.id}`}> <button> more details</button></Link>
//     </div>
//   )
// }


import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

export default function Products({ item }) {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.title} className="product-image"/>
      <h3 className="product-title">{item.title}</h3>
      <p className="product-price">${item.price}</p>
      <Link to={`/products/${item.id}`}>
        <button className="details-button">More Details</button>
      </Link>
    </div>
  );
}

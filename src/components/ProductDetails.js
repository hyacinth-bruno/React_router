// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';



// export default function ProductDetails() {
//     const [productDetail, setProductDetail] = useState({});
//     const {id}  = useParams();
//     const url = `https://fakestoreapi.com/products/${id}`;
    
//     useEffect(() => {
//         fetch(url)
//         .then(response => response.json())
//         .then(data => {setProductDetail(data);})
//         .catch(error => {
//             console.error("There was an error fetching the product details:", error);
//         });
// }, [url]);

// //

// return (
//     <div>
//         {productDetail.title && (
//             <>
//                 <h3>{productDetail.title}</h3>
//                 <img src={productDetail.image} alt={productDetail.title} width="150" />
//                 <p>Price: ${productDetail.price}</p>
//                 <p>{productDetail.description}</p>
//                 <p>Category: {productDetail.category}</p>
//                 <p>Rating: {productDetail.rating.rate} ({productDetail.rating.count} reviews)</p>
//             </>
//         )}
//     </div>
// );
// }



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

export default function ProductDetails() {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => { setProductDetail(data); })
      .catch(error => {
        console.error("There was an error fetching the product details:", error);
      });
  }, [url]);

  return (
    <div className="product-details">
      {productDetail.title && (
        <>
          <h2 className="product-details-title">{productDetail.title}</h2>
          <img src={productDetail.image} alt={productDetail.title} className="product-details-image" />
          <p className="product-details-price">Price: ${productDetail.price}</p>
          <p className="product-details-description">{productDetail.description}</p>
          <p className="product-details-category">Category: {productDetail.category}</p>
          <p className="product-details-rating">Rating: {productDetail.rating.rate} ({productDetail.rating.count} reviews)</p>
        </>
      )}
    </div>
  );
}

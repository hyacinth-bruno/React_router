import React from 'react'
import { Link } from 'react-router-dom'

export default function Products({item}) {
  return (
    <div>
      {item.title}
     <Link to = {`/products/${item.id}`}> <button> more details</button></Link>
    </div>
  )
}

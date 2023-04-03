import React from 'react'
import Product from './Product'
import laptop from './Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'
import watch from './PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg'
import headphone from './head.jpg'


const Products = ({products}) => {
  return (
    <div className='products'>
        { products.map((product)=>(
         <Product key={product.id} pselect={product}></Product>
    ))}
    {console.log(products)}
    </div>
  )
}

export default Products
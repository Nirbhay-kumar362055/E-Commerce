import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image, name,price }) => {
    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer border border-solid-black rounded' to = {`/product/${id}`}>
        <div className='overflow-hidden'>
          <img src={image[0]} alt='' className=' rounded-xl hover:scale-110 transition ease-in-out' />
        </div>
        <p className='pt-3 pb-1 pl-1 text-sm'>{name}</p>
        <p className='pl-1 text-sm font-medium'>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem;

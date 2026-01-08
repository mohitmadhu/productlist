import React from 'react';

const ProductCard = ({ product }) => {

    return (

        <div className='bg-white rounded shadow p-4'>
            < img src={product.image} alt={product.name} className='h-40 w-full  object-cover rounded mb-3' />
            <h2 className='font-semibold text-lg text-black'>{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm text-gray-500">{product.category}</p>

        </div>
    )

}

export default ProductCard;
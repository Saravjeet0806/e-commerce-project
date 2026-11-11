import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100">

            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                </h3>

                <p className="text-xl font-bold text-blue-600 mb-4">
                    ${product.price.toFixed(2)}
                </p>

                <Link
                    to={`/product/${product._id}`}
                    className="block w-full text-center bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                >
                    View Product
                </Link>

            </div>
        </div>
    )
}

export default ProductCard;

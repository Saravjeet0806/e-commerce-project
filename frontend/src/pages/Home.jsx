import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data.slice(0, 4));
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white">

      <div className="bg-gray-100 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Ecommy</span>
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Best Ecommerce website on Earth!!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Featured Products
        </h2>

        {loading ? (
          <div className="text-center text-blue-600 text-lg font-medium">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;
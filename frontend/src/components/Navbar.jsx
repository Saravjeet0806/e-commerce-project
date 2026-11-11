import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import {useSelector} from 'react-redux';

const Navbar = () => {
  const {user, logout} = React.useContext(AuthContext);
  const cartItems = useSelector((state)=>state.cart.cartItems);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  return (
    <nav className='bg-white shadow-md px-8 py-4'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>

        <Link to="/" className='text-2xl font-bold text-blue-600'>
          Ecommy
        </Link>

        <ul className='flex items-center gap-8 text-gray-700 font-medium'>

          <li>
            <Link to="/shop" className='hover:text-blue-600 transition duration-200'>
              Shop
            </Link>
          </li>

          <li>
            <Link to="/cart" className='hover:text-blue-600 transition duration-200'>
              Cart ({cartItems.length})
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/profile" className='hover:text-blue-600 transition duration-200'>
                  Hi, {user.name}
                </Link>
              </li>

              {user.role === 'admin' && (
                <li>
                  <Link to="/admin" className='hover:text-blue-600 transition duration-200'>
                    Admin
                  </Link>
                </li>
              )}

              <li>
                <button
                  onClick={handleLogout}
                  className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200'
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/login"
                className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200'
              >
                Login
              </Link>
            </li>
          )}

        </ul>
      </div>
    </nav>
  )
}

export default Navbar


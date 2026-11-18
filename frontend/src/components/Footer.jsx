import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='bg-white border-t border-gray-200 shadow-sm mt-12'>
      <div className='max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6'>

        <p className='text-medium text-gray-500'>
          &copy; {new Date().getFullYear()} <span className='font-semibold text-blue-600'>Ecommy</span>. All rights reserved.
        </p>

        <ul className='flex flex-wrap justify-center items-center gap-6 text-medium font-medium text-gray-700'>
          <li>
            <Link to="/about" className='hover:text-blue-600 transition duration-200'>
              About us
            </Link>
          </li>

          <li>
            <Link to="/return" className='hover:text-blue-600 transition duration-200'>
              Return Policy
            </Link>
          </li>

          <li>
            <Link to="/disclaimer" className='hover:text-blue-600 transition duration-200'>
              Disclaimer
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Footer

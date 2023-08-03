import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div>
<div className='subNavbar'>
<nav className=" bg-primaryColor p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
            <p className=' text-sm font-normal'>Contact@university.edu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 9023738393</p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Administration</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

</div>

               <nav className=" bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
            <img src={logo} alt="" className=' w-60' />
        </div>
        <ul className="flex space-x-4 text-lg">
          <li>
            <a href="#" className="text-primaryColor hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-primaryColor hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-primaryColor hover:text-gray-300">Administration</a>
          </li>
          <li>
            <a href="#" className="text-primaryColor hover:text-gray-300">Admission</a>
          </li>
          <li>
            <a href="#" className="text-primaryColor hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
        </div>
    );
};

export default Navbar;
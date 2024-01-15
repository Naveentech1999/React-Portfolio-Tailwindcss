import Logo from '../assets/logo1.png';
import React from 'react';
import { FaFacebook , FaInstagram ,FaGithub , FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#0a192f] text-gray-300 text-3xl font bold p-8 w-full h-full pt-20  px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-sans">Designed and Developed by Naveen Bupati</h3>
        </div>


        <div className="text-center md:text-right mb-4 md:mb-0 ">   
          <h3 className="text-xl font-sans">Copyright © {year}  NB </h3>   
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="https://github.com/Naveentech1999"
            className="text-white hover:scale-110 duration-500"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com"
            className="text-white bg-blue-800 hover:scale-110 duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/naveenbupati/"
            className="text-white bg-blue-600 hover:scale-110 duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn  size={30}/>
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-white  bg-gradient-to-r from-purple-500 to-pink-600 hover:scale-110 duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

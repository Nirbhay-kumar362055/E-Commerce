import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w-3/4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          cumque libero doloremque quam nesciunt a placeat, ipsum magni labore
          quis corrupti voluptatem totam porro repellendus vel aliquid neque
          veritatis maiores.
        </p>
      </div>
      <div className="mt-1">
        <p className="font-medium text-2xl mb-1 ">COMPANY</p>
        <ul>
          <li className="text-gray-600 cursor-pointer mb-1">Home</li>
          <li className="text-gray-600 cursor-pointer mb-1">About Us</li>
          <li className="text-gray-600 cursor-pointer mb-1">Delivery</li>
          <li className="text-gray-600 cursor-pointer mb-1">Privacy Policy</li>
        </ul>
      </div>
      <div className="mt-1">
        <p className=" w-full font-medium text-2xl mb-1 ">GET IN TOUCH</p>
        <ul>
          <li className="text-gray-600 cursor-pointer mb-1">Contact Us</li>
          <li className="text-gray-600 cursor-pointer mb-1">100-5445-4115</li>
          <li className="text-gray-600 cursor-pointer mb-1">
            Nirbhaykumar362055@gmail.com
          </li>
          <li className="text-gray-600 cursor-pointer mb-1">
            <a href="https://www.instagram.com/n___k___bhardwaj___/">
              instagram
            </a>
          </li>
          <li className="text-gray-600 cursor-pointer mb-1">
            <a href="https://www.linkedin.com/in/nirbhay-kumar-456433256/">
              linkedin
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center sm:justify-center">
        <hr />
        <p className="py-5 text-center text-sm">
          copyright 2025@ forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

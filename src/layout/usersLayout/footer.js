import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";


function Footer() {
  return (
    <footer class="bg-gray-50 shadow-md  w-full flex flex-col items-center justify-center shadow-white border-t border-gray-300  py-10">
      <div class="max-w-7xl mx-auto !container  px-4 grid grid-cols-2 md:grid-cols-5 gap-8 text-gray-700 text-sm">

        <div>
          <h3 class="font-bold text-black mb-4">About</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">About us</a></li>
            <li><a href="#" class="hover:underline">Announcements</a></li>
            <li><a href="#" class="hover:underline">Terms of use</a></li>
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-black mb-4">Products</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Spot Trade</a></li>
            <li><a href="#" class="hover:underline">Future Trade</a></li>
            <li><a href="#" class="hover:underline">Operational Margin</a></li>
            <li><a href="#" class="hover:underline">Trading</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-black mb-4">Support</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Listing Application</a></li>
            <li><a href="#" class="hover:underline">Fees</a></li>
            <li><a href="#" class="hover:underline">Our Team</a></li>
            <li><a href="#" class="hover:underline">Help Desk</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-black mb-4">Services</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">FAQs</a></li>
            <li><a href="#" class="hover:underline">KYC & AML Policy</a></li>
            <li><a href="#" class="hover:underline">Security</a></li>
            <li><a href="#" class="hover:underline">Coin Listing</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-bold mb-2">Community</h3>
          <div class="flex items-center space-x-2">
            <FaFacebook size={25} />
            <AiFillTwitterCircle size={30} />
            {/* <div className='bg-blue-500 px-1.5 py-0.5 flex items-center justify-center rounded-full'> */}
              <IoLogoLinkedin color='blue' size={25} />
            {/* </div>
            <div className='bg-red-500 px-1.5 py-0.5 flex items-center justify-center rounded-full'> */}
              <AiFillYoutube color='red' size={30} />
            {/* </div>
            <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-1.5 flex items-center justify-center rounded-full"> */}
              <IoLogoInstagram color="red" size={30} />
            {/* </div> */}

          </div>
        </div>

      </div>
    </footer>

  )
}

export default Footer

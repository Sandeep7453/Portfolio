import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto py-10 px-8 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <FaPhoneAlt className="text-cyan-400" /> +91 74539 55846
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <FaEnvelope className="text-cyan-400" /> skumar7453955846@gmail.com
          </p>
        </div>

        {/* Right - Links & Socials */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <ul className="flex gap-6 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-5 text-2xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/sandeep_s74?igsh=eW11aXN1YWxjNHhi" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@StartWebNow" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="https://github.com/Sandeep7453" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="mailto:skumar7453955846@gmail.com?subject=Hello%20Sandeep&body=Hi%20Sandeep,%20I%20want%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <MdEmail/>
            </a>
          </div>  
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Copyright */}
      <div className="text-center py-4 text-sm text-gray-500">
        © 2025 Sandeep Tamta. All Rights Reserved.  
        <span className="block">Built with ❤️ using React & Tailwind CSS.</span>
        
      </div>
    </footer>
  )
}

export default Footer

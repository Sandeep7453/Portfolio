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
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://Email.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
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

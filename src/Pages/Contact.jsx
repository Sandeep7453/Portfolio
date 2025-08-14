import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import emailjs from '@emailjs/browser';


const Contact = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1479a4d',      // Service ID
      'template_b4c7b3m',     // Template ID
      form.current,         // Form reference
      '3wAAasTYazW97jH0X'     // Public key
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Try again!");
    });
  };



  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className='w-full'>
 <Navbar/>
      </div>
   
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
        Get In Touch
      </h1>

  
      <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-lg border  border-white/20  rounded-2xl shadow-[0_0_15px_5px_rgba(255,255,255,0.4)] overflow-hidden w-full max-w-5xl">
        

        <div className="md:w-1/2 flex justify-center items-center p-6 bg-white/5">
          <img
            src="./images/Contactus.png"
            alt="contact us"
            className="h-80 object-contain drop-shadow-lg"
          />
        </div>

 
        <div className="md:w-1/2 p-8">
          <form className="space-y-5" ref={form} onSubmit={sendEmail}>
       
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-300 mb-1">First Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
                  placeholder="Jenifer"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-300 mb-1">Last Name</label>
                <input
                  type="text"
                  name="user_lastname"
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
                  placeholder="driven"
                />
              </div>
            </div>

          
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
                placeholder="example@email.com"
              />
            </div>

      
            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
              name="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 transition duration-300 font-semibold shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

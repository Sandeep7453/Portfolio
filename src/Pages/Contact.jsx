import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), formData);
      setStatus("Message sent successfully!");
      setFormData({
        user_name: "",
        user_lastname: "",
        user_email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message. Try again!");
    }
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="w-full">
        <Navbar />
      </div>

      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
        Get In Touch
      </h1>

      <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_0_15px_5px_rgba(255,255,255,0.4)] overflow-hidden w-full max-w-5xl">
        <div className="md:w-1/2 flex justify-center items-center p-6 bg-white/5">
          <img
            src="./images/Contactus.png"
            alt="contact us"
            className="h-80 object-contain drop-shadow-lg"
          />
        </div>

        <div className="md:w-1/2 p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-300 mb-1">First Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Jenifer"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-300 mb-1">Last Name</label>
                <input
                  type="text"
                  name="user_lastname"
                  value={formData.user_lastname}
                  onChange={handleChange}
                  placeholder="Driven"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
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

          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;

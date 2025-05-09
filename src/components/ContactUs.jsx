import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '',subject:'', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the error for the field being typed in
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = 'Name is required';
    if (!formData.subject.trim()) validationErrors.subject = 'Subject is required';
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) validationErrors.message = 'Message is required';

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      const response = await fetch('https://big-hills-backend.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
  
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
  
      setFormData({ name: '', subject: '', email: '', message: '' });
      setSubmitted(true);
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error(error);
    }
  };
  

  return (
    <section className="bg-[#212123] py-16 md:py-20 md:px-28 text-white" id='contact-us'>
      <div className="mx-2rem md:mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Info */}
        <div className='mx-[1rem]'>
          <h2 className="text-5xl font-bold mb-7 text-amber-400">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            Whether you want to book an appointment, ask a question, or just say hello —
            we’d love to hear from you!
          </p>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <FiMapPin className="text-amber-400 mt-1" />
              <span>Opposite M & M Event Centers High Court,Keffi,Nassarawa State </span>
            </li>
            <li className="flex items-start gap-3">
              <FiPhone className="text-amber-400 mt-1" />
              <a href="tel:+1234567890" className="hover:underline">07043136258</a>
            </li>
            <li className="flex items-start gap-3">
              <FaWhatsapp className="text-amber-400 mt-1" />
              <a href="https://wa.me/07043136258" className="hover:underline">07043136258</a>
            </li>
            <li className="flex items-start gap-3">
              <FiMail className="text-amber-400 mt-1" />
              <a href="Ozigaguhillary25@gmail.com" className="hover:underline">
                Ozigaguhillary25@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiClock className="text-amber-400 mt-1" />
              <span>Mon–Sat: 9am – 8pm, Sun: Closed</span>
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white text-[#212123] p-6 mx-[1rem] rounded-lg shadow-lg">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                placeholder="I need to carve"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-400`}
                placeholder="Type your message here..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="my-10 px-3 py-2 w-full rounded-md text-white text-center bg-[#ad987d] hover:bg-[#97856e] duration-200"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

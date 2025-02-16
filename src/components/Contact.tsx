import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_w5he7q4';
    const templateID = 'template_hia7dee';
    const userID = 's_QfeXZJLKKiwrNGY'; // Replace with your public key

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send your message. Please try again later.');
      });
  };

  return (
    <div className="contact bg-dark text-light min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Contactanos</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-blue-400 p-6 rounded-lg shadow-lg"
      >
        <label className="block mb-4">
          <span className="text-light font-semibold">Nombre:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-2 text-light rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-light font-semibold">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 p-2 text-light rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-light font-semibold">Mensaje:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-2 p-2 text-light rounded-md"
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-blue-800 text-dark font-bold py-2 px-4 rounded-md hover:bg-accent-dark transition duration-300 cursor-pointer"
        >
          Enviar
        </button>
      </form>
      {status && <p className="mt-4 text-lg">{status}</p>}
    </div>
  );
};

export default Contact;

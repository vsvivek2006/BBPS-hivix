import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <p className="text-lg mb-4">Get in touch with our team.</p>
        {/* Add your contact content here */}
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <p className="text-lg mb-4">Read our latest articles and updates.</p>
        {/* Add your blog content here */}
      </div>
    </div>
  );
};

export default Blog;
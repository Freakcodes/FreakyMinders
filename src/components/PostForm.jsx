// PostForm.js
import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
const PostForm = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const {createPost}=useAuth();
  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e) => {
    // Assuming you want to handle image upload
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the caption and image to your backend for further processing
    console.log(image);
    createPost(image,caption);
    // Add your API call or other logic here
    // Reset form after submission if needed
    setCaption('');
    setImage(null);
  };

  return (
    <div className="max-w-md mx-auto my-8 bg-white p-8 rounded shadow-md">
              <div className='font-bold text-xl mx-12 flex items-center'>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-add-photo-1780307-1517795.png" alt="" className='w-12 ' />
        create post
        </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="caption" className="block text-sm font-medium text-gray-600">
            Caption
          </label>
          <textarea
            id="caption"
            name="caption"
            rows="4"
            value={caption}
            onChange={handleCaptionChange}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Image
          </label>
          <input
            type='file'
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;

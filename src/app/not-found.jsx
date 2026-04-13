import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-base-200 px-4">
      
      {/* 404 Text */}
      <h1 className="text-7xl font-extrabold text-red-500">404</h1>

      {/* Title */}
      <h2 className="text-2xl font-bold mt-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>

    </div>
    );
};

export default NotFound;
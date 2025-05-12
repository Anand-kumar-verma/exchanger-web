import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <p className="text-xl md:text-2xl mt-4 text-gray-700">
        Oops! Page not found.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

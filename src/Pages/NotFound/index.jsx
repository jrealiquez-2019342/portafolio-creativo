import React from 'react';

const NotFoundPage = ({message = 'Oops! Page Not Found', buttonMsg = 'Go Back Home'}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl font-semibold text-gray-800 mb-2">{message}</p>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-red-500 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-400"
        >
          {buttonMsg}
        </a>
        <div className="mt-8">
          <img 
            src="https://img.icons8.com/ios/452/rocket.png" 
            alt="Rocket" 
            className="w-40 mx-auto animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

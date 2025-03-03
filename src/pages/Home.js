import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Inventory Management System</h1>
        <p className="text-xl text-gray-600 mb-8">
          Effortlessly manage your inventory with real-time tracking and insights
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Get Started
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
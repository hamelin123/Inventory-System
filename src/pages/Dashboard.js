import React from 'react';

function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Products</h2>
          <p className="text-3xl font-bold text-blue-600">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Low Stock Items</h2>
          <p className="text-3xl font-bold text-yellow-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Value</h2>
          <p className="text-3xl font-bold text-green-600">$45,000</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
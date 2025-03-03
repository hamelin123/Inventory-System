import React, { useState } from 'react';

function Inventory() {  // แก้จาก Dashboard เป็น Inventory
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', quantity: 50, price: 100 },
    { id: 2, name: 'Product B', quantity: 30, price: 150 },
    { id: 3, name: 'Product C', quantity: 20, price: 200 }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Product Name</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.quantity}</td>
                <td className="py-3 px-4">${product.price}</td>
                <td className="py-3 px-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;  // แก้จาก Dashboard เป็น Inventory
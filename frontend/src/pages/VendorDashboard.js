import React, { useState } from 'react';
import api from '../services/api';

const VendorDashboard = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        name,
        price,
        description,
      };
      const response = await api.post('/products', newProduct);
      console.log('New product added:', response.data);
      // Optionally update state or show success message
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error (show error message, etc.)
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <br />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default VendorDashboard;

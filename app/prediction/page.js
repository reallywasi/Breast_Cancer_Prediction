"use client"
import { useState } from 'react';

export default function Prediction() {
  const [formData, setFormData] = useState({
    radius: '',
    texture: '',
    perimeter: '',
    smoothness: '',
    compactness: '',
    concavity: '',
    concavePoints: '',
    fractalDimension: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement prediction logic here
    alert('Prediction feature is under development.');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">Breast Cancer Awareness</a>
          <a href="/prediction" className="bg-green-500 px-4 py-2 rounded">Breast Cancer Prediction</a>
        </div>
      </nav>

      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Breast Cancer Prediction</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="radius">Radius</label>
              <input type="number" id="radius" name="radius" value={formData.radius} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="texture">Texture</label>
              <input type="number" id="texture" name="texture" value={formData.texture} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="perimeter">Perimeter</label>
              <input type="number" id="perimeter" name="perimeter" value={formData.perimeter} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="smoothness">Smoothness</label>
              <input type="number" id="smoothness" name="smoothness" value={formData.smoothness} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="compactness">Compactness</label>
              <input type="number" id="compactness" name="compactness" value={formData.compactness} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="concavity">Concavity</label>
              <input type="number" id="concavity" name="concavity" value={formData.concavity} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="concavePoints">Concave Points</label>
              <input type="number" id="concavePoints" name="concavePoints" value={formData.concavePoints} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="fractalDimension">Fractal Dimension</label>
              <input type="number" id="fractalDimension" name="fractalDimension" value={formData.fractalDimension} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>
          </div>
          <button type="submit" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">Predict</button>
        </form>
      </main>
    </div>
  );
}

// components/FeaturedCategories.tsx

import Image from 'next/image';
import React from 'react';

const categories = [
  {
    name: 'Clothes',
    imageSrc: '/1.png', // Replace with the path to your image
  },
  {
    name: 'Shoes',
    imageSrc: '/2.png', // Replace with the path to your image
  },
  {
    name: 'Accessories',
    imageSrc: '/3.png', // Replace with the path to your image
  },
  {
    name: 'Phones',
    imageSrc: '/4.png', // Replace with the path to your image
  },
  {
    name: 'Watches',
    imageSrc: '/4.png', // Replace with the path to your image
  },
  {
    name: 'Cameras',
    imageSrc: '/4.png', // Replace with the path to your image
  },
  {
    name: 'Tablets',
    imageSrc: '/4.png', // Replace with the path to your image
  },
  {
    name: 'Laptops',
    imageSrc: '/4.png', // Replace with the path to your image
  },
  // ... other categories
];

const FeaturedCategories: React.FC = () => {
    return (
      <div className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-gray-900 dark:text-white font-bold mb-2">Featured Categories</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Choose from a wide variety of items</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((category) => (
              <div key={category.name} className="w-64"> 
                <div className="bg-gray-100 p-4 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-center">
                  <Image
                    src={category.imageSrc}
                    alt={category.name}
                    width={256} 
                    height={256} 
                    objectFit="cover"
                    className="rounded-lg mb-2"
                  />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#" className="text-base rounded-md bg-blue-600 text-white p-4 hover:bg-blue-700 transition-colors duration-300">ALL CATEGORIES</a>
          </div>
        </div>
      </div>
    );
  };
 

export default FeaturedCategories;
import React from 'react';

function CategoryNav() {
  const categories = ['Phones', 'Laptops', 'Watches', 'Accessories', 'Cameras', 'Tablets'];

  return (
    <aside className='xl:flex hidden h-full rounded-lg '>
      <div className=' flex flex-col w-[250px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <h2 className='bg-blue-700  py-3 font-semibold text-center'>
          Browse Categories
        </h2>
        <div>
          {categories.map((category, index) => (
            <div key={index} className='py-2 px-8 space-y-4 hover:bg-blue-200 cursor-pointer text-white font-semibold'>
              {category}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default CategoryNav
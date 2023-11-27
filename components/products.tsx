import React from 'react'

const products = [
  {
    id: 1,
    name: 'Apple Watch ',
    image: 'https://flowbite.com/docs/images/products/apple-watch.png',

  },
  {
    id: 1,
    name: 'Apple Watch ',
    image: 'https://flowbite.com/docs/images/products/apple-watch.png',

  },
  {
    id: 1,
    name: 'Apple Watch ',
    image: 'https://flowbite.com/docs/images/products/apple-watch.png',

  },

];
interface Product {
  id: number;
  name: string;
  image: string;
  price?: number; // Assuming you have a price field. Make it optional if not all products have a price.
}

function ProductCard({ product }: { product: Product }) {
  return (
 <div className="w-full  max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
      <a href="#">
          <img className="p-4 rounded-t-lg" src={product.image} alt="product image" />
      </a>
      <div className="px-5 pb-5">
          <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
          </a>
          {/* Rating stars and price */}
          
          <div className="flex justify-between items-center mt-2.5 mb-5">
              {/* ... Your rating stars here */}
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
          </div>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Save
          </a>
      </div>
    </div>
  );
}

function ProductsList() {
  return (
    <div className=''>
      <div className='px-20 mt-8'>
       <h1 className=' font-bold text-4xl'> Latest Givers</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsList

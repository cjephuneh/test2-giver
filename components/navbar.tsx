import React from 'react';
import Image from 'next/image';
import { SearchIcon, PhoneIcon, PlusIcon } from '@heroicons/react/outline';
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between px-20 py-2">
      <h1 className="text-xl font-bold">Ask Giver</h1>
      <div className="flex-1 mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a product..."
            className="bg-gray-700 h-10 px-4 pl-10 w-full rounded-lg text-white focus:outline-none"
          />
          <SearchIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Link           
        href="/postanitem">
          <button
            type="button"
            className="text-white flex gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <PlusIcon className='w-5 h-5'/>
            Post an Item

          </button>
        </Link>
        <Link href="/signup">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            login
          </button>
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;

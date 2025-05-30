import React from 'react'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
{/* <!-- Hero Section --> */}
      <div className="text-center pt-24 sm:pt-28 md:pt-36 lg:pt-48">
{/* <!-- Hero Title --> */}
        <h1 className="animate__animated animate__fadeInDown mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-5xl font-extrabold leading-none tracking-tight text-gray-900  lg:text-6xl dark:text-white">
          Plan. Organize. Conquer.
        </h1>
        
{/* <!-- Hero Description --> */}
        <p className="mb-6 sm:mb-8 text-lg sm:text-xl font-normal text-gray-500 sm:px-16 xl:px-48 dark:text-blue-600 text-bold">
          Todomatrix—an intuitive tool to organize, prioritize, and crush your goals. Stay focused, track your progress, and watch productivity soar.
        </p>
        
{/* Hero Button */}
        <Link to="/todolist"  className="inline-flex items-center justify-center px-6 py-3 mb-12 text-lg font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition duration-300">
          Get Started
          {/* <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg> */}
        </Link>
      </div>    
    </>
  );
}

export default HeroSection
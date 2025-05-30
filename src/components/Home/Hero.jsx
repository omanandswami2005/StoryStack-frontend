import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='h-[75vh] flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center'>
        <h1 className='text-4xl lg:text-6xl font-semibold text-amber-200 text-center lg:text-left'>Books: The only escape where you find yourself</h1>
        <p className='mt-4 text-xl text-zinc-300 text-center lg:text-left'>In a world full of noise, books offer a quiet refuge—a place where imagination knows no bounds, and every page brings a new adventure.</p>
        <div className='mt-8'>
            <Link to="/all-books" className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-900 rounded-full'>Discover Books</Link></div>
        </div>
        <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
        <img src='./book.png' alt='book'/></div>
    </div>
  )
}

export default Hero
 
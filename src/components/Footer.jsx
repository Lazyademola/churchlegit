import React from 'react'

const Footer = () => {
  return (
    <div className='  p-12  bg-sky-800 text-center text-gray-200 rounded-t-lg'>
        <a  href='/' className=' font-semibold block text-xl md:text-3xl'>NewBreed Faith Ministries</a>
        <a href='' className=' text-sm md:text-md hover:text-indigo-500'>newbreedfaith@gmail.com</a>
        <p className=' text-xs  mt-2'>
        © NewBreed {new Date().getFullYear()}. All Rights reserved
        </p>
    </div>
  )
}

export default Footer
import React from 'react'

import pstImg from '../public/images/tmslisa.jpg'

const About = () => {
  return (
    <div name="about" className=' w-full '>
      <div className=' md:flex'>
        <div >
        <div className='p-5 md:mt-[70px] '>
            <h1 className='text-5xl font-[Poppins]'>Discover The NewBreed Faith Ministry</h1>
            <p className='text-2xl font-extralight'>We are a Community who firmly believes in God's words. Come journey with us</p>
            <hr className='my-4 '></hr>
        </div>

        <div className='p-3 text-xl font-bold mb-6 mt-[-4]'>
          <p><span>Welcome to the Year 2022, "The year of Abundance and Protection"</span></p>
            <br/>
          <p><span>Welcome to the NewBreed Faith Ministry where our motto for the year is "KEEP STRETCHING". Our church is a church of beautiful convention daring to take a bold step towards the work of God.
            God is ever faithful</span></p>
            <br/>
            <p><span>Welcome to the home of Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore quidem possimus debitis est deleniti magnam voluptate nisi libero incidunt.</span></p>
            <p>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, nesciunt maiores dolorum unde maxime eum libero debitis saepe veniam placeat fuga amet inventore? Alias, unde illum ratione ipsum ullam numquam quaerat in enim laboriosam. Distinctio?</span>
            </p>
            <br/>

            <h3 className=' italic font-extrabold'>Pastor Tunmise and Lisa Bella .</h3>
        </div>
        </div>
     
       
        
        <div className=''>
          <img src={pstImg} alt="photo" className='w-full  ' />
        </div>
      </div>
        
    </div>
  )
}

export default About

import React from 'react'

import pstImg from '../assets/images/tmslisa.jpg'

const About = () => {
  return (
    <div name="about" className=' w-full '>
      <div className=' md:flex'>
        <div >
        <div className='p-5 md:mt-[70px] '>
            <h1 className='text-3xl md:text-5xl font-[Poppins]'>Discover The NewBreed Faith Ministry</h1>
            <p className='text-xl md:text-3xl font-extralight'>We are a Community who firmly believes in God's words. Come journey with us</p>
            <hr className='my-4 '></hr>
        </div>

        <div className='p-3 text-2xl font-bold mb-6 mt-[-4]'>
          <p><span>Welcome to the Year 2022, "The year of Abundance and Protection"</span></p>
            <br/>
          <p><span>Welcome to the NewBreed Faith Ministry where our motto for the year is "KEEP STRETCHING". Our church is a church of beautiful convention daring to take a bold step towards the work of God.
            God is ever faithful</span></p>
            <br/>
            <p><span>Our VISION is one of loving people and changing lives.</span></p>
            <p>
              <span>Our MISSION Statement is to raise a global brand of people for God, whose influence is irrestible and impact,undeniable</span>
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

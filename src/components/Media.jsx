import React from 'react'



import bgImg from '../public/images/bg.jpg'


function Media() {
 
  return (
    <div name="media" className=' w-full  bg-zinc-700 '>
      
       <div className=' container  px-5 py-4 md:py-8  '>
          <div className='  '>
            <div className=' ml-28 md:ml-[400px] mt-2 justify-center md:items-center '>
            <a href={`https://audiomack.com/newbreedfaithministry`} 
            type='button'
              className=' inline-block p-3 hover:bg-cyan-400  md:ml-96 md:mb-6 rounded-md  transition duration-500 bg-pink-500 text-xl md:text-3xl   '>
                <span>Get Messages <br></br></span>
                <span>On Audiomack</span>
                </a>
            </div>
          <div className=' mb-6 md:ml-48 p-6 flex-col  md:border md:border-purple-600 '>
            <div className=' md:grid gap-5 grid-cols-3 grid-rows-2  '>
            <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/the-shepherd-and-the-sheep-pt-2?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0" className='pb-2'></iframe>
            <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/sound-of-freedom-by-pst-tunmise-a-bella?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0" className='pb-2'></iframe>
            <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/the-great-restorer?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0" className='pb-2 hidden md:block'></iframe>
            <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/the-triumphant-attitude-part2?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0 " className='pb-2 hidden md:block'></iframe>
            <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/the-shepherd-and-the-sheep-pt-2?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0" className='pb-2 md:block'></iframe>
            <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/the-god-factor?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0" className=' hidden md:block'></iframe>
            </div>
            
            <div className=' ml-16 mt-4 md:ml-[600px] '>
            <button className='   '>
            <a href={`https://newbreedngblog.vercel.app`}
               className='inline-block p-3 rounded-md transition duration-200 bg-blue-500 text-xl md:text-3xl ' 
            >Weekly Messages</a>
            </button>
           
          </div>
          </div>
         
         
          </div>
         
        </div>


   
    </div>
    
  )
}

export default Media
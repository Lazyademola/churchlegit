import React from 'react'






function Media() {
 
  return (
    <div name="media" className=' w-full  bg-zinc-700 '>
       <div className=' container flex  mx-auto md:w-[50%] justify-center '>
          <div className=' justify-center items-center '>
            <div className=' mt-4 md:items-center ml-12 '>
              <button>
              <a href={`https://audiomack.com/newbreedfaithministry`} 
               type='button'
               className=' inline-block p-6 hover:bg-cyan-400 md:ml-96 md:mb-6 rounded-md  transition duration-500 bg-pink-500 text-xl md:text-3xl   '>
                Audiomack
            </a>
              </button>
            </div>
            <div className='flex p-3 flex-col  '>
              <div className=' md:grid gap-5 grid-cols-3 grid-rows-2  '>
              <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/the-shepherd-and-the-sheep-pt-2?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0" className='pb-2'></iframe>
              <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/sound-of-freedom-by-pst-tunmise-a-bella?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0" className='pb-2'></iframe>
              <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/the-great-restorer?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0" className='pb-2 hidden md:block'></iframe>
              <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/the-triumphant-attitude-part2?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0 " className='pb-2 hidden md:block'></iframe>
              <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/the-shepherd-and-the-sheep-pt-2?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0" className='pb-2 md:block'></iframe>
              <iframe src="https://audiomack.com/embed/newbreedfaithministry/song/the-god-factor?background=1" scrolling="no" width="100%" height="252" scrollbars="no" frameborder="0" className=' hidden md:block'></iframe>
              </div>
              
              <div className=' ml-16 mt-4 md:ml-[30%] '>
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
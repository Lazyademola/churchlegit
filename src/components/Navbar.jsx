import {React, useState} from 'react'

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { Link,  animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    const logoImg = [
        '/images/logo.png'
    ];
    const [nav, setNav] =useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <img src={logoImg} alt="logo" className='ml-4 w-20'/>
                <h1 className='text-2xl hidden md:block font-extralight italic sm:text-3xl mr-8 '>NewBreed</h1>
                <ul className='hidden md:flex md:ml-[941px] bg-slate-400 rounded-lg '>
                <li className=' md:text-xl md:ml-8'><Link activeClass="active"  to="home"  smooth={true} offset={50} duration={500} >Home</Link></li>
                <li className=' md:text-xl md:ml-8'><Link activeClass="active" to="media"  smooth={true} offset={50} duration={500} >Media</Link></li>
                <li className=' md:text-xl md:ml-8'><Link activeClass="active" to="about"  smooth={true} offset={50} duration={500} >About</Link></li>
                <li className=' md:text-xl md:ml-8'><Link activeClass="active" to="section"  smooth={true} offset={50} duration={500} >Ministries</Link></li>

                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className=' text-black border ml-4 mr-[87px] rounded-md bg-indigo-500 hover:bg-black hover:text-indigo-600 px-8 py-3'><Link activeClass="active" to="give"  smooth={true} offset={50} duration={500} >GIVE</Link></button>
            </div>
            <div className='md:hidden mr-4' onClick={handleClick} >
            {!nav ? <AiOutlineMenu className='w-5 '  /> : <AiOutlineClose className='w-5'/> }

            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} activeClass="active"  to="home"  smooth={true} offset={50} duration={500} >Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} activeClass="active" to="about"  smooth={true} offset={50} duration={500} >About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} activeClass="active" to="media"  smooth={true} offset={50} duration={500} >Media</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} activeClass="active" to="section"  smooth={true} offset={50} duration={500} >Ministries</Link></li>

            <div className=' flex flex-col my-4 md:ml-2'>
             <button className=' border rounded-md bg-indigo-500 text-white hover:bg-transparent hover:text-indigo-600 px-8 py-3 mb-4'><Link onClick={handleClose} activeClass="active"  to="give"  smooth={true} offset={50} duration={500} >GIVE</Link></button>
            </div>
        </ul>

    </div>
  )
}

export default Navbar
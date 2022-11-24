import { useState } from 'react';
import React from 'react';
import Button from './Button'


const Nav = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"MEDIA",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"CONTACT",link:"/"},
    ];
    const logoImg= [
        "images/logo.png"
    ];
   let [open,setOpen] =useState(false);
  return (
   
   <div className='shadow-md w-full  top-0 left-0'>
    <div className='md:flex items-center justify-between  bg-[#FDFDBD] py-4 md:px-10 px-7'>
    <div className='font-bold text-4xl  cursor-pointer flex items-center font-[Poppins] text-[#150050] '>
        <span className='text-5xl text-indigo-400 mr-1 pt-2'> 
        <img src={logoImg} className="w-20 " alt=''/> 
        </span>
        <h1 className=' hidden md:inline md:text-3xl italic sm:text-2xl'>NewBreed</h1>
    </div>
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close': 'menu'}></ion-icon>
    </div>
    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#EAEAEA] md:z-auto z-[300] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-100` }>
        {
            Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                   <a href={link.link}  className='text-[#FF74B1] hover:text-gray-600 duration-500'>{link.name}</a>
                </li>
            ))
        }
       <Button>
        GIVE
       </Button>
    </ul>
    </div>
   </div>
  );
}

export default Nav;
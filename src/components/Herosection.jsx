import { useEffect, useState, useRef } from "react";
import React from 'react';
import {AiOutlineVerticalRight,AiOutlineVerticalLeft} from "react-icons/ai";

const sliderImages = [
    "/images/1.2.jpg",
    "/images/1.3.jpg",
    "/images/1.4.jpg",
];
let count = 0;
let slideInterval;
export default function Herosection () {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = ( )=> {
        slideRef.current.classList.remove("fade-anim");
    }

    useEffect( () => {
         slideRef.current.addEventListener('animationend', removeAnimation);
         slideRef.current.addEventListener('mouseenter', pauseSlider);
         slideRef.current.addEventListener('mouseleave', startSlider);

        startSlider();
        return ( )=> {
         pauseSlider();
        }
    },[]);

    const startSlider = () => {
     slideInterval =  setInterval(() => {
            handleOnNextClick()
        },3000)
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);  
    }
    
    
    const handleOnNextClick = () => {
        count = (count + 1) % sliderImages.length
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim'); 
    };
    const handleOnPrevClick = () => {
        const slideLength = sliderImages.length;
        count = (currentIndex +  slideLength - 1) % slideLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    };
  return (
    <div name="home" ref={slideRef} className="w-full h-full select-none ">
        <div className=" aspect-w-16 aspect-h-9">
        <img src={sliderImages[currentIndex]} className="w-full h-screen " alt=""/>
        </div>
        
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button className="bg-black text-white p-1 rounded-full bg-opacity-50
                cursor-pointer hover:bg-opacity-100 transition"
                 onClick={handleOnPrevClick}>
                    <AiOutlineVerticalRight size={30}/>
                    </button>
                <button className="bg-black text-white p-1 rounded-full bg-opacity-50
                cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnNextClick} >
                    <AiOutlineVerticalLeft size={30}/>
                    </button>
           </div>
    </div>
    
  )
}
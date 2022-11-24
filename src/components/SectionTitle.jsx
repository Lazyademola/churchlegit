import React from 'react'

const SectionTitle = ({ children, id }) => {
  return (
    <h1 id={id && id} className=" md:text-5xl sm:text-4xl font-bold mb-5 text-[#FF74B1] ">
        {children}
    </h1>
  )
}


export default SectionTitle

import React from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar/navbar'

function Kedar() {
  return (
   <>
   <div className="p-2  border-black flex w-full h-screen md:flex-row flex-col">
      <div className='p-4 pl-16 w-1/2 flex flex-col item-center justify-center gap-10'>
      <h1 className='text-2xl'>Welcome to SIGCE</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Pariatur distinctio deleniti corrupti, sed delectus rerum omnis soluta illum harum ea 
        labore nemo consequatur similique vel, iure tempora. Vitae, animi illo.</p>
        <button className='p-4 bg-black text-white rounded-full w-48'>Join With Us</button>
      </div>
      <div className='p-4 w-1/2 flex items-center justify-center '> <Image  className = 'w-fit h-fit ' alt='login' width='300' height = '300' src = '/login.png'/></div>  
   </div>
   
   </>
  )
}

export default Kedar
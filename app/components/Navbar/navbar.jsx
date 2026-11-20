import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const navbar = () => {
  return (
    <div className='flex flex-row gap-10 w-full bg-green-100 p-2 border-b border-green-300 sticky top-0 z-50 shadow'>
        <div className=" p-2 logo w-1/4  flex justify-center"> 
        <div className=' rounded-full w-40 flex justify-center'>
          <Link href={'/'}><Image alt ='logo'className='w-fit h-20' width='10' height='10'src='/logo.svg'/></Link>
          </div>
          </div>
        <div className=" p-2 links w-2/4 flex justify-center gap-16 items-center border-black md:flex hidden">
        <Link href={'/'}>Home</Link>
        <Link href={'/contact'}>Contact </Link>
        {/* <Link href={'/about'}>About</Link> */}
        {/* <Link href ={'/docs'}>Docs</Link> */}
        </div>
        <div className=" p-2 btn w-1/4  flex justify-center items-center hidden lg:flex xl:flex md:hidden "><button className='bg-black w-48 h-12 text-white p-2 rounded-full shadow'>Login</button></div>
    </div>
  )
}

export default navbar


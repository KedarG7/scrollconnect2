import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const navbar = () => {
  return (
    <div className='flex flex-row gap-10 w-full p-4 border-b border-w-90% sticky top-0 z-50'>
        <div className=" p-2 logo w-1/4  flex justify-center"> <div className='shadow rounded-full w-40 flex justify-center'><Image alt ='logo'className='w-fit h-20' width='10' height='10'src='/logo.svg'/></div></div>
        <div className=" p-2 links w-2/4 flex justify-center gap-16 items-center border-black md:flex hidden">
        <Link href={'/'}>Contact </Link>
        <Link href={'/about'}>About</Link>
        <Link href ={'/'}>Number</Link>
        </div>
        <div className=" p-2 btn w-1/4  flex justify-center items-center"><button className='bg-black w-48 h-12 text-white p-2 rounded-full shadow'>Join Us !</button></div>
    </div>
  )
}

export default navbar


import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
   <>
   <div className="main w-full flex flex-row">

   <div className="connectcard w-1/2   h-screen flex justify-center items-center p-2">
        <div className="roundedcard w-2/4 border border-green-500 shadow-lg h-120 rounded-2xl">
                <div className="profile-img w-full h-1/3 flex justify-center items-center">
                <div className="profile-photo w-30 h-30 border border-green-200 rounded-full bg-green-100 flex justify-center items-center">
                  <Image width='80' height='80' alt='profile-image' src='./profile-default.svg'/>
                  </div></div>
                <div className="profile-details h-2/3 ">
                <div className="profile-in-detail bg-green-100 w-full h-4/5">
                <div className="name p-2 h-1/3 flex justify-center items-center">
                  <p className='text-2xl'>Alex Morgan</p>
                </div>
                <div className="role p-2 h-1/3 flex items-center justify-center">
                  <p className='text-2xl'>Frontend Developer</p>
                </div>
                <div className="idnumber p-2 h-1/3 flex items-center justify-center">
                  <p className='text-2xl'>XA-6032</p>
                </div>
                </div>
                <div className="profile-footer w-full h-1/5 p-2 flex justify-end items-end"><p>ScrollConnect.com</p></div>
                </div>
        </div>
   </div>
   <div className="connectimage w-1/2 h-screen flex justify-center items-center">
   <Image src='/Contact us-bro.svg' alt='contact-image' width='500' height='500'/>
   </div>

   </div>
  
   </>
  )
}

export default Contact
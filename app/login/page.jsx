"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import {EyeClosed, Link as Link1,Rocket,BotMessageSquare,SquareArrowRightEnter,Mail,KeyRound,Eye} from 'lucide-react'


const Login = () => {

  const [showpassword,setshowpassword] = useState(null);

  return (
    <>
    <div className="login-main-screen w-full h-screen border flex justify-center items-center">
    <div className="login-card w-1/4 h-172 shadow-lg border border-green-500 rounded-lg">
      <div className="login-img h-1/4  flex justify-center items-center gap-4">
      <p className="text-3xl text-green-500 font-semibold tracking-widest">SIGN IN</p>
      <SquareArrowRightEnter size={42} strokeWidth={1.5} color="gray"/>
      </div>
      <div className="login-credentials-input h-3/4 rounded-b-lg bg-green-100 flex flex-col justify-center items-center ">
      <div className="h-2/3   flex flex-col  justify-center  gap-2">
      <div className="w-auto h-auto flex flex-col gap-3">
      <div className="email-div w-78 flex gap-1 h-14 justify-center items-center bg-white outline outline-green-300 rounded-lg">
        <div className="w-8 flex justify-center items-center">
          <Mail size={20} color="gray"/>
        </div>
          <div className="border h-6 border-gray-200"></div>
          <input type="email" className="bg-white px-1 rounded-lg outline-none  w-64 h-14"  placeholder="Email"
          />
      </div>
      <div className="password-div w-78 flex gap-1 h-14 justify-center items-center bg-white outline outline-green-300 rounded-lg">
        <div className="w-8 flex justify-center items-center">
          <KeyRound size={20} color="gray"/>
        </div>
          <div className="border h-6 border-gray-200"></div>
          <input type={showpassword?"text":"password"} className="bg-white px-1 rounded-lg outline-none  w-55 h-14"  placeholder="Password"
          />
          <div className="w-7 h-8 flex justify-center items-center " >
            <button onClick={()=>setshowpassword(!showpassword)}>{showpassword?<Eye size={20} color="gray"/>:<EyeClosed size={20} color="gray"/>}</button>
          </div>
      </div>
      <div className="forgot-password-div h-6 w-78 flex justify-end items-center px-2">
          <Link href={'/'}><p className="text-green-500">Forgot Password ?</p></Link>
      </div>
      </div>
      <button className="bg-green-500 w-78 h-12 text-white p-2 rounded-lg shadow hover:bg-green-400 shadow hover:-translate-y-0.5 shadow-lg active:scale-98 cursor-pointer">Sign In</button>
      </div>
      <div className="h-1/3  w-full">
      <div className="or-continue-with flex justify-center items-center text-gray-400 gap-3">
        <span className="h-0 w-24 border-b border-gray-300"></span>
        <p>or continue with</p>
        <span className="h-0 w-24 border-b border-gray-300"></span>
      </div>
        <div className="social-icons  w-full h-1/2 flex justify-center items-center gap-12">
          <div className="google w-16 bg-blue-300 h-12 flex justify-center items-center rounded-full hover:shadow hover:-translate-y-0.5 active:scale-98"><Link1 strokeWidth={1.5} color="#1877F2" size={20}/></div>
          <div className="google w-16 h-12 flex justify-center items-center rounded-full bg-red-200 hover:shadow hover:-translate-y-0.5 active:scale-98"><Rocket strokeWidth={1.5} color="#FF0000" size={20}/></div>
          <div className="google w-16 h-12 flex justify-center items-center rounded-full bg-purple-200 hover:shadow hover:-translate-y-0.5 active:scale-98"><BotMessageSquare strokeWidth={1.5} color="#800080" size={20}/></div>
          
        </div>
        <div className="sign-up-linking flex w-full h-1/3 justify-center items-start">
          <p>New here?</p>
          <Link href={'/sign-up'}><span className="text-green-500">Create Account</span></Link>
        </div>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="main-footer w-full relative  bottom-0 h-40">
        <div className="footer-details-block w-full h-3/4 bg-green-100 flex flex-row px-16">
        <div className="footer-title w-2/3  h-full p-4 flex flex-col gap-2">
            <h1 className='text-2xl'>ScrollConnect.com</h1>
            <p>We fix the bugs as you never imagined!</p>
        </div>
        <div className="footer-links-block flex flex-row w-1/3">
            <div className="product-details-block w-1/2 ">
            <div className="product-title px-2 h-1/4 flex justify-start items-end">
                <p className='font-medium'>Product</p>
            </div>                
                <div className="product-links h-3/4 w-full px-6 flex flex-col justify-center gap-1 items-start text-sm ">
                    <p>- Platform Overview</p>
                    <p>- Integrations</p>
                    <p>- Extensions</p>
                </div>
            </div>
            <div className="product-details-block w-1/2 ">
            <div className="product-title px-2 h-1/4 flex justify-start items-end">
                <p className='font-medium'>Company</p>
            </div>                
                <div className="product-links h-3/4 w-full px-6 flex flex-col gap-1 justify-center items-start text-sm ">
                    <p>- Platform Overview</p>
                    <p>- Integrations</p>
                    <p>- Extensions</p>
                </div>
            </div>
            {/* <div className="company-details-block w-1/2 border">Company</div> */}
        </div>
        </div>
        <div className="copyright-block w-full h-1/4 flex justify-center items-center gap-2 bg-green-200 text-sm">
        <p>© Copyright 2026</p>
        <span>.</span>
        <p>Terms and Conditions</p>
        <span>.</span>
        <p>Privacy Policy</p>
        </div>
    </div>
    </>
  )
}

export default Footer
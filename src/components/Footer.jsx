import React from 'react'
import Button from '../utils/Button'
import Rounded from '../commons/rounded'
import Magnetic from '../commons/Magnetic'

function Footer() {
    return (
        <div className='w-screen overflow-hidden relative h-[135vh] bg-[#112323] text-[#f2f2f2]'>
            <h1 className='px-10 relative pt-[15vh] left-1/2 -translate-x-1/2 text-[160px] Inter flex flex-col justify-center items-center'>
                <div className='flex flex-row gap-2'>
                    <span className='font-light tracking-tighter leading-none'>LET’S </span>
                    <span className='font-semibold leading-none'> WORK</span>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <Magnetic>
                        <div className='block h-[65px] w-[150px] rounded-full bg-[url("./ing.png")] bg-center bg-cover'></div>
                    </Magnetic>
                    <h2 className='text-[67px] Inter font-semibold'>TOGETHERE</h2>
                </div>
                <Rounded staticbg="#71B0BA" backgroundColor="#123123">
                    <Button bg="transparent" text="Call To Action" color="#f2f2f2" className="text-[18px]" />
                </Rounded>
            </h1>
            <img src="./ftcircle.png" alt="" className='absolute -top-[30px] -right-[100px]' />
            <img src="./ftcircle.png" alt="" className='absolute top-[30%] -left-[100px]' />

            <div className="links flex flex-col gap-0 justify-center mt-[15vh]">
                <a href="https://www.instagram.com/mughees.rashid/" target="_blank" className='link text-[30px] w-full  Inter font-light py-[3vh] pl-[5vw] border-y border-solid border-[#f2f2f2]'><span className='z-10 relative'>Instagram</span></a>
                <a href="https://www.linkedin.com/in/mughees-rashid-2b1589210/" target='_blank' className='link text-[30px] Inter font-light py-[3vh] pl-[5vw] border-b border-solid border-[#f2f2f2]'><span className='z-10 relative'>LinkedIn</span></a>
                <a href="https://github.com/mugheesrashid" target='_blank' className='link text-[30px] Inter font-light py-[3vh] pl-[5vw] border-b border-solid border-[#f2f2f2]'><span className='z-10 relative'>Github</span></a>
            </div>
            <div className="lower px-10 pt-5 w-full h-[auto] flex justify-between items-center">
                <div className="btns flex flex-row justify-center gap-5 items-center">
                    <Rounded staticbg="#71B0BA" backgroundColor="#123123">
                        <a href="mailto:512mughees@gmail.com" className="block">
                            <Button bg="transparent" text="512mughees@gmail.com" color="#f2f2f2" className="" />
                        </a>
                    </Rounded>
                    <Rounded staticbg="#71B0BA" backgroundColor="#123123">
                        <a href="tel:+923135812458" className="block">
                            <Button bg="transparent" text="+923135812458" color="#f2f2f2" className="" />
                        </a>
                    </Rounded>
                </div>
                <div className="quick flex flex-row justify-center items-center gap-5">
                    <h2 className='text-[18px] Inter py-[3vh] pl-[5vw] font-semibold'>Quick Links:</h2>
                    <div className="links flex flex-col gap-3 justify-center">
                        <h2 className=''>About Me <span className='text-[14px] text-[#808181]'>(Coming Soon)</span></h2>
                        <h2 className=''>Projects <span className='text-[14px] text-[#808181]'>(Coming Soon)</span></h2>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2025 Mughees — All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
'use client';
import Image from "next/image";
import { FiCalendar } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import pin from "./pin-location.svg"
import aa from "./imgs/aa.png"
import bb from "./imgs/bb.png"
import cc from "./imgs/cc.png"
import ee from "./imgs/ee.png"
import dd from "./imgs/dd.png"
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";

type eventProp = {
  date: Date,
  setShowPopup: (show: boolean) => void
}

function EventPopup({date, setShowPopup}:eventProp) {
  return (
    <div onClick={()=>setShowPopup(false)} className='fixed top-0 left-0 right-0 bottom-0 bg-[#101828B2] z-50 flex justify-center items-center '>
      {/* stop propogation on click */}

      <div onClick={(e)=>{ e.stopPropagation()}} className="w-[400px] p-[24px] min-h-[500px] bg-white rounded-md flex flex-col items-center shadow-lg">

        <div className="flex flex-col   w-[68px] h-[56px]   p-1 text-xs justify-center rounded-lg uppercase items-center  border-[1px] border-[#E9EAEB]   gap-2">
                <span className='text-[#717680] text-[12px] font-semibold'>NOV</span>
                {/* <span className='text-[#717680] text-[12px] font-semibold'>{date.toLocaleString("en-US", { month: "short" })}</span> */}
                <span className="font-bold text-[18px] text-[#20356A]">02</span>
                       {/* <span className="font-bold text-[18px] text-[#20356A]">{date.getDate()}</span> */}
         </div>
         <div className=" text-center my-4">
          <p className='text-[18px] text-[#181D27] font-bold leading-relaxed mb-1'>Group Name</p>
          <p className='text-[14px] text-[#535862]'>Branch Name</p>
         </div>
         <div className=" text-[14px] leading-6 w-full ">
            <p className="font-[500] mb-2">Details</p>
            <p className="flex  text-[#535862] items-center gap-4"><FiCalendar/>Friday, Jan 10, 2025</p>
            <p className="flex  text-[#535862] items-center gap-4"> <FiClock/>1:30 PM - 3:30 PM</p>
            <p className="flex  text-[#535862] items-center gap-4"> <Image width={40} height={40} className="w-[14px]" src={pin} alt="location" /> District, Road, City</p>
         </div>

          <div className=" text-[14px] leading-6 w-full mt-5 ">
            <p className="font-[500] mb-2">Manager</p>
            <div className="flex items-center justify-start gap-4">
              <div className="bg-[#E9DCBB] w-[40px] h-[40px] overflow-hidden rounded-full">
                <Image width={40} height={40} src={aa} alt="alenazi" className="w-[40px]" />
              </div>
              <div className="text-[14px]">
                <p className="font-semibold text-[#181D27]">Mohammed Alenazi</p>
                <p className="text-[#535862]">malenazi@ajyalacademy.sa</p>
              </div>
            </div>
            
         </div>

         <div className=" text-[14px] leading-6 w-full mt-5 ">
            <p className="font-[500] mb-2">Trainess</p>
            <div className="flex justify-start">
              <div className="bg-[#E9DCBB] w-[40px] h-[40px] overflow-hidden rounded-full flex justify-center items-center border-2 border-[#FFFFFF]">
                <Image width={40} height={40} src={aa} alt="alenazi" className="w-[40px]" />
              </div>
              <div className="bg-[#C7D1B0] w-[40px] h-[40px] overflow-hidden rounded-full flex justify-center items-center border-2 border-[#FFFFFF] -ml-[15px]">
                <Image width={40} height={40} src={bb} alt="alenazi" className="w-[40px]" />
              </div>
              <div className="bg-[#CED1E5] w-[40px] h-[40px] overflow-hidden rounded-full flex justify-center items-center border-2 border-[#FFFFFF]  -ml-[15px]">
                <Image width={40} height={40} src={cc} alt="alenazi" className="w-[40px]" />
              </div>
              <div className="bg-[#DDD0BE] w-[40px] h-[40px] overflow-hidden rounded-full flex justify-center items-center border-2 border-[#FFFFFF]  -ml-[15px]">
                <Image width={40} height={40} src={dd} alt="alenazi" className="w-[40px]" />
              </div>
              <div className="bg-[#DFC2C0] w-[40px] h-[40px] overflow-hidden rounded-full flex justify-center items-center border-2 border-[#FFFFFF]  -ml-[15px]">
                <Image width={40} height={40} src={ee} alt="alenazi" className="w-[40px]" />
              </div>
              <div className="bg-[#F5F5F5] w-[40px] h-[40px] overflow-hidden rounded-full flex justify-center items-center border-2 border-[#FFFFFF]  -ml-[15px]">
                <p className="font-semibold text-[#717680] text-[16px]">OR</p>
              </div>
            </div>
            <p className="font-[500] mt-2">6 trainess</p>
            </div>

            <div className=" flex justify-between w-full mt-7">

              <button onClick={()=>{}} className=" cursor-pointer hidden md:flex mr-auto font-semibold text-[16px] text-[#535862]   justify-center items-center gap-2">
                  <FaRegTrashCan/> Delete
              </button>
              <div className="flex flex-col md:flex-row  justify-end items-stretch md:items-center gap-3 w-full">
                <button onClick={()=>setShowPopup(false)} className="order-2 md:order-1 border border-[#D5D7DA] rounded-md px-5 py-3 h-[44px] text-[16px] text-[#414651] flex justify-center shadow-md items-center ">Cancel</button>
                 <button className=" border bg-[#20356A] shadow-md border-[#20356A] rounded-md px-5 py-3 h-[44px] text-[16px] text-white flex justify-center items-center ">Edit</button>
              </div>
            </div>



      </div>
    </div>
  )
}

export default EventPopup
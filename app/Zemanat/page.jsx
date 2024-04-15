import React from 'react'
import { ICONCOLOR } from "../../utils/constants";
import Link from "next/link";

function Zemanat() {
  return (
    <div className="flex flex-col    h-max mb-[65px] scroll-auto bg-white ">
    <div className="flex  items-center justify-between p-4 border-b border-gray-300 mb-3">
      <div className="flex flex-1">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={ICONCOLOR}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
      <div className="flex flex-1 justify-center">
        <p className="text-slate-800 ">ضمانت</p>
      </div>
      <div className="flex flex-1"></div>
    </div>
   
    <div className="p-4">
      <div className="flex flex-col   pb-4 mb-2 border-b border-gray-300">
        <div className="flex gap-x-1 items- text- mb-2">
          <p className="text-slate-500">شعبه:</p>
          <p className="text-slate-800 font-bold ">مرکزی</p>
        </div>
        <div className="flex flex-col gap-y-1 text-base">
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">وام گیرنده:</p>
            <p className="text-slate-800 font-bold ">مجتبی کجوری</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">شماره وام:</p>
            <p className="text-slate-800  font-bold">1/6/20/123456</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">تاریخ وام:</p>
            <p className="text-slate-800 font-bold ">1400/01/01</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">کل اقساط:</p>
            <p className="text-blue-500 font-bold ">36</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">اقساط باقیمانده:</p>
            <p className="text-red-500 font-bold ">12</p>
          </div>          
        </div>
      </div> 
      <div className="flex flex-col   pb-4 mb-2 border-b border-gray-300">
        <div className="flex gap-x-1 items-center text-lg mb-2">
          <p className="text-slate-500">شعبه:</p>
          <p className="text-slate-800 font-bold">کشاورز</p>
        </div>
        <div className="flex flex-col gap-y-1 text-base">
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">وام گیرنده:</p>
            <p className="text-slate-800 font-bold">مهدی عسگری</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">شماره وام:</p>
            <p className="text-slate-800  font-bold">2/6/20/123456</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">تاریخ وام:</p>
            <p className="text-slate-800 font-bold">1403/01/01</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">کل اقساط:</p>
            <p className="text-blue-500  font-bold">36</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">اقساط باقیمانده:</p>
            <p className="text-red-500 font-bold">35</p>
          </div>         
        </div>
      </div>
      <div className="flex flex-col   pb-4 mb-2 border-b border-gray-300">
        <div className="flex gap-x-1 items-center text-lg mb-2">
          <p className="text-slate-500">شعبه:</p>
          <p className="text-slate-800 font-bold">کشاورز</p>
        </div>
        <div className="flex flex-col gap-y-1 text-base">
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">وام گیرنده:</p>
            <p className="text-slate-800 font-bold">ابراهیم میرزایی</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">شماره وام:</p>
            <p className="text-slate-800 font-bold">2/6/20/123456</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">تاریخ وام:</p>
            <p className="text-slate-800 font-bold">1397/01/01</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">کل اقساط:</p>
            <p className="text-blue-500 font-bold">36</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <p className="text-slate-500">اقساط باقیمانده:</p>
            <p className="text-red-500 font-bold ">0</p>
          </div>
         
        </div>
      </div>   
    </div>
  </div>
  )
}

export default Zemanat
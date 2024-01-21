import Image from "next/image";
import {ICONCOLOR} from '../utils/constants'

export default function Home() {
  return (
    // mobile mode
    <div className="sm:hidden h-[100vh]   bg-gray-300">
      <header className="bg-white h-10 flex justify-between items-center">
        <div className="pr-2">
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div>قرض الحسنه توسعه عصر</div>
        <div className="pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

        </div>
      </header>
      <div className=" flex flex-col mx-2 mt-3  rounded-md  bg-white text-right  ">
        <h1>خدمات پرکاربرد</h1>
        <div className="flex flex-wrap  h-36  ">
          <div className="rounded-md bg-slate-600 w-2 h-1">1</div>
          <div className="rounded-md bg-slate-600 w-2 h-1">2</div>
          <div className="rounded-md bg-slate-600 w-2 h-1">3</div>
          <div className="rounded-md bg-slate-600 w-2 h-1">4</div>
        </div>
      </div>
    </div>
  );
}

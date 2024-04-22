import React from 'react'
import Link from "next/link";
import { ICONCOLOR,CHEVRONHEADER } from "@/utils/constants";

export default function Header({param}) {
  return (
    <div className="flex  items-center justify-between border-b border-gray-300   p-4 bg-gray-100 ">
        <div className="flex flex-1">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={CHEVRONHEADER}
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
          <p className="text-slate-800 ">{param}</p>
        </div>
        <div className="flex flex-1"></div>
      </div>
  )
}

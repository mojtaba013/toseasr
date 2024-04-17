import React from 'react'
import Link from "next/link";
import { ICONCOLOR } from "@/utils/constants";

export default function Header() {
  return (
    <div className="flex  items-center justify-between   p-4 bg-orange-50 ">
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
          <p className="text-slate-800 ">وام های من</p>
        </div>
        <div className="flex flex-1"></div>
      </div>
  )
}

"use client";

import React from "react";
import SelectComponent from "../../components/SelectComponent";
import NumberComponent from "../../components/NumberComponent";
//import Button from "../../components/Button";
import Link from "next/link";
import { ICONCOLOR } from "@/utils/constants";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
function Moneytransfer() {
  return (
    <div className="bg-white flex flex-col justify-start items-center  h-screen">
      <div className="flex w-full  items-center justify-between   p-4 bg-white ">
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
          <p className="text-slate-800 ">انتقال وجه</p>
        </div>
        <div className="flex flex-1"></div>
      </div>
      <SelectComponent aa={"حساب مبدا"} p1={'جامع'} p2={'اکرام'} p3={'فجر'}/>
      <SelectComponent aa={"حساب مقصد"} p1={'ملی'} p2={'سپه'} p3={'صادرات'}/>
      <NumberComponent />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[340px] mt-8">
        ادامه
      </button>
    </div>
  );
}

export default Moneytransfer;

import React from "react";
import Link from "next/link";
import { ICONCOLOR } from "@/utils/constants";

function Average() {
  return (
    <div className="flex flex-col gap-y-4   h-max mb-[70px] scroll-auto bg-white ">
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
          <p className="text-slate-800 ">معدل حساب</p>
        </div>
        <div className="flex flex-1"></div>
      </div>
      <div className="flex flex-row justify-between items-center px-4 gap-x-1">
        <label>شعبه:</label>
        <select
          className="border w-full  border-gray-300 rounded"
          name="shoobe"
          id=""
        >
          <option value="1">مرکزی</option>
          <option value="2">کشاورز</option>
          <option value="3">باغ فردوس</option>
          <option value="4">هفت تیر</option>
        </select>
      </div>
      <div className="flex flex-row justify-between items-center px-4 gap-x-1">
        <label>حساب:</label>
        <select
          className="border w-full  border-gray-300 rounded"
          name="shoobe"
          id=""
        >
          <option value="1">جامع</option>
          <option value="2">اکرام</option>
          <option value="3">فجر</option>
          <option value="4">عیدانه 97</option>
        </select>
      </div>
      <div className="px-4 mt-4">
        <button className="bg-blue-500 w-full rounded-md py-2 text-white">
          محاسبه میانگین
        </button>
      </div>

      <div className="flex justify-between items-center px-4">
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
            d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
          />
        </svg>
      </div>
      <div className="p-4">
        <div className="flex flex-col   pb-4 mb-2 border-b border-gray-300">
          <div className="flex gap-x-1 items-center text-lg">
            <p className="text-slate-500">مبلغ:</p>
            <p className="text-blue-500 font-bold">100,000,000 ریال</p>
          </div>
          <div className="flex flex-col gap-y-1 text-base">
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500 ">بازپرداخت:</p>
              <p className="text-slate-800 font-bold">10 ماه</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">قسط:</p>
              <p className="text-slate-800 font-bold">11,000,000 ریال</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">کارمزد:</p>
              <p className="text-slate-800 font-bold">4,000,000 ریال</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">نرخ کارمزد:</p>
              <p className="text-red-500 font-bold ">%4</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col   pb-4 mb-2 border-b border-gray-300">
          <div className="flex gap-x-1 items-center text-lg">
            <p className="text-slate-500">مبلغ:</p>
            <p className="text-blue-500 font-bold">200,000,000 ریال</p>
          </div>
          <div className="flex flex-col gap-y-1 text-base">
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">بازپرداخت:</p>
              <p className="text-slate- font-bold ">12 ماه</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">قسط:</p>
              <p className="text-slate- font-bold ">18,000,000 ریال</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">کارمزد:</p>
              <p className="text-slate-800 font-bold ">2,000,000 ریال</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">نرخ کارمزد:</p>
              <p className="text-red-500 font-bold ">%1</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col   pb-4 mb-2 border-b border-gray-300">
          <div className="flex gap-x-1 items-center text-lg">
            <p className="text-slate-500">مبلغ:</p>
            <p className="text-blue-500 font-bold ">200,000,000 ریال</p>
          </div>
          <div className="flex flex-col gap-y-1 text-base">
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">بازپرداخت:</p>
              <p className="text-slate-800 font-bold ">36 ماه</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">مبلغ قسط:</p>
              <p className="text-slate-800 font-bold ">6,000,000 ریال</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">کارمزد:</p>
              <p className="text-slate-800 font-bold ">4,000,000 ریال</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">نرخ کارمزد:</p>
              <p className="text-red-500 font-bold ">%4</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col   pb-4 mb-2 border-b border-gray-300">
          <div className="flex gap-x-1 items- text-lg">
            <p className="text-slate-500">مبلغ:</p>
            <p className="text-blue-500 font-bold">50,000,000 ریال</p>
          </div>
          <div className="flex flex-col gap-y-1 text-base">
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">بازپرداخت:</p>
              <p className="text-slate-800 font-bold ">20 ماه</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">مبلغ قسط:</p>
              <p className="text-slate-800 font-bold ">4,000,000 ریال</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">کارمزد:</p>
              <p className="text-slate-800 font-bold ">4,000,000 ریال</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="text-slate-500">نرخ کارمزد:</p>
              <p className="text-red-500 font-bold ">%4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Average;

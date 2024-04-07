import React from "react";
import Link from "next/link";
import { ICONCOLOR } from "@/utils/constants";

function Etebarat() {
  return (
    <div>
          <div className="flex  items-center justify-between   p-4 bg-white ">
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
      <div className="flex flex-col gap-y-4 mb-24 mt-4">
        <div className="px-4">
          <div className="flex flex-col bg-white rounded-2xl p-4 ">
            <div className="flex   justify-between mb-4">
              <p className="text-slate-800 font-bold text-lg">
                وام طرح عیدانه 97
              </p>
              <p className="text-sm">شعبه کشاورز</p>
            </div>
            <div className="flex  flex-col gap-y-2 mb-4">
              <div className="flex gap-x-1">
                <p className="text-slate-500">وام گیرنده:</p>
                <p>مجتبی کجوری</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">شماره وام:</p>
                <p>2/6/20/145711</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">مبلغ وام:</p>
                <p>100,000,000</p>
              </div>
              <div className="flex items-center  gap-x-1">
                <p className="text-slate-500">مانده وام:</p>
                <p>50,000,000</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">سررسید قسط بعدی:</p>
                <p>1403/02/25</p>
              </div>
            </div>
            <div className="border-b-2 border-gray-200 w-full mb-4"></div>
            <div className="flex flex-row-reverse gap-x-12 items-center justify-between   text-slate-800">
              <div className="text-center py-2 w-full border-2 border-blue-200 rounded-lg bg-blue-100">
                <p className="text-blue-600">پرداخت</p>
              </div>
             
              <div className="text-center py-2 w-full border-2 border-blue-200 rounded-lg ">
                <p className="text-blue-600">جزئیات</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="flex flex-col bg-white rounded-2xl p-4 ">
            <div className="flex  items-center justify-between mb-4">
              <p className="text-slate-800 font-bold text-lg">وام طرح اکرام </p>
              <p className="text-sm">شعبه مرکزی</p>
            </div>
            <div className="flex  flex-col gap-y-2 mb-4">
              <div className="flex gap-x-1">
                <p className="text-slate-500">وام گیرنده:</p>
                <p>مجتبی کجوری</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">شماره وام:</p>
                <p>1/6/200/155610</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">مبلغ وام:</p>
                <p>100,000,000</p>
              </div>
              <div className="flex items-center  gap-x-1">
                <p className="text-slate-500">مانده وام:</p>
                <p>50,000,000</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">سررسید قسط بعدی:</p>
                <p>1403/02/25</p>
              </div>
            </div>
            <div className="border-b-2 border-gray-200 w-full mb-4"></div>
            <div className="flex flex-row-reverse gap-x-12 items-center justify-between   text-slate-800">
              <div className="text-center py-2 w-full border-2 border-blue-200 rounded-lg bg-blue-100">
                <p className="text-blue-600">پرداخت</p>
              </div>
             
              <div className="text-center py-2 w-full border-2 border-blue-200 rounded-lg ">
                <p className="text-blue-600">جزئیات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Etebarat;

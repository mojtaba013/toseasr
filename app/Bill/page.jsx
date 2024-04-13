import React from "react";
import Link from "next/link";
import { ICONCOLOR } from "../../utils/constants";

function Bill() {
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
          <p className="text-slate-800 ">صورتحساب</p>
        </div>
        <div className="flex flex-1"></div>
      </div>

      <div className="flex flex-row justify-between items-center px-4 gap-x-1">
        <label htmlFor="shoobe">شعبه:</label>
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
        <label htmlFor="shoobe">حساب:</label>
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
      <div className="flex justify-between items-center px-4">
        <label htmlFor="">از تاریخ:</label>
        <input
          className="border rounded text-center"
          type="text"
          value="1400/01/01"
        />
      </div>
      <div className="flex justify-between items-center px-4 mb-4">
        <label htmlFor="">تا تاریخ:</label>
        <input
          className="border rounded text-center "
          type="text"
          value="1403/06/01"
        />
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
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
        <div className="flex flex-col gap-y-1  pb-4 mb-2 border-b border-gray-300">
          <p className="text-slate-800">برداشت</p>
          <p className="text-red-500 font-bold">100,000,000 ریال</p>
          <div className="flex flex-row gap-x-1 text-gray-500 text-sm">
            <p>1403/01/01</p>
            <p>ساعت 11:38</p>
          </div>
          <p className="text-gray-500 text-sm">شماره پیگیری 456789</p>
        </div>
        <div className="flex flex-col gap-y-1  pb-4 mb-2 border-b border-gray-300">
          <p className="text-slate-800">واریز</p>
          <p className="text-green-500 font-bold">50,000,000 ریال</p>
          <div className="flex flex-row gap-x-1 text-gray-500 text-sm">
            <p>1403/01/12</p>
            <p>ساعت 9:20</p>
          </div>
          <p className="text-gray-500 text-sm">شماره پیگیری 123698</p>
        </div>
        <div className="flex flex-col gap-y-1  pb-4 border-b border-gray-300">
          <p className="text-slate-800">برداشت</p>
          <p className="text-red-500 font-bold">6,000,000 ریال</p>
          <div className="flex flex-row gap-x-1 text-gray-500 text-sm">
            <p>1403/01/22</p>
            <p>ساعت 12:44</p>
          </div>
          <p className="text-gray-500 text-sm">شماره پیگیری 741852</p>
        </div>
        <div className="flex flex-col gap-y-1  pb-4 mb-2 ">
          <p className="text-slate-800">واریز</p>
          <p className="text-green-500 font-bold">35,000,000 ریال</p>
          <div className="flex flex-row gap-x-1 text-gray-500 text-sm">
            <p>1403/01/07</p>
            <p>ساعت 7:55</p>
          </div>
          <p className="text-gray-500 text-sm">شماره پیگیری 852123</p>
        </div>
      </div>
    </div>
  );
}

export default Bill;

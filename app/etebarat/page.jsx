import React from "react";

import { ICONCOLOR } from "@/utils/constants";
import Header from '../../components/Header'

function Etebarat() {
  return (
    <div>
      <Header param={"وام های من"}/>
      <div className="flex flex-col gap-y-4 mb-24 mt-4">
        <div className="px-4">
          <div className="flex flex-col bg-gradient-to-l bg-white rounded-2xl p-4 ">
            <div className="flex   justify-between mb-4">
              <p className=" font-bold text-lg">
                وام طرح عیدانه 97
              </p>
              <p className="text-sm text-blue-500">شعبه کشاورز</p>
            </div>
            <div className="flex  flex-col gap-y-2 mb-4">
              <div className="flex gap-x-1">
                <p className="text-slate-500">وام گیرنده:</p>
                <p className="font-bold ">مجتبی کجوری</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">شماره وام:</p>
                <p className="font-bold ">2/6/20/145711</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">مبلغ وام:</p>
                <p className="font-bold">100,000,000</p>
              </div>
              <div className="flex items-center  gap-x-1">
                <p className="text-slate-500">مانده وام:</p>
                <p className="font-bold">50,000,000</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">سررسید قسط بعدی:</p>
                <p className="font-bold">1403/02/25</p>
              </div>
            </div>
            <div className="border-b-2 border-gray-200 w-full mb-4"></div>
            <div className="flex flex-row-reverse gap-x-12 items-center justify-between   text-slate-800">
              <div className="text-center py-2 w-full border-2 border-blue-300 rounded-lg bg-blue-100">
                <p className="text-slate-800">پرداخت</p>
              </div>

              <div className="text-center py-2 w-full border-2 border-blue-300 rounded-lg ">
                <p className="text-slate-800">جزئیات</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="flex flex-col bg-white rounded-2xl p-4 ">
            <div className="flex  items-center justify-between mb-4">
              <p className=" font-bold text-lg">وام طرح اکرام </p>
              <p className="text-sm text-blue-500">شعبه مرکزی</p>
            </div>
            <div className="flex  flex-col gap-y-2 mb-4">
              <div className="flex gap-x-1">
                <p className="text-slate-500">وام گیرنده:</p>
                <p className="font-bold">مجتبی کجوری</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">شماره وام:</p>
                <p className="font-bold">1/6/200/155610</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">مبلغ وام:</p>
                <p className="font-bold">100,000,000</p>
              </div>
              <div className="flex items-center  gap-x-1">
                <p className="text-slate-500">مانده وام:</p>
                <p className="font-bold">50,000,000</p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-slate-500">سررسید قسط بعدی:</p>
                <p className="font-bold">1403/02/25</p>
              </div>
            </div>
            <div className="border-b-2 border-gray-200 w-full mb-4"></div>
            <div className="flex flex-row-reverse gap-x-12 items-center justify-between   text-slate-800">
              <div className="text-center py-2 w-full border-2 border-blue-300 rounded-lg bg-blue-100">
                <p className="text-slate-800">پرداخت</p>
              </div>

              <div className="text-center py-2 w-full border-2 border-blue-300 rounded-lg ">
                <p className="text-slate-800">جزئیات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Etebarat;

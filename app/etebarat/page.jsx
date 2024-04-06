import React from "react";

function Etebarat() {
  return (
    <div>
      <header className="bg-white text-center p-4">وام من</header>
      <div className="flex flex-col gap-y-4 mb-24 mt-4">
        <div className="px-4">
          <div className="flex flex-col bg-white rounded-lg p-4 ">
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
            <div className="flex gap-x-12 items-center justify-between   text-slate-800">
              <div className="text-center w-full border border-blue-200 rounded-lg bg-blue-100">
                <p className="text-blue-500">پرداخت</p>
              </div>
              {/* <p className="text-gray-300 font-bold">|</p> */}
              <div className="text-center w-full border border-blue-200 rounded-lg bg-blue-100">
                <p className="text-blue-500">جزئیات</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="flex flex-col bg-white rounded-lg p-4 ">
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
            <div className="flex gap-x-10 items-center justify-between   text-slate-800">
              <div className="text-center w-full">
                <p className="text-blue-500  border border-blue-200 rounded-lg bg-blue-100">
                  پرداخت
                </p>
              </div>

              <div className="text-center w-full">
                <p className="text-blue-500  border border-blue-200 rounded-lg bg-blue-100">
                  جزئیات
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Etebarat;

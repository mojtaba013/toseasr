"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa6";
import { HiDocument } from "react-icons/hi";
import { HiFolder } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";

function MainNavigation() {
  const [activemenu, setActivemenu] = useState(null);

  const changeHandler = (tab) => {
    console.log(tab);
    setActivemenu(tab);
  };

  return (
    <div className="bg-white  sm:hidden text-sm flex  shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)]   flex-row items-center justify-between p-4 rounded-t-2xl  fixed bottom-0 left-0 right-0 z-50 ">
      {/* کارتها */}
      <Link href="/carts">
        <div
          onClick={() => changeHandler("cart")}
          className={`${
            activemenu === "cart" ? "text-orange-500" : "text-slate-500"
          } flex flex-col items-center `}
        >
          <FaCreditCard size={24}/>

          <p>کارت ها</p>
        </div>{" "}
      </Link>
      {/* حسابها */}
      <Link href="/accounts">
        <div
          onClick={() => changeHandler("acoount")}
          className={`${
            activemenu === "acoount" ? "text-orange-500" : "text-slate-500"
          } flex flex-col items-center `}
        >
          <HiDocument size={24}/>
          <p>حساب ها</p>
        </div>
      </Link>
      {/* صفحه اصلی */}
      <Link href="/">
        <div
          onClick={() => changeHandler("home")}
          className={`${
            activemenu === "home" ? "text-orange-500" : "text-slate-500"
          } flex flex-col items-center `}
        >
         <AiFillHome size={24}/>
          <p>صفحه اصلی</p>
        </div>  
        
      </Link>
      {/* خدمات */}
      {/* <Link href="/services">
            <div className="flex flex-col items-center text-slate-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                />
              </svg>
              <p>خدمات</p>
            </div>
          </Link> */}
      {/* تسهیلات */}
      <Link href="/etebarat">
        <div onClick={() => changeHandler("etebarat")}
         className={`${
          activemenu === "etebarat" ? "text-orange-500" : "text-slate-500"
        } flex flex-col items-center `}
         >
          <HiFolder size={24}/>

          <p>تسهیلات</p>
        </div>
      </Link>
      {/* profile */}
      <Link href="/profile">
        <div onClick={() => changeHandler("profile")}
         className={`${
          activemenu === "profile" ? "text-orange-500" : "text-slate-500"
        } flex flex-col items-center `}>
          <MdAccountCircle size={24}/>
          <p>پروفایل</p>
        </div>
      </Link>
    </div>
  );
}

export default MainNavigation;

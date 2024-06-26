import React from "react";
import { ICONCOLOR } from "@/utils/constants";
import Link from "next/link";
import Header from '@/components/Header';

function acount() {
  return (
    <div className="">
      <Header param={"حساب ها"}/>
      <div className=" h-max flex flex-col   p-4 gap-y-2 mb-20  ">
        <div className="flex flex-col bg-gradient-to-r from-violet-200 to-violet-400   rounded-2xl w-full  ">
          <div className="flex flex-col gap-y-3 p-4">
            <div className="flex justify-between  ">
              <p>پس انداز جامع</p>
              <div className="flex items-center gap-x-1">
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
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between ">
              <p className="font-bold">2/69/0/149754</p>
              <p>شعبه کشاورز</p>
            </div>
            <div className="flex items-center justify-between ">
              <p>شبا:</p>
              <p className="font-bold">IR760170000000321537459006</p>
            </div>
            <div className="flex items-center justify-start gap-x-1">
              <p>مانده:</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={ICONCOLOR}
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between  items-center border-t-2 border-gray-200 px-4 py-2 text-slate-800">
            <div className=" flex flex-1 justify-center border-l-2 border-gray-200">
              <p>انتقال پول</p>
            </div>

            <div className="flex flex-1 justify-center border-l-2 border-gray-200 ">
              <p className="">صورتحساب</p>
            </div>

            <div className=" flex flex-1  justify-center">
              <p>بیشتر</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-violet-200 to-violet-400  rounded-2xl w-full  ">
          <div className="flex flex-col gap-y-3 p-4">
            <div className="flex justify-between  ">
              <p>پس اندازاکرام</p>
              <div className="flex items-center gap-x-1">
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
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between ">
              <p className="font-bold">1/65/0/128975</p>
              <p>شعبه مرکزی</p>
            </div>
            <div className="flex items-center justify-between ">
              <p>شبا:</p>
              <p className="font-bold">IR760170000000321537459006</p>
            </div>
            <div className="flex items-center justify-start gap-x-1">
              <p>مانده:</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={ICONCOLOR}
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          </div>
         
          <div className="flex justify-between items-center border-t-2 border-gray-200 px-4 py-2 text-slate-800">
            <div className=" flex flex-1 justify-center border-l-2 border-gray-200">
              <p>انتقال پول</p>
            </div>

           
              <div className="flex flex-1 justify-center border-l-2 border-gray-200 ">
                <p className="">صورتحساب</p>
              </div>
           

            <div className=" flex flex-1  justify-center">
              <p>بیشتر</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default acount;

"use client";

import { ICONCOLOR } from "@/utils/constants";
import { useState } from "react";
const initialState = [
  { id: "account", isopen: false },
  { id: "money", isopen: false },
  { id: "card", isopen: false },
  { id: "etebarat", isopen: false },
];
function Etebarat() {
  //const [isopen, setIsopen] = useState(false);
  const [filterState, setFilterState] = useState(initialState);

  const chevronHandler = (e) => {
    const _id = e.currentTarget.id;
    const updateState = [...filterState];
    const index = filterState.findIndex((item) => item.id === _id);
    const selectedItem = { ...filterState[index] };
    selectedItem.isopen = !selectedItem.isopen;
    updateState[index] = selectedItem;
    setFilterState(updateState);
  };

  return (
    <div className="text-slate-500">
      <div className="flex items-center justify-between p-4 bg-white">
        <div>
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
        </div>
        <div>خدمات ما</div>
        <div>
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
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </div>
      </div>
      {/* حساب ها */}
      <div
        id="account"
        onClick={chevronHandler}
        className="flex items-center justify-between p-4 "
      >
        <div className="flex items-center justify-between">
          <div>
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
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </div>
          <div>حساب ها</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className={`w-4 h-4 text-slate-500 ${
              filterState.find((i) => i.id == "account").isopen
                ? "rotate-180"
                : "rotate-0"
            }  transition-transform duration-[400ms] `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {filterState.find((i) => i.id === "account").isopen && (
        <div className="flex flex-col mb-2 px-8 gap-y-2 text-sm">
          <p>صورت حساب</p>
          <p>افتتاح حساب</p>
        </div>
      )}
      {/* انتقال پول */}
      <div
        id="money"
        onClick={chevronHandler}
        className="flex items-center justify-between p-4 "
      >
        <div className="flex items-center justify-between">
          <div>
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
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div>انتقال پول</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className={`w-4 h-4 text-slate-500 ${
              filterState.find((i) => i.id == "money").isopen
                ? "rotate-180"
                : "rotate-0"
            }  transition-transform duration-[400ms] `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {filterState.find((i) => i.id === "money").isopen && (
        <div className="flex flex-col mb-2 px-8 gap-y-2 text-sm">
          <p>انتقال پول</p>
          <p>ساتنا پایا</p>
        </div>
      )}
      {/* کارت */}
      <div
        id="card"
        onClick={chevronHandler}
        className="flex items-center justify-between p-4 "
      >
        <div className="flex items-center justify-between">
          <div>
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
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
              />
            </svg>
          </div>
          <div>کارت</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className={`w-4 h-4 text-slate-500 ${
              filterState.find((i) => i.id == "card").isopen
                ? "rotate-180"
                : "rotate-0"
            }  transition-transform duration-[400ms] `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {filterState.find((i) => i.id === "card").isopen && (
        <div className="flex flex-col mb-2 px-8 gap-y-2 text-sm">
          <p>کارت به کارت</p>
          <p>تاریخچه کارت به کارت</p>
          <p>صدور و مسدودی</p>
        </div>
      )}
      {/* تسهیلات */}
      <div
        id="etebarat"
        onClick={chevronHandler}
        className="flex items-center justify-between p-4 "
      >
        <div className="flex items-center justify-between">
          <div>
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
          <div>تسهیلات</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className={`w-4 h-4 text-slate-500 ${
              filterState.find((i) => i.id == "etebarat").isopen
                ? "rotate-180"
                : "rotate-0"
            }  transition-transform duration-[400ms] `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {filterState.find((i) => i.id === "etebarat").isopen && (
        <div className="flex flex-col mb-2 px-8 gap-y-2 text-sm">
          <p>کارت به کارت</p>
          <p>تاریخچه کارت به کارت</p>
          <p>صدور و مسدودی</p>
        </div>
      )}
    </div>
  );
}

export default Etebarat;

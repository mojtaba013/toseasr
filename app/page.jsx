import Image from "next/image";
import { ICONCOLOR } from "../utils/constants";
import Link from "next/link";

export default function Home() {
  return (
    // mobile mode
    <div className="sm:hidden  flex flex-col ">
      <header className="bg-white p-2 sticky top-0 flex justify-between items-center">
        <div>
          <Image src="/images/logo.png" alt="zcfsdf" width={50} height={50} />
        </div>
        <div className="text-slate-800 text-lg font-medium ">
          قرض الحسنه توسعه عصر شمال
        </div>
        <div className="pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </header>
      <div className="flex flex-col gap-y-2 mx-4 mb-24 ">
        {/* خدمات حساب */}
        <div className=" flex flex-col  mt-4  rounded-2xl  bg-white text-right  ">
          <p className="text-slate-800 font-bold pt-4 pr-4 pb-4">خدمات حساب</p>
          <div className="flex flex-row items-center justify-between  px-6 pb-6">
            <Link href="/Bill">
              <div className="flex flex-col items-center text-slate-800 ">
                <div className="flex items-center justify-center  w-16 h-16 bg-blue-100 border border-blue-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={ICONCOLOR}
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-slate-600">صورتحساب</p>
              </div>
            </Link>
            <Link href="/Moneytransfer">
              <div className="flex flex-col items-center text-slate-800 ">
                <div className="flex items-center justify-center  w-16 h-16 bg-blue-100 border border-blue-200  rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={ICONCOLOR}
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                </div>

                <p className="text-sm font-medium text-slate-600">انتقال پول</p>
              </div>
            </Link>
            <div className="flex flex-col items-center text-slate-800 ">
              <div className="flex items-center justify-center  w-16 h-16 bg-blue-100 border border-blue-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={ICONCOLOR}
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-600">ساتنا پایا</p>
            </div>
            <div className="flex flex-col items-center text-slate-800">
              <div className="flex items-center justify-center  w-16 h-16 bg-blue-100 border border-blue-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke={ICONCOLOR}
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-600">سایر خدمات</p>
            </div>
          </div>
        </div>
        {/* اعتبارات */}
        <div className=" flex flex-col    rounded-2xl  bg-white text-right  ">
          <p className="text-slate-800 font-bold pt-4 pr-4 pb-4">
            خدمات تسهیلات
          </p>
          <div className="flex flex-row flex-wrap gap-4 flex-1   px-6 pb-6">
            <Link href="/Average">
              {" "}
              <div className="flex flex-col items-center text-slate-800">
                <div className="flex items-center justify-center  w-16 h-16 bg-blue-100 border border-blue-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={ICONCOLOR}
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                </div>

                <p className="text-sm font-medium text-slate-600">معدل حساب</p>
              </div>
            </Link>
            <Link href="/Zemanat">
              <div className="flex flex-col items-center text-slate-800">
                <div className="flex items-center justify-center  w-16 h-16 bg-blue-100 border border-blue-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={ICONCOLOR}
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-slate-600">
                  تعهدات غیرمستقیم
                </p>
              </div>
            </Link>
            <Link href="/Vasigheh">
              <div className="flex flex-col items-center text-slate-800">
                <div className="flex items-center justify-center  w-16 h-16 bg-blue-100 border border-blue-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={ICONCOLOR}
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-slate-600">وثایق</p>
              </div>
            </Link>
          </div>
        </div>
        {/* مخاطب پرتکرار */}
        <div className=" flex flex-col    rounded-2xl  bg-white text-right  ">
          <p className="text-slate-800 font-bold pt-4 pr-4 pb-4">
            مخاطب های پرتکرار
          </p>
          <div className="flex flex-row flex-wrap gap-4 flex-1   px-6 pb-6">
            <div className="flex flex-col items-center text-slate-800">
              <div className="flex items-center justify-center  w-16 h-16 bg-blue-100 border border-blue-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={ICONCOLOR}
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-600">مجتبی کجوری</p>
            </div>
            <div className="flex flex-col items-center text-slate-800">
              <div className="flex items-center justify-center  w-16 h-16 bg-blue-100 border border-blue-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={ICONCOLOR}
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-600">مجتبی کجوری</p>
            </div>
            <div className="flex flex-col items-center text-slate-800">
              <div className="flex items-center justify-center  w-16 h-16 bg-blue-100 border border-blue-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={ICONCOLOR}
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-600">مجتبی کجوری</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

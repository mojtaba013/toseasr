import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const myFont = localFont({
  src: "./../public/fonts/Yekan.woff",
});

export const metadata: Metadata = {
  title: "توسعه عصر شمال",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className={myFont.className}>
      {/* <body className={inter.className}>{children}</body> */}
      <body className="bg-gray-100">
        {children}
        <div className="bg-white sm:hidden flex shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)]   flex-row items-center justify-between p-2 rounded-t-md  fixed bottom-0 left-0 right-0 z-50 ">
          {/* کارتها */}
          <Link href="/carts">
            <div className="flex flex-col items-center text-slate-500 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>

              <p>کارت ها</p>
            </div>{" "}
          </Link>
          {/* حسابها */}
          <Link href="/accounts">
            <div className="flex flex-col items-center text-slate-500 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              <p>حساب ها</p>
            </div>
          </Link>
          {/* صفحه اصلی */}
          <Link href="/">
            <div>
              <Image
                src="/images/logo.png"
                alt="zcfsdf"
                width={35}
                height={35}
              />
              {/* <img src="/public/images/logo.png"/> */}
            </div>
          </Link>
          {/* تسهیلات */}
          <Link href="/Tashilat">
            <div className="flex flex-col items-center text-slate-500 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                />
              </svg>
              <p>تسهیلات</p>
            </div>
          </Link>
          {/* profile */}
          <Link href="/profile">
            <div className="flex flex-col items-center text-slate-500 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p>پروفایل</p>
            </div>
          </Link>
        </div>
      </body>
    </html>
  );
}

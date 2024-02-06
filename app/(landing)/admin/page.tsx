"use client"

import React, {useEffect, useState} from "react";
import Dashboard from "./Dashboard";
import Deposite from "./Deposite";
import Transaction from "./Transaction";
import api from "@/lib/api";

interface User{
  id: number,
  name: string,
  email: string,
  phone: string,
}

const Page = () => {

  const [activeItem, setActiveItem] = useState<string>('dashboard');
  const [user,setUser] = useState({})
  useEffect(()=>{
    api.get('/api/user')
    .then(res=>{
      setUser(res.data)
    })
  },[]) 
  // Function to handle menu item click
  const handleMenuItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <div className="mt-16 cantialiased bg-slate-50 w-full min-h-screen text-slate-900 relative py-4">
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4 ">
          <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-slate-800">
            Dashboard<span className="text-indigo-400">.</span>
          </h1>
          <p className="text-slate-400 text-sm mb-2">Welcome back,</p>
          <a
            href="#"
            className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
          >
            <div>
              <img
                className="rounded-full w-10 h-10 relative object-cover"
                src="man.png"
                alt="img"
              />
            </div>
            <div>
              <p className="font-medium group-hover:text-indigo-400 leading-4">
                {user.name}
              </p>
              <span className="text-xs text-slate-400">Admin</span>
            </div>
          </a>
          <hr className="my-2 border-slate-700" />
          <div id="menu" className="flex flex-col space-y-2 my-5">
            <a
              href="#"
              className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              onClick={() => handleMenuItemClick('dashboard')}
            >
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:text-indigo-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <div>
                  <p className={`${activeItem == 'dashboard' ? 'font-bold text-base lg:text-lg text-indigo-600 leading-4': 'text-slate-800 font-bold text-base lg:text-lg group-hover:text-indigo-400'}`}>
                    Dashboard
                  </p>
                  <p className="text-slate-400 text-sm hidden md:block">
                    Data overview
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              onClick={() => handleMenuItemClick('deposite')}

            >
              <div className="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:text-indigo-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <div>
                <p className={`${activeItem == 'deposite' ? 'font-bold text-base lg:text-lg text-indigo-600 leading-4': 'text-slate-800 font-bold text-base lg:text-lg group-hover:text-indigo-400'}`}>
                    Deposite
                  </p>
                  <p className="text-slate-400 text-sm hidden md:block">
                    Manage deposite
                  </p>
                </div>
                
              </div>
            </a>
            <a
              href="#"
              className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              onClick={() => handleMenuItemClick('transaction')}

            >
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:text-indigo-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <div>
                <p className={`${activeItem == 'transaction' ? 'font-bold text-base lg:text-lg text-indigo-600 leading-4': 'text-slate-800 font-bold text-base lg:text-lg group-hover:text-indigo-400'}`}>
                 Transaction
                  </p>
                  <p className="text-slate-400 text-sm hidden md:block">
                    Manage transaction
                  </p>
                </div>
              </div>
            </a>
          </div>
          

        </div>
        <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
          {activeItem === 'dashboard' && <Dashboard/>}
          {activeItem === 'deposite' && <Deposite />}
          {activeItem === 'transaction' && <Transaction />}
        </div>
      </div>
    </div>
  );
};

export default Page;

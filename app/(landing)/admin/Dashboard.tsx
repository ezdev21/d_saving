"use client";

import React, {useEffect, useState} from "react";
import { AiOutlineEdit, AiOutlineLock, AiOutlineDelete, AiOutlineDatabase, AiOutlineHome, AiOutlineTransaction, AiOutlineUser } from "react-icons/ai";
import api from '../../../lib/api'

interface User{
  name:string
}

const Dashboard = () => {
  const [user,setUser] = useState({})
  useEffect(()=>{
    api.get('/api/user')
    .then(res=>{
      setUser(res.data)
    })
  },[])
  return (
    <>
      <div id="24h">
        <h1 className="font-bold py-4 uppercase">Last 24h Statistics</h1>
        <div
          id="stats"
          className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-slate-700 to-white/5 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <AiOutlineUser size={35} className='text-white'/>
              </div>
              <div>
                <p className="text-indigo-300 text-sm font-medium uppercase leading-4">
                  Users
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>+28</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
              <AiOutlineTransaction size={35} className='text-white'/>

              </div>
              <div>
                <p className="text-teal-300 text-sm font-medium uppercase leading-4">
                  Income
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>$2,873.88</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
              <AiOutlineDatabase size={35} className='text-white'/>

              </div>
              <div>
                <p className="text-blue-300 text-sm font-medium uppercase leading-4">
                  Deposites
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>+79</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="last-users">
        <h1 className="font-bold py-4 uppercase">Last 24h users</h1>
        <p className="overflow-x-scroll">
          <table className="w-full whitespace-nowrap">
            <thead className="bg-slate-700">
              <tr>
                <th className="text-left py-3 px-2 rounded-l-lg text-white">
                  Name
                </th>
                <th className="text-left py-3 px-2 text-white">Email</th>
                <th className="text-left py-3 px-2 text-white">Group</th>
                <th className="text-left py-3 px-2 text-white">Status</th>
                <th className="text-left py-3 px-2 rounded-r-lg text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tr className="border-b border-gray-700">
              <td className="py-3 px-2 font-bold">
                <div className="inline-flex space-x-3 items-center">
                  <span>
                    <img
                      className="rounded-full w-8 h-8"
                      src="/man.png"
                      alt=""
                    />
                  </span>
                  <span>Abebe kebede</span>
                </div>
              </td>
              <td className="py-3 px-2">abekebe@gmail.com</td>
              <td className="py-3 px-2">User</td>
              <td className="py-3 px-2">Approved</td>
              <td className="py-3 px-2">
                <div className="inline-flex items-center space-x-3">
                  <a href="" title="Edit" className="hover:text-indigo-700">
                    <AiOutlineEdit />
                  </a>
                  <a
                    href=""
                    title="Edit password"
                    className="hover:text-indigo-700"
                  >
                    <AiOutlineLock />
                  </a>
                  <a
                    href=""
                    title="Suspend user"
                    className="hover:text-indigo-700"
                  >
                    <AiOutlineDelete />
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </p>
      </div>
    </>
  );
};

export default Dashboard;

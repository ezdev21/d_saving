import React from 'react'
import { AiOutlineEdit, AiOutlineLock, AiOutlineDelete} from "react-icons/ai";

const Transaction = () => {
  return (
    <div>
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
    </div>
  )
}

export default Transaction
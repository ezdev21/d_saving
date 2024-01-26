"use client";

import { useState } from "react";
import Monthly from "./Monthly";
import Yearly from "./Yearly";

const Page = () => {
  const [monthly, setMonthly] = useState(false);
  const handleToggle = () => {
    setMonthly(!monthly);
  };

  return (
    <div>
      <section className="px-6 xl:px-0">
        <div className="mt-52 mx-auto container">
          <div className="flex flex-col lg:items-center justify-center w-full">
            <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
              The Right Plan for your business
            </h1>
            <p className="mt-2.5 lg:w-1/2 lg:text-center text-2xl">
              We have several plans to showcase your Business. Get everything
              you need
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="pt-14">
              <div className="container mx-auto">
                <div className="xl:w-4/5 w-11/12 mx-auto mb-28">
                  <div
                    className="flex justify-center items-center"
                    role="button"
                  >
                    <p className="mr-3 text-lg text-gray-800">
                      Bill Monthly
                    </p>
                    <div className="cursor-pointer w-12 h-6 rounded-full relative shadow-sm">
                      <input
                        defaultChecked
                        type="checkbox"
                        name="toggle"
                        id="toggle2"
                        className="focus:outline-none checkbox w-4 h-4 rounded-full bg-indigo-700 transition duration-150 ease-in-out absolute m-1 shadow-sm appearance-none cursor-pointer"
                        onChange={handleToggle}
                      />
                      <label
                        htmlFor="toggle2"
                        className="toggle-label block w-12 h-6 overflow-hidden rounded-full border border-indigo-700 cursor-pointer"
                      />
                    </div>
                    <p className="ml-3 text-lg font-normal text-gray-800">
                      Bill Anually
                    </p>
                  </div>
                </div>
                {monthly ? <Monthly/> : <Yearly/>}
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html: "",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>
        {` 
            .checkbox:checked {
                right: 0;
                background-color: #4338ca;
            }
            `}
      </style>
    </div>
  );
};
export default Page;

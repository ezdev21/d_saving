import React from "react";
import { FaTelegram, FaLinkedin, FaMailchimp } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { team_data } from "@/constants";
import Image from "next/image";



function Index() {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {team_data.map((item, index) => (
            <div key={index} className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <Image
                        src={item.img}
                        width={200}
                        height={200}
                        className="rounded-full object-cover h-full w-full shadow-md"
                        alt="team member Image"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                     {item.name}
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      {item.role}
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal"></p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="/" className="mx-5">
                        <div>
                          <AiFillMail size={24} />
                        </div>
                      </a>
                      <a href="/" className="mx-5">
                        <div>
                          <FaTelegram size={24} />
                        </div>
                      </a>
                      <a href="/" className="mx-5">
                        <div>
                          <FaLinkedin size={24} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

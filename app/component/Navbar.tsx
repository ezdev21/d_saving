"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { nav_links } from "@/constants";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="top-0 left-0 w-full fixed z-[9999] py-5 md:px-8 px-4 bg-white border-b bg-opacity-95">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="xl:pl-4">
              <Link href={"/"} className="text-xl font-semibold text-slate-950 flex justify-center items-center gap-3">
                <Image
                  src={"/berhan.jpg"}
                  width={400}
                  height={200}
                  alt="Berhan logo"
                  className="w-14 h-14 rounded-xl"
                />
                <p className="uppercase text-2xl">Berhan</p>
              </Link>
            </div>

            {/* Navigation Menu  */}

            <div className="hidden lg:block">
              <ul className="flex space-x-10 font-sans justify-center items-center">
                {nav_links.map((item, index) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "text-yellow-500 font-bold uppercase font-sans"
                          : "text-yellow-600 hover:text-yellow-500 hover:font-semibold ease-in-out duration-300 font-sans uppercase"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <Link href={"/contact"} className="hidden lg:flex gap-4">
                  <button className=" border py-4 px-10 bg-yellow-500 hover:bg-yellow-600 text-slate-50 rounded-full font-bold text-md hover:text-slate-100">
                    Contact us
                  </button>
                </Link>
              </ul>
            </div>
            <div className="block lg:hidden font-sans text-sm gap-2">
              <button className="" onClick={navHandle}>
                {!nav ? (
                  <HiBars3 size={35} className="text-black" />
                ) : (
                  <LiaTimesSolid size={35} className="text-black" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}

      <div
        className={
          nav
            ? "z-[9999] fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-950 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-center py-3">
          <Link href={"/"}>
            <Image src={"/berhan.jpg"} width={200} height={200} alt="Image" className="w-14 h-14 rounded-xl"/>
          </Link>
        </div>

        <ul className="p-4">
          {nav_links.map((link) => (
            <li key={link.key} className="p-4 border-b border-gray-900">
              <a href={link.href} className="uppercase text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

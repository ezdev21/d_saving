import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#000300] w-full mx-auto py-5 px-6 lg:px-16 grid lg:grid-cols-3 gap-4 text-gray-400">
        <div>
          <h1 className="w-full text-3xl font-bold text-slate-50">
            Berhan
          </h1>
          <p className="py-4 text-sm font-sans">
          Join our community and tailored to suit the unique needs of visually impaired individuals on their journey to success.
          </p>
          <div className="flex justify-between mx-auto md:w-[80%] my-6">
            <Link href="">
              <FaFacebook
                size={26}
                className="text-gray-400 hover:text-gray-100"
              />
            </Link>
            <Link href="">
              <FaInstagram
                size={26}
                className="text-gray-400 hover:text-gray-100"
              />
            </Link>
            <Link href="">
              <FaTelegram
                size={26}
                className="text-gray-400 hover:text-gray-100"
              />
            </Link>
            <Link href="">
              <FaTiktok
                size={26}
                className="text-gray-400 hover:text-gray-100"
              />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between lg:px-44 mt-6">
          <div>
            <h6 className="font-semibold text-gray-200">Company</h6>
            <ul className="flex flex-col">
              <Link href="/about" className="py-2 text-sm hover:text-gray-200">
                About Berhan
              </Link>
              <Link
                href="/gallary"
                className="py-2 text-sm hover:text-gray-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="py-2 text-sm hover:text-gray-200"
              >
                Contact
              </Link>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-gray-200">Contact</h6>
            <ul>
              <li className="py-2 text-sm">
                Call Us: +251-900-578275 | +251-938-071193
              </li>
              <li className="py-2 text-sm">
                Email Us: berhan@addisphoenix.com
              </li>
              <li className="py-2 text-sm">
                Address: Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#000300] w-full flex justify-center items-center mx-auto pb-2">
        <p className="text-gray-50 mx-auto">
          Berhan 2024 | All rights reserved &copy;
        </p>
      </div>
    </div>
  );
};

export default Footer;

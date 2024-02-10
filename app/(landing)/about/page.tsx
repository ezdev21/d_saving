import React from "react";
import {
  RiFlag2Fill,
  RiEye2Fill,
  RiCheckboxCircleFill,
  RiTeamFill,
  RiBankCardFill,
  RiNewspaperFill,
} from "react-icons/ri";

const About3 = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-32 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <p className="font-normal text-sm leading-3 text-yellow-500 hover:text-yellow-800 cursor-pointer pb-2">
        About
      </p>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
          Empowering Visually Impaired Learners Through Inclusive Online Education.
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            At our company, we are dedicated to revolutionizing online education
            accessibility for visually impaired individuals. We believe that
            every person, regardless of their visual abilities, deserves equal
            opportunities to excel in their academic pursuits. Our mission is to
            bridge the gap between traditional education platforms and the needs
            of visually impaired learners, ensuring inclusivity, empowerment,
            and success for all. We understand the challenges faced by visually
            impaired individuals in accessing educational resources and
            participating in online learning activities. Therefore, we have
            developed innovative solutions that cater specifically to their
            needs. Our platform leverages cutting-edge technology, including
            AI-based systems, text-to-speech, and speech-to-text functionality,
            to create a seamless and inclusive learning environment.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
            alt="people discussing on board"
          />
        </div>
      </div>

      <div className="relative mt-24">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-12 h-12 bg-yellow-500 rounded-full flex justify-center items-center">
            <RiFlag2Fill size={26} className="text-white z-20" />
          </div>

          <div className="z-20 w-12 h-12 bg-yellow-500 rounded-full flex justify-center items-center">
            <RiEye2Fill size={26} className="text-white z-20" />
          </div>

          <div className="sm:flex hidden z-20 w-12 h-12 bg-yellow-500 rounded-full justify-center items-center">
            <RiCheckboxCircleFill size={26} className="text-white z-20" />
          </div>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Mission
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Empower visually impaired learners with inclusive online education,
            fostering equality and success in their academic journey.
          </p>
        </div>
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Vision
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Transforming online education into a universally accessible
            platform, enriching the lives of visually impaired individuals
            worldwide.
          </p>
        </div>
        <div className="sm:block hidden">
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Goal
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Ensure every visually impaired learner has equitable access to
            quality education, enabling them to reach their full potential.
          </p>
        </div>
      </div>
      <div className="sm:hidden block relative mt-8">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-12 h-12 bg-yellow-500 rounded-full flex justify-center items-center">
            <RiCheckboxCircleFill size={26} className="text-white z-20" />
          </div>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Goal
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Ensure every visually impaired learner has equitable access to
            quality education, enabling them to reach their full potential.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        <div className="w-full lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Join us
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">
            We invite you to join our community and embark on a journey towards
            educational empowerment. Whether you are a visually impaired
            individual seeking accessible learning resources or an advocate for
            inclusive education, there is a place for you at our company.
            Together, we can break down barriers, spark curiosity, and inspire
            success for all learners, regardless of their visual abilities. Join
            us today and become a part of our mission to empower vision in
            education.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
            {/* <!-- Team Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <RiTeamFill size={32} className="text-yellow-500 z-20" />
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Team
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  Collaborative, diverse team dedicated to revolutionizing
                  education accessibility, fostering innovation, and empowering
                  visually impaired learners worldwide.
                </p>
              </div>
            </div>

            {/* <!-- Board Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <RiBankCardFill size={32} className="text-yellow-500 z-20" />
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Board
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  Visionary leaders driving strategic initiatives to advance
                  inclusive education, ensuring equitable opportunities and
                  sustainable growth for visually impaired individuals.
                </p>
              </div>
            </div>

            {/* <!-- Press Card --> */}
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <RiNewspaperFill size={32} className="text-yellow-500 z-20" />
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                  Press
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                  Stay updated on our groundbreaking work in education
                  accessibility, empowering visually impaired learners and
                  reshaping the future of online learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;

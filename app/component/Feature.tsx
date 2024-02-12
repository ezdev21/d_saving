"use client";

import {
  RiShieldLine,
  RiMoneyDollarCircleLine,
  RiMoneyDollarBoxLine,
  RiBankLine,
  RiBarChartGroupedLine,
  RiExchangeDollarLine,
} from "react-icons/ri";

export default function Feature() {
  return (
    <div className="">
      <section className="mx-auto container py-20 ">
        <div className="flex justify-center items-center flex-col">
          <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 z-30">
            <h1>Specially crafted features</h1>
          </div>
          <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div className="border-gray-200 p-4 md:py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300 border-r">
              <div className="mx-auto bg-yellow-500 p-5 text-white rounded-full">
                <RiShieldLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
              All-Inclusive Study Materials
              </h2>
              <p className="text-gray-600 text-[13px]">
              Access a comprehensive repository of study materials curated specifically for visually impaired learners, ensuring inclusivity and accessibility. Explore diverse resources to enhance your understanding and mastery of subjects.
              </p>
            </div>

            <div className="border-gray-200 p-4 md:py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300 border-r">
              <div className="mx-auto bg-yellow-500 p-5 text-white rounded-full">
                <RiMoneyDollarCircleLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
              Interactive Exercises and Quizzes
              </h2>
              <p className="text-gray-600 text-[13px]">
              Sharpen your skills and reinforce your knowledge with interactive exercises and quizzes covering various study subjects. Engage in hands-on learning experiences designed to promote active participation and comprehension.
              </p>
            </div>

            <div className="border-gray-200 p-4 md:py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300">
              <div className="mx-auto bg-yellow-500 p-5 text-white rounded-full">
                <RiMoneyDollarBoxLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
              Online Exam Platform
              </h2>
              <p className="text-gray-600 text-[13px]">
              Seamlessly take exams online through our dedicated platform, offering a user-friendly interface and customizable settings for accessibility. Experience secure and efficient exam sessions tailored to meet your academic requirements.
              </p>
            </div>

            <div className="border-gray-200 p-4 md:py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300 border-r">
              <div className="mx-auto bg-yellow-500 p-5 text-white rounded-full">
                <RiBankLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
              Real-Time AI Interaction for Study
              </h2>
              <p className="text-gray-600 text-[13px]">
              Engage in real-time learning sessions with an AI-based system tailored to your needs, providing instant support and guidance as you study. Interact with dynamic content and receive personalized assistance.
              </p>
            </div>

            <div className="border-gray-200 p-4 md:py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300 border-r">
              <div className="mx-auto bg-yellow-500 p-5 text-white rounded-full">
                <RiBarChartGroupedLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
              Text-to-Speech and Speech-to-Text Functionality
              </h2>
              <p className="text-gray-600 text-[13px]">
              Enhance your study experience with built-in text-to-speech and speech-to-text functionality, facilitating seamless communication and comprehension. Convert written text into spoken words or vice versa for improved accessibility and convenience..
              </p>
            </div>

            <div className="border-gray-200 p-4 md:py-8 flex flex-col mx-auto text-center hover:bg-gray-100 hover:scale-105 ease-in-out duration-300">
              <div className="mx-auto bg-yellow-500 p-5 text-white rounded-full">
                <RiExchangeDollarLine size={27} />
              </div>
              <h2 className="font-bold text-slate-900 text-xl py-5">
              Real-Time Guidance
              </h2>
              <p className="text-gray-600 text-[13px]">
              Receive real-time guidance and support from expert mentors and tutors as you navigate your academic journey. Access personalized assistance and advice whenever you need it, ensuring continuous progress and success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

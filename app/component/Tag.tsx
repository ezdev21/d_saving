import Image from "next/image";
import React from "react";
function IndexPage() {
  return (
    <div className="bg-gray-100 overflow-y-hidden">
      <div className="mx-auto">
        <div className="w-full flex justify-center">
          <div className="w-full bg-gradient-to-r from-yellow-500 to-yellow-500 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-12">
            <div>
              <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                  <div>
                    <h1
                      role="heading"
                      className="text-xl md:text-2xl lg:text-3xl lg:w-10/12 text-white leading-6 lg:leading-10 md:text-left text-center"
                    >
                      Join our community and tailored to suit the unique needs
                      of visually impaired individuals on their journey to
                      success.
                    </h1>
                  </div>
                  <button
                    role="button"
                    aria-label="Join the community"
                    className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-yellow-500 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                  >
                    Join the community
                  </button>
                </div>
                <div className="md:w-1/3 w-2/3">
                  <Image
                    className="rounded-ss-[70px] rounded-ee-[70px] w-96"
                    width={500}
                    height={500}
                    src="/community.png"
                    alt="cartoon avatars"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;

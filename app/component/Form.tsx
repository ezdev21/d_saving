import React from "react";

const Form = () => {
  return (
    <div className="bg-zinc-100 pb-6 rounded-lg">
      <div className="grid md:grid-cols-2 gap-4 p-4 pt-6 m-3 mt-8">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 bg-zinc-200 text-sm font-sans outline-none"
        />
        <input
          type="email"
          required
          placeholder="Your Email"
          className="p-3 bg-zinc-200 text-sm font-sans outline-none"
        />
      </div>
      <div className="flex flex-col">
        <div className="bg-zinc-200 text-sm font-sans outline-none mx-7 p-3">
          <input
            type="text"
            placeholder="Subject"
            className="bg-zinc-200 text-sm font-sans outline-none"
          />
        </div>
        <div className="mt-6 m-7">
          <textarea
            name=""
            id=""
            rows={8}
            placeholder="Message"
            className="bg-zinc-200 w-full p-3 text-sm"
          />
        </div>
        <div className="flex justify-center mx-auto">
          <button className="bg-yellow-500 hover:bg-yellow-700 py-3 px-4 text-zinc-200 hover:text-zinc-200 rounded-md font-bold text-md font-sans ease-in-out duration-200">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
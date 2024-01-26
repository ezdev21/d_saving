import React from "react";

const Deposite = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white p-16">
      <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-70 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-700"
          >
            Account Number
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-70 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="XXXXXXXXXXXXXX"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="password"
            className="bg-gray-70 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="XXXXXXX"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="confirm_password"
            className="bg-gray-70 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </div>{" "}
    </div>
  );
};

export default Deposite;

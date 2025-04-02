import React, { useState, useReducer } from "react";

const UploadJob = () => {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      title: "",
      type: "",
      salary: 0,
      vacancies: 0,
      experience: 0,
      location: "",
      description: "",
      responsibility: "",
    }
  );

  return (
    <section className="container my-0 mx-auto">
      <section className="bg-[#F5F6F8] my-0 mx-auto border border-black flex flex-col p-10 space-y-6 mt-4 mb-6 rounded ">
        <p className="font-bold text-lg">Job Title</p>
        <input
          type="text"
          placeholder="eg. software engineer"
          className="w-full border px-2 py-4 focus:outline-none focus:ring-2 focus:ring-[#55A747] mt-1"
          onChange={(e) => dispatch({ title: e.target.value })}
        />
        <div className="flex items-center gap-10 ">
          <div className="w-full">
            <p className="font-bold text-lg">Job Type</p>
            <input
              type="text"
              placeholder="eg. software engineer"
              className="w-full border px-2 py-4 focus:outline-none focus:ring-2 focus:ring-[#55A747] mt-1"
              onChange={(e) => dispatch({ type: e.target.value })}
            />
          </div>
          <div className="w-full">
            <p className="font-bold text-lg">Salary (USD)</p>
            <input
              type="number"
              placeholder="eg. 1500"
              className="w-full border px-2 py-4 focus:outline-none focus:ring-2 focus:ring-[#55A747] mt-1"
              onChange={(e) => dispatch({ salary: e.target.value })}
            />
          </div>
        </div>

        <div className="flex items-center gap-10 ">
          <div className="w-full">
            <p className="font-bold text-lg">No. of Vacancies</p>
            <input
              type="number"
              placeholder="eg. Vacancies"
              className="w-full border px-2 py-4 focus:outline-none focus:ring-2 focus:ring-[#55A747] mt-1"
            />
          </div>
          <div className="w-full">
            <p className="font-bold text-lg">Years of Experience</p>
            <input
              type="number"
              placeholder="eg. Vacancies"
              className="w-full border px-2 py-4 focus:outline-none focus:ring-2 focus:ring-[#55A747] mt-1"
              onChange={(e) => dispatch({ experience: e.target.value })}
            />
          </div>
        </div>
        <p className="font-bold text-lg">Job Location</p>
        <input
          type="text"
          placeholder="eg. New York"
          className="w-full border px-2 py-4 focus:outline-none focus:ring-2 focus:ring-[#55A747] mt-1"
          onChange={(e) => dispatch({ location: e.target.value })}
        />
        <p className="font-bold text-lg">Job Description</p>
        <textarea
          name=""
          id=""
          cols="5"
          rows="5"
          className="w-full border  px-2 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#55A747] mt-1"
          onChange={(e) => dispatch({ description: e.target.value })}
        ></textarea>
        <p className="font-bold text-lg">Core Responsibilities</p>
        <textarea
          name=""
          id=""
          cols="5"
          rows="5"
          className="w-full border px-2 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#55A747] mt-1"
          onChange={(e) => dispatch({ responsibility: e.target.value })}
        ></textarea>
        <button className="w-40 inline-flex justify-center rounded-md border border-transparent bg-[#55A747] px-8 py-2 text-white hover:bg-[#1d4fd846] hover:text-[#1d4fd8] focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-black">
          Submit
        </button>
      </section>
    </section>
  );
};

export default UploadJob;

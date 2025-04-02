import { useState, useEffect } from "react";
import img from "../assets/Job-Board-Images/img-1.png";

const Hero2 = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    window.localStorage.setItem(
      "MY_WELCOME_BANNER",
      JSON.stringify(showBanner)
    );
  }, [showBanner]);

  useEffect(() => {
    const data = window.localStorage.getItem("MY_WELCOME_BANNER");
    if (data !== null) setShowBanner(JSON.parse(data));
  }, []);

  return (
    <>
      {showBanner && (
        <section className="mt-2 shadow-lg sm:flex sm:justify-between sm:items-center sm:bg-[#55A747] sm:p-2 sm:rounded-1.5xl sm:max-w-90 sm:mt-5 s">
          <section className="mx-auto flex flex-col px-2 bg-[#55A747] sm:flex sm:flex-row">
            <h2 className="text-1xl pl-2 text-black font-bold lg:text-[1.2em]">
              sign up to get our newsletter where we give you industry tips
            </h2>
          </section>
          <span
            className="text-[1em] flex pr-20 font-bold cursor-pointer"
            onClick={() => setShowBanner(false)}
          >
            Hide
          </span>
        </section>
      )}
      <header className="w-full h-96 bg-cover bg-center flex justify-center items-center rounded-2xl mt-3 here">
        <div className="flex flex-row justify-center relative items-center backdrop-blur-sm bg-black/40 w-full h-full text-2xl text-white">
          <img
            src={img}
            alt=""
            className="mb-[-3em] w-[7em] lg:w-[8em] lg:mb-[-1.5em]"
          />
        </div>
      </header>
      <section className=" mt-2 shadow-lg sm:flex sm:justify-center sm:items-center sm:bg-[#F5F6F8] sm:p-7 sm:rounded-1.5xl sm:max-w-90 sm:mt-5 s">
        <section className="mx-auto flex flex-col px-2 bg-[#F5F6F8] sm:flex sm:flex-row ">
          <h2 className="text-2xl pl-2 text-[#55A747] font-bold lg:text-4xl">
            We're here to help you find the perfect fit
          </h2>
        </section>
      </section>
    </>
  );
};

export default Hero2;

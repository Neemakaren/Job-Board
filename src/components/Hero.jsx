import React from 'react'
// import img from '../assets/Job Board Images/about-image.jpg'

const Hero = () => {
  return (
//     <section class="bg-gray-50">
    // <section className="w-full h-96 bg-cover bg-center flex justify-center items-center back">
    <section className="h-96 bg-cover bg-center flex justify-center items-center back">
  {/* <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"> */}
  <div className="mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        {/* Understand User Flow. */}
        {/* <strong className="font-extrabold text-green-700 sm:block"> Increase Conversion. </strong> */}
      </h1>

      {/* <p className="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p> */}

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {/* <a
          class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a> */}

        {/* <a
          class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a> */}
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
{/* <>
<header
class="w-full h-96 bg-[url('https://www.slingacademy.com/wp-content/uploads/2022/10/hero-image-example.webp')] bg-cover bg-center flex justify-center items-center">
<div class="flex flex-col justify-center items-center">
    <h1 class=" text-center text-5xl text-white font-bold drop-shadow-lg">WELCOME TO
        <span class="text-amber-500">SLING ACADEMY</span>
    </h1>
    <p class="mt-5 text-center text-lg text-white opacity-70">This webiste is about programming and things like
        that</p>
    <a class="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
        href="#">Get Started</a>
</div>
</header>

</> */}
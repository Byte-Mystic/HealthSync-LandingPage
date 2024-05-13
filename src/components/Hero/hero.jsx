import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full py-4 px-10">
      {/* Navbar */}
      <div className="w-full flex items-center justify-between">
        <img
          src="../../src/assets/logo.png"
          alt=""
          className="-ml-6 h-20 object-contain max-xl:hidden"
        />
        <span className="w-1/2 flex items-center justify-evenly">
          <h1 className="font-medium text-sky-600 cursor-pointer">Home</h1>
          <h1 className="font-medium text-sky-600 cursor-pointer">About Us</h1>
          <h1 className="font-medium text-sky-600 cursor-pointer">Features</h1>
          <h1 className="font-medium text-sky-600 cursor-pointer">Contact</h1>
        </span>
        <div className="flex gap-4 items-center">
          <button className="px-6 py-2 border-2 border-sky-500 rounded-full font-semibold transition ease-in duration-300 delay-75 hover:scale-95 text-sky-600">
            LogIn
          </button>
          <button className="px-6 py-2 shadow-md shadow-blue-400 bg-sky-400 rounded-full font-semibold transition ease-in duration-300 delay-75 hover:scale-95 hover:bg-sky-500 text-white">
            SignUp
          </button>
        </div>
      </div>
      {/* Hero Section */}
      <div className="h-4/5 w-full flex justify-between">
        <div className="flex flex-col justify-center gap-10">
          <span className="flex flex-col">
            <p className="text-sm">Your health comes first!</p>
            <h1 className="text-7xl font-black -mt-1 -ml-1">HealthSync</h1>
          </span>
          <p className="text-sm">
            Navigate your health journey effortlessly with our
            <br />
            intuitive advanced medical imaging services and
            <br />
            chat interface.
          </p>
          <button className="px-4 py-2 shadow-md shadow-blue-400 bg-sky-400 rounded-md font-semibold transition ease-in duration-300 delay-75 hover:scale-95 hover:bg-sky-500 text-white">
            Get Started
          </button>
        </div>
        <img
          src="../../src/assets/img.jpg"
          alt=""
          className="h-full object-contain max-xl:hidden mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default Hero;

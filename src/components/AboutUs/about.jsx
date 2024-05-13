import React from "react";

const About = () => {
  return (
    <div className="py-2 px-10 h-screen w-full flex flex-col justify-between">
      <div className="w-full mb-6 flex items-center justify-between">
        <span className="flex flex-col">
          <h1 className="text-4xl font-semibold">About Us</h1>
          <h1 className="text-6xl font-bold">HealthSync</h1>
        </span>
        <p className="text-sm w-3/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus
          atque amet impedit, officia, alias qui facere culpa id omnis saepe.
          Debitis ad quas fugit eum atque omnis? Ex, esse? Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Eum, laborum! Provident, veniam
          adipisci enim ratione deleniti quasi voluptatum expedita suscipit
          consequatur, nam iste, laboriosam voluptatibus reprehenderit labore
          consectetur eaque alias.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <div className="w-full mt-6 flex items-center justify-evenly">
          <span className="flex flex-col gap-2 items-center jsutify-center">
            <img
              src="../../src/assets/about-us.png"
              alt=""
              className="h-20 w-20 object-cover rounded-full border border-black"
            />
            <p className="text-sm">developer</p>
          </span>
          <span className="flex flex-col gap-2 items-center jsutify-center">
            <img
              src="../../src/assets/about-us.png"
              alt=""
              className="h-20 w-20 object-cover rounded-full border border-black"
            />
            <p className="text-sm">developer</p>
          </span>
          <span className="flex flex-col gap-2 items-center jsutify-center">
            <img
              src="../../src/assets/about-us.png"
              alt=""
              className="h-20 w-20 object-cover rounded-full border border-black"
            />
            <p className="text-sm">developer</p>
          </span>
          <span className="flex flex-col gap-2 items-center jsutify-center">
            <img
              src="../../src/assets/about-us.png"
              alt=""
              className="h-20 w-20 object-cover rounded-full border border-black"
            />
            <p className="text-sm">developer</p>
          </span>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <span className="flex flex-col gap-2">
          <h1 className="-ml-1 text-3xl font-bold">Why HealthSync?</h1>
          <p className="text-sm w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus
            atque amet impedit, officia, alias qui facere culpa id omnis saepe.
            Debitis ad quas fugit eum atque omnis? Ex, esse? Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Eum, laborum! Provident,
            veniam adipisci enim ratione deleniti quasi voluptatum expedita
            suscipit consequatur, nam iste, laboriosam voluptatibus
            reprehenderit labore consectetur eaque alias.
          </p>
        </span>
        <img
          src="../../src/assets/about-us.png"
          alt=""
          className="h-64 object-contain max-xl:hidden"
        />
      </div>
    </div>
  );
};

export default About;

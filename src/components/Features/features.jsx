import React from "react";
import { FaEye, FaBrain, FaRobot } from "react-icons/fa";
import { PiGenderFemaleBold } from "react-icons/pi";
import { TbReportMedical } from "react-icons/tb";

const Features = () => {
  return (
    <div className="h-screen w-full px-10 flex flex-col items-center">
      <span className="pt-6 flex flex-col items-center gap-1">
        <h1 className="text-6xl font-bold">Features</h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing adipisicing
          adipisicing .
        </p>
      </span>
      <div className="w-full h-4/5 flex items-center justify-evenly gap-8">
        <div className="w-1/3 flex flex-col gap-6">
          <span className="py-6 px-6 flex flex-col justify-between rounded-md bg-sky-200">
            <span className="flex items-center  gap-2">
              <h3 className="text-xl font-semibold text-slate-900">OCT</h3>
              <FaEye className="text-xl text-gray-800" />
            </span>
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis consequatur ratione magnam ea. Rerum nam
              perspiciatis, possimus debitis sapiente praesentium!
            </p>
          </span>
          <span className="py-6 px-6 flex flex-col justify-between rounded-md bg-amber-200">
            <span className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-slate-900">MRI</h3>
              <FaBrain className="text-xl text-amber-800" />
            </span>
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis consequatur ratione magnam ea. Rerum nam
              perspiciatis, possimus debitis sapiente praesentium!
            </p>
          </span>
        </div>
        <div className="py-6 px-6 w-1/3 h-2/3 flex flex-col rounded-md bg-orange-200">
          <span className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-slate-900">
              AI Integration
            </h3>
            <FaRobot className="text-2xl text-violet-800 -mt-1" />
          </span>
          <p className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis consequatur ratione magnam ea. Rerum nam perspiciatis,
            possimus debitis sapiente praesentium! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis consequatur ratione
            magnam ea. Rerum nam perspiciatis, possimus debitis sapiente
            praesentium!
          </p>
        </div>
        <div className="w-1/3 flex flex-col gap-6">
          <span className="py-6 px-6 flex flex-col justify-between rounded-md bg-pink-200">
            <span className="flex items-center  gap-2">
              <h3 className="text-xl font-semibold text-slate-900">
                Mammography
              </h3>
              <PiGenderFemaleBold className="text-xl text-gray-800" />
            </span>
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis consequatur ratione magnam ea. Rerum nam
              perspiciatis, possimus debitis sapiente praesentium!
            </p>
          </span>
          <span className="py-6 px-6 flex flex-col justify-between rounded-md bg-lime-200">
            <span className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-slate-900">
                Digital Report
              </h3>
              <TbReportMedical className="text-xl text-gray-800" />
            </span>
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis consequatur ratione magnam ea. Rerum nam
              perspiciatis, possimus debitis sapiente praesentium!
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Features;

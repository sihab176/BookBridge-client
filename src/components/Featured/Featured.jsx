import React from "react";

import { GiFigurehead } from "react-icons/gi";
import { PiPlanetDuotone } from "react-icons/pi";
import { GiFamilyHouse } from "react-icons/gi";
import { GiLoveMystery } from "react-icons/gi";
import { GiSecretBook } from "react-icons/gi";
import { GiMagicBroom } from "react-icons/gi";

const Featured = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto max-w-[1280px] pt-20 pb-28  px-6  bg-[#f2e9e4] lora-font">
        <h1 className="text-3xl font-bold   pb-8 text-black ">Top categories</h1>
        <div className="grid lg:grid-cols-6 grid-cols-2  md:grid-cols-3 gap-10">
          <section className="border border-gray-400 text-center py-9 rounded ">
            <h1 className="flex text-[#d4a373] justify-center ">
              <GiFigurehead size={72} />
            </h1>
            <h3 className="text-3xl mt-3 text-[#582f0e] ">Horror</h3>
          </section>
          <section className="border border-gray-400 text-center py-9 rounded">
            <h1 className="flex text-[#d4a373] justify-center">
              <PiPlanetDuotone size={72} />
            </h1>
            <h3 className="text-3xl mt-3 text-[#582f0e]">Fiction</h3>
          </section>
          <section className="border border-gray-400 text-center py-9 rounded">
            <h1 className="flex text-[#d4a373] justify-center">
              <GiFamilyHouse size={72} />
            </h1>
            <h3 className="text-3xl mt-3 text-[#582f0e]">Family</h3>
          </section>
          <section className="border border-gray-400 text-center py-9 rounded">
            <h1 className="flex text-[#d4a373] justify-center">
              <GiLoveMystery size={72} />
            </h1>
            <h3 className="text-3xl mt-3 text-[#582f0e]">Romance</h3>
          </section>
          <section className="border border-gray-400 text-center py-9 rounded">
            <h1 className="flex text-[#d4a373] justify-center">
              <GiSecretBook size={72} />
            </h1>
            <h3 className="text-3xl mt-3 text-[#582f0e]">Horror</h3>
          </section>
          <section className="border border-gray-400 text-center py-9 rounded">
            <h1 className="flex text-[#d4a373] justify-center">
              <GiMagicBroom size={72} />
            </h1>
            <h3 className="text-3xl mt-3 text-[#582f0e]">Horror</h3>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Featured;

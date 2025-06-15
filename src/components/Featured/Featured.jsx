import React from "react";
import { FaBookAtlas } from "react-icons/fa6";
import { GiBookCover } from "react-icons/gi";
import { SiMdbook } from "react-icons/si";
import { BiSolidBook } from "react-icons/bi";

const Featured = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto my-20 ">
        <h1 className="text-5xl font-bold text-center py-10">
          All Books Categories
        </h1>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 ">
          {/* card -1 */}
          <div className="  bg-base-100 shadow-2xl shadow-purple-300 space-y-7 text-center p-5 rounded md:mr-4">
            <div className="flex justify-center">
              <GiBookCover size={42} />
            </div>
            <h1 className="font-bold text-2xl">Fantasy </h1>
            <p>
              Imaginative <br /> stories created by the author. <br /> Includes
              novels pot
            </p>
          </div>
          {/* card -2 */}
          <div className="  bg-base-100 shadow-2xl shadow-purple-300 space-y-7 text-center p-5 rounded md:mr-4">
            <div className="flex justify-center">
              <FaBookAtlas size={42} />
            </div>
            <h1 className="font-bold text-2xl"> Non-Fiction</h1>
            <p>
              Based on real <br /> facts, events . Informative <br /> and
              educational
            </p>
          </div>
          {/* card -3 */}
          <div className="  bg-base-100 shadow-2xl shadow-purple-300 space-y-7 text-center p-5 rounded md:mr-4">
            <div className="flex justify-center">
              <SiMdbook size={42} />
            </div>
            <h1 className="font-bold text-2xl">Fantasy</h1>
            <p>
              Focuses on <br /> solving a crime or uncovering <br /> secrets.
              Often includes
            </p>
          </div>
          {/* card -4 */}
          <div className="  bg-base-100 shadow-2xl shadow-purple-300 space-y-7 text-center p-5 rounded md:mr-4">
            <div className="flex justify-center">
              <BiSolidBook size={42} />
            </div>
            <h1 className="font-bold text-2xl">Biography</h1>
            <p>
              The real-life <br /> story of a person’s life and <br />{" "}
              achievements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;

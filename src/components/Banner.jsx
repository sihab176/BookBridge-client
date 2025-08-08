import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  const Banner1 =
    "https://i.ibb.co.com/hFmhZXvt/Black-White-Minimal-Book-Shop-Desktop-Prototype.png";
  const Banner2 =
    "https://i.ibb.co.com/Dfxc3Q07/Beige-Illustrated-Book-Review-You-Tube-Thumbnail.png";
  const Banner3 = "https://i.ibb.co.com/BVDsjM2x/Brown-Green-Aesthetic-Book-Store-Welcome-Banner.png";
  return (
    <>
      <div className="h-screen w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-[560px]">
              {/* first banner */}
              <div
                className=" h-screen w-full bg-no-repeat  bg-center  bg-cover text-black"
                style={{ backgroundImage: `url(${Banner1})` }}
              >
                <div className="md:pl-32 pt-28 space-y-8  md:text-start text-center">
                  <h1 className="text-5xl font-bold ">
                    Welcome to our <br /> Book Bridge
                  </h1>
                  <p className="">
                    Seed some happiness with our top picks for smart grow
                    lights,
                    <br /> gardening kits, accessories and more. lights,
                    gardening <br /> kits, accessories and more.
                  </p>
                  <div className="">
                    <button className="px-9 py-3 bg-sky-700  hover:text-black">
                      SHOP ALL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[560px]">
              {/* second banner */}
              <div
                className=" h-screen w-full bg-no-repeat  bg-center  bg-cover text-black"
                style={{ backgroundImage: `url(${Banner2})` }}
              >
                <div className="md:pl-32 pt-28 space-y-8  md:text-start text-center">
                  <h1 className="text-5xl font-bold ">
                    Welcome to our <br /> Book Bridge
                  </h1>
                  <p className="">
                    Seed some happiness with our top picks for smart grow
                    lights,
                    <br /> gardening kits, accessories and more. lights,
                    gardening <br /> kits, accessories and more.
                  </p>
                  <div className="">
                    <button className="px-9 py-3 bg-sky-700  hover:text-black">
                      SHOP ALL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[560px]">
              {/* second banner */}
              <div
                className=" h-screen w-full bg-no-repeat  bg-center  bg-cover text-black"
                style={{ backgroundImage: `url(${Banner3})` }}
              >
                <div className="md:pl-32 pt-28 space-y-8  md:text-start text-center">
                  <h1 className="text-5xl font-bold ">
                    Welcome to our <br /> Book Bridge
                  </h1>
                  <p className="">
                    Seed some happiness with our top picks for smart grow
                    lights,
                    <br /> gardening kits, accessories and more. lights,
                    gardening <br /> kits, accessories and more.
                  </p>
                  <div className="">
                    <button className="px-9 py-3 bg-sky-700  hover:text-black">
                      SHOP ALL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;

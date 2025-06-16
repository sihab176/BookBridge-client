import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import Banner1 from "../../assets/banner-4.avif";
// import Banner2 from "../../assets/banner-5.jpg";
// import Banner3 from "../../assets/banner-7.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  const Banner1 = "https://i.ibb.co/SwfY2M9W/one-1.jpg";
  const Banner2 = "https://i.ibb.co/SwfY2M9W/one-1.jpg";
  const Banner3 = "https://i.ibb.co/SwfY2M9W/one-1.jpg";
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
            <div className="w-full h-screen">
              {/* first banner */}
              <div
                className=" h-screen w-full bg-no-repeat  bg-center  bg-cover"
                style={{ backgroundImage: `url(${Banner3})` }}
              >
                <div className="flex justify-between items-center md:flex-row flex-col-reverse ">
                  <div className="md:pl-28  space-y-8 text-white md:text-start text-center">
                    <h1 className="text-5xl font-bold text-white">
                      Welcome to our <br /> Book Bridge
                    </h1>
                    <p className="">
                      Seed some happiness with our top picks for smart grow
                      lights,
                      <br /> gardening kits, accessories and more. lights,
                      gardening <br /> kits, accessories and more.
                    </p>
                    <div className="">
                      <button className="px-10 py-4 bg-blue-700   hover:bg-white hover:text-black">
                        SHOP ALL
                      </button>
                    </div>
                  </div>
                  <img
                    className="md:w-[600px]"
                    src="https://i.ibb.co/spKjY1NP/hero-2-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-screen">
              {/* first banner */}
              <div
                className=" h-screen w-full bg-no-repeat  bg-center  bg-cover"
                style={{ backgroundImage: `url(${Banner3})` }}
              >
                <div className="flex justify-between items-center md:flex-row flex-col-reverse ">
                  <div className="md:pl-28  space-y-8 text-white md:text-start text-center">
                    <h1 className="text-5xl font-bold text-white">
                      Welcome to our <br /> Book Bridge
                    </h1>
                    <p className="">
                      Seed some happiness with our top picks for smart grow
                      lights,
                      <br /> gardening kits, accessories and more. lights,
                      gardening <br /> kits, accessories and more.
                    </p>
                    <div className="">
                      <button className="px-10 py-4 bg-blue-700   hover:bg-white hover:text-black">
                        SHOP ALL
                      </button>
                    </div>
                  </div>
                  <img
                    className="md:w-[600px]"
                    src="https://i.ibb.co/KPbBG3F/hero-3-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-screen">
              {/* first banner */}
              <div
                className=" h-screen w-full bg-no-repeat  bg-center  bg-cover"
                style={{ backgroundImage: `url(${Banner3})` }}
              >
                <div className="flex justify-between items-center md:flex-row flex-col-reverse ">
                  <div className="md:pl-28  space-y-8 text-white md:text-start text-center">
                    <h1 className="text-5xl font-bold text-white">
                      Welcome to our <br /> Book Bridge
                    </h1>
                    <p className="">
                      Seed some happiness with our top picks for smart grow
                      lights,
                      <br /> gardening kits, accessories and more. lights,
                      gardening <br /> kits, accessories and more.
                    </p>
                    <div className="">
                      <button className="px-10 py-4 bg-blue-700   hover:bg-white hover:text-black">
                        SHOP ALL
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="md:w-[700px]"
                      src="https://i.ibb.co/3mCsw6tZ/hero-1-removebg-preview.png"
                      alt=""
                    />
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

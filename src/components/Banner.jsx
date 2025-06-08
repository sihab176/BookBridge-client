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
  const Banner1 =
    "https://watermark.lovepik.com/photo/50053/8233.jpg_wh1200.jpg";
  const Banner2 =
    "https://t3.ftcdn.net/jpg/10/95/01/32/360_F_1095013242_LyH5LMH46VYuYMqrhv6sg6Y1jdivbffo.jpg";
  const Banner3 =
    "https://i.pinimg.com/736x/65/37/94/65379450a931cd82de035df1b93d5d13.jpg";
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
                <div className="md:pl-28 lg:pt-44 md:pt-24 pt-44 space-y-8 text-white">
                  <h1 className="text-5xl font-bold text-white">
                    Welcome to our <br /> Bookstore
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
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-screen">
              {/* second banner */}
              <div
                className=" h-screen w-full bg-no-repeat  bg-center  bg-cover"
                style={{ backgroundImage: `url(${Banner2})` }}
              >
                <div className="md:pl-28 lg:pt-44 md:pt-24 pt-44 space-y-8 text-white">
                  <h1 className="text-5xl font-bold text-white">
                    Welcome to our <br /> Bookstore
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
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-screen">
              {/* third banner */}
              <div
                className=" h-screen w-full bg-no-repeat  bg-center  bg-cover"
                style={{ backgroundImage: `url(${Banner1})` }}
              >
                <div className="md:pl-28 lg:pt-44 md:pt-24 pt-44 space-y-8 text-white">
                  <h1 className="text-5xl font-bold text-white">
                    Welcome to our <br /> Bookstore
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
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;

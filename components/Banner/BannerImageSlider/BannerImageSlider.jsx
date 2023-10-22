"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const BannerImageSlider = () => {
  const data = [
    {
      title: "Hot Deals",
      subTitle: "Hot Deals Headphones",
      image: "https://i.ibb.co/rdJWxpg/asset-24.jpg",
    },
    /* {
      title: "Best Sales",
      subTitle: "Best Deals Keyborads",
      image: "https://i.ibb.co/8YPLxRj/asset-23.jpg",
    },
    {
      title: "Top Deals",
      subTitle: "Top Deals Accesories",
      image: "https://i.ibb.co/sVgj4Vt/Untitled-design.png",
    }, */
  ];
  return (
    <div>
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
        }}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className=""
      >
        {data.map((dt) => (
          <SwiperSlide className="relative px-4 md:px-0" key={dt.text}>
            <div className="absolute md:top-[30%] top-1/3 md:left-[20%] text-center text-white">
              <p className="text-md font-bold">{dt.title}</p>
              <h5 className="md:text-6xl text-4xl mt-2 mb-5 font-semibold md:w-[55%] mx-auto">
                {dt.subTitle}
              </h5>
              <Button
                radius="full"
                className="uppercase bg-indigo-500 text-white text-sm font-bold"
              >
                Shop Now
              </Button>
            </div>
            <Image
              src={dt.image}
              alt="Image"
              className="md:w-full rounded-3xl object-cover object-center h-[440px] md:h-full"
              width={1000}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerImageSlider;

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard";

const NewArrivalProducts = () => {
  return (
    <section className="mt-10">
      <div className="uppercase font-medium flex items-center justify-between mb-8 px-4 md:px-0">
        <h3 className="md:text-3xl text-xl font-bold">New Arrival Products</h3>
        <Link
          href="/"
          className="md:text-sm text-xs hover:underline hover:text-indigo-400 duration-500"
        >
          view all
        </Link>
      </div>
      <div className="md:grid grid-cols-5 gap-5">
        <div className="col-span-1 relative px-4 md:px-0">
          <Image
            draggable
            width={1000}
            height={1000}
            src="https://i.ibb.co/ctdMhjk/nothing-phone-1.jpg"
            alt="Image"
            className="h-full object-cover object-top rounded-3xl"
          />
          <div className="absolute top-5 md:left-11 left-1/4 text-center">
            <p className="font-semibold text-gray-400 uppercase">
              At a good price
            </p>
            <h2 className="text-xl uppercase text-white">Nothing Phone 1</h2>
            <Button className="bg-indigo-500 text-white uppercase font-semibold mt-2">
              Buy Now
            </Button>
          </div>
        </div>
        <div className="md:col-span-4 px-4 md:px-0 mt-4 md:mt-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper cursor-grab"
          >
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <SwiperSlide key={item}>
                <ProductCard isNewArrival={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalProducts;

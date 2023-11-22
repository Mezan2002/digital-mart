"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCard from "../ProductCard/ProductCard";

const DiscountSellProductCard = () => {
  const productData = [];
  return (
    <section className="my-14 px-4 md:px-0">
      <div>
        <div className="uppercase font-medium flex items-center justify-between mb-8 px-4 md:px-0">
          <h3 className="md:text-3xl text-xl font-bold md:block hidden">
            Discount Sell Products
          </h3>
          <h3 className="md:text-3xl text-xl font-bold block md:hidden">
            Discount Products
          </h3>
          <Link
            href="/"
            className="md:text-sm text-xs hover:underline hover:text-indigo-400 duration-500"
          >
            view all
          </Link>
        </div>
        <div className="">
          <Swiper
            style={{
              "--swiper-pagination-color": "#6366F1",
            }}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
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
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="mySwiper cursor-grab"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((item) => (
              <SwiperSlide key={item}>
                <ProductCard isOffSell={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DiscountSellProductCard;

"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TrustedCompanies = () => {
  const companyLogos = [
    "https://i.ibb.co/0XYq9V4/Frame-1000001516.png",
    "https://i.ibb.co/rxqmNmT/Frame-1000001517.png",
    "https://i.ibb.co/RjbSz90/Frame-1000001513.png",
    "https://i.ibb.co/qxZxnXH/Frame-1000001515.png",
    "https://i.ibb.co/QnZq8yX/Frame-1000001514.png",
  ];
  return (
    <section className="">
      <div className="mt-16 md:-mx-16 h-28">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          className="mySwiper cursor-grab"
        >
          {companyLogos.map((logo) => (
            <SwiperSlide className="" key={logo}>
              <div>
                <Image
                  loading="lazy"
                  draggable
                  src={logo}
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedCompanies;

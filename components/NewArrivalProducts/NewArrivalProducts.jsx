"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Button, Card, CardBody, Chip, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { PiArrowsClockwiseBold } from "react-icons/pi";

const NewArrivalProducts = () => {
  const miniIconsData = [
    {
      icon: <AiOutlineHeart className="h-4 w-4" />,
      tooltipContent: "ADD TO WISHLIST",
    },
    {
      icon: <PiArrowsClockwiseBold className="h-4 w-4" />,
      tooltipContent: "COMPARE",
    },
    {
      icon: <AiOutlineEye className="h-4 w-4" />,
      tooltipContent: "QUICK VIEW",
    },
    {
      icon: <AiOutlineShoppingCart className="h-4 w-4" />,
      tooltipContent: "ADD TO CART",
    },
  ];
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
        <div className="md:col-span-4  px-4 md:px-0 mt-4 md:mt-0">
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
                <Card className="shadow-none group relative rounded-3xl">
                  <CardBody className="overflow-x-hidden">
                    {/* discount amount start */}
                    <Chip className="text-white bg-indigo-500">New</Chip>
                    {/* discount amount end */}

                    {/* card top container start */}
                    <div>
                      {/* card top image container start */}
                      <div className="w-[250px] mx-auto">
                        <Image
                          draggable
                          src="https://i.ibb.co/ChjrszX/asset-6.jpg"
                          alt="Image"
                          height={1000}
                          width={1000}
                          className="block group-hover:hidden transition-all duration-1000 max-h-80"
                        />
                        <Image
                          draggable
                          src="https://i.ibb.co/RTwYdrV/asset-7.jpg"
                          alt="Image"
                          height={1000}
                          width={1000}
                          className="transition-all duration-1000 hidden group-hover:block max-h-80"
                        />
                      </div>
                      {/* card top image container end */}
                      {/* buttons container start */}
                      <div className="absolute top-6 -right-5 group-hover:right-5 opacity-0  duration-500 group-hover:opacity-100 flex flex-col items-center gap-3">
                        {miniIconsData.map((icon) => (
                          <div key={icon.icon}>
                            <Tooltip
                              delay={400}
                              showArrow
                              placement="left"
                              content={icon.tooltipContent}
                              classNames={{
                                base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-300",
                                arrow:
                                  "bg-gradient-to-br from-white to-neutral-300 dark:bg-white",
                              }}
                            >
                              <button className="duration-500 bg-gray-100 hover:bg-black hover:text-white p-2 rounded-full">
                                {icon.icon}
                              </button>
                            </Tooltip>
                          </div>
                        ))}
                      </div>
                      {/* buttons container end */}
                    </div>
                    {/* card top container end */}
                    {/* card content container start */}
                    <div>
                      <span className="uppercase cursor-pointer">Umino</span>
                      <p className="text-lg font-medium cursor-pointer hover:text-indigo-500 duration-500">
                        Samsung Galaxy S21 FE 8GB/128GB - White
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <h2 className="font-bold text-lg text-indigo-500">
                          $110.00
                        </h2>
                        <div className="flex items-center">
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </div>
                    </div>
                    {/* card content container end */}
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalProducts;

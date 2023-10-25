"use client";
import CarImage from "@/public/car.svg";
import LikeImage from "@/public/like.svg";
import ReturnImage from "@/public/return.svg";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const ServicesWeProvide = () => {
  return (
    <section className="my-20">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <span className="text-sm text-indigo-500 font-medium">
            There are some redeeming factors
          </span>
          <h2 className="md:text-3xl text-xl px-4 md:px-0 font-semibold my-3">
            We Provide High Quality Goods
          </h2>
          <p className="text-gray-400 md:text-base text-sm px-4 md:px-0">
            A client that&apos;s unhappy for a reason is a problem, a client
            that&apos;s unhappy though he or her can&apos;t
          </p>
        </div>
        <div className="md:flex items-center justify-between mt-8">
          <div className="text-center">
            <Image
              src={CarImage}
              alt="Image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <h2 className="text-2xl font-medium my-4">Fast Delivery</h2>
            <p className="text-gray-400 text-sm w-8/12 mx-auto ">
              Chances are there wasn&apos;t collaboration and checkpoints, there
              wasn&apos;t a process.
            </p>
          </div>
          <div className="text-center">
            <Image
              src={LikeImage}
              alt="Image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <h2 className="text-2xl font-medium my-4">Best Quality</h2>
            <p className="text-gray-400 text-sm w-8/12 mx-auto ">
              It&apos;s content strategy gone awry right from the start.
              Forswearing the use of Lorem Ipsum.
            </p>
          </div>
          <div className="text-center">
            <Image
              src={ReturnImage}
              alt="Image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <h2 className="text-2xl font-medium my-4">Free Return</h2>
            <p className="text-gray-400 text-sm w-8/12 mx-auto ">
              True enough, but that&apos;s not all that it takes to get things
              back on track out there for a text.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeProvide;

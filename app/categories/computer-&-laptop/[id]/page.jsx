"use client";
import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules

const SingleProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section>
      <div className="grid grid-cols-7 gap-5">
        <div className="col-span-4 min-h-screen">
          <p>Hello</p>
        </div>
        <div className="col-span-3 min-h-screen">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://i.ibb.co/6ZPj1fC/asset-18.jpg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;

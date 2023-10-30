"use client";

import SingleCategorieHeader from "@/components/SingleCategorieHeader/SingleCategorieHeader";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Checkbox,
  Select,
  SelectItem,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { PiArrowsClockwiseBold } from "react-icons/pi";

const ComputerAndLaptopPage = () => {
  const categorieItems = [
    {
      title: "Computer & Laptop",
    },
    {
      title: "Tablet & IPad",
    },
    {
      title: "Printer",
    },
    {
      title: "Smartphones",
    },
    {
      title: "Cameras",
    },
    {
      title: "Keyboard & Mouse",
    },
    {
      title: "Video Games",
    },
    {
      title: "Smart Watch",
    },
    {
      title: "Headphones & Audios",
    },
    {
      title: "Video Projectors",
    },
    {
      title: "Networking Devices",
    },
    {
      title: "Hot Selling Products",
    },
  ];
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1", "2", "3"]));
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
  const sortByData = [
    { title: "Default" },
    { title: "Latest" },
    { title: "Popularity" },
    { title: "Avarage Rating" },
    { title: "Price High to Low" },
    { title: "Price Low to High" },
  ];
  const showItemsNumber = ["20 Items", "40 Items", "60 Items"];

  return (
    <section>
      <div>
        <SingleCategorieHeader />
      </div>
      <div className="flex items-center justify-between border-b-1 my-4 pb-5">
        <div>
          <p className="font-semibold">Showing 1–20 of 67 results</p>
        </div>
        <div className="flex items-center">
          <div>
            <Select label="Sort By" className="w-48 pr-5" size="sm">
              {sortByData.map((item) => (
                <SelectItem key={item.title} value={item.title}>
                  {item.title}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              label="Show Items"
              className="w-48 px-5 border-x-2"
              size="sm"
            >
              {showItemsNumber.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex items-center pl-5">
            <BsGrid className="text-xl mr-3" />
            <AiOutlineUnorderedList className="text-xl" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 border-r-1 pr-8">
          <Accordion selectedKeys={selectedKeys}>
            <AccordionItem key="1" aria-label="Categories" title="Categories">
              {categorieItems.map((item) => (
                <Checkbox key={item.title} className="my-0.5 block">
                  {item.title}
                </Checkbox>
              ))}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-4 pl-3">
          <div className="grid md:grid-cols-4 grid-cols-1 px-4 md:px-0">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((product) => (
              <Card
                key={product}
                className="shadow-none group relative rounded-none border-l-1 border-b-1 hover:z-40  hover:shadow-2xl"
              >
                <CardBody className="overflow-x-hidden">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputerAndLaptopPage;

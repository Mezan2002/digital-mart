import { Card, CardBody, Chip, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { PiArrowsClockwiseBold } from "react-icons/pi";

const DiscountSellProductCard = () => {
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

  const productData = [];
  return (
    <section className="my-14">
      <div>
        <div className="uppercase font-medium flex items-center justify-between mb-8 px-4 md:px-0">
          <h3 className="md:text-3xl text-xl font-bold">
            Discount Sell Products
          </h3>
          <Link
            href="/"
            className="md:text-sm text-xs hover:underline hover:text-indigo-400 duration-500"
          >
            view all
          </Link>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-1 px-4 md:px-0 gap-5">
          {[0, 1, 2, 3, 4].map((product) => (
            <Card
              key={product}
              className="shadow-none group relative rounded-3xl"
            >
              <CardBody className="overflow-x-hidden">
                {/* discount amount start */}
                <Chip className="text-white bg-indigo-500"> -20% </Chip>
                {/* discount amount end */}

                {/* card top container start */}
                <div>
                  {/* card top image container start */}
                  <div className="w-[250px] mx-auto">
                    <Image
                      src="https://i.ibb.co/ChjrszX/asset-6.jpg"
                      alt="Image"
                      height={1000}
                      width={1000}
                      className="block group-hover:hidden transition-all duration-1000 max-h-80"
                    />
                    <Image
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
                      <sup className="text-gray-400">
                        <del>$150.00</del>
                      </sup>
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
    </section>
  );
};

export default DiscountSellProductCard;

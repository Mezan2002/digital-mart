import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { BsCamera, BsKeyboard, BsPrinter, BsSmartwatch } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { LuProjector, LuRouter } from "react-icons/lu";
import { PiFireBold, PiGameControllerDuotone } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { SlScreenTablet } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const CategoriesPage = () => {
  const categorieItems = [
    {
      title: "Computer & Laptop",
      availaleItems: 10,
      href: "/categories/computer-&-laptop",
      icon: <RiComputerLine className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Tablet & IPad",
      href: "/",
      availaleItems: 10,
      icon: <SlScreenTablet className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Printer",
      href: "/",
      availaleItems: 10,
      icon: <BsPrinter className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Smartphones",
      href: "/",
      availaleItems: 10,
      icon: <FiSmartphone className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Cameras",
      href: "/",
      availaleItems: 10,
      icon: <BsCamera className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Keyboard & Mouse",
      href: "/",
      availaleItems: 10,
      icon: <BsKeyboard className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Video Games",
      href: "/",
      availaleItems: 10,
      icon: <PiGameControllerDuotone className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Smart Watch",
      href: "/",
      availaleItems: 10,
      icon: <BsSmartwatch className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Headphones & Audios",
      href: "/",
      availaleItems: 10,
      icon: <TfiHeadphoneAlt className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Video Projectors",
      href: "/",
      availaleItems: 10,
      icon: <LuProjector className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Networking Devices",
      href: "/",
      availaleItems: 10,
      icon: <LuRouter className="h-40 w-40 mx-auto my-4" />,
    },
    {
      title: "Hot Selling Products",
      href: "/",
      availaleItems: 10,
      icon: <PiFireBold className="h-40 w-40 mx-auto mb-6" />,
    },
  ];
  return (
    <section>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {categorieItems.map((item) => (
          <Link key={item.title} href={item.href}>
            <Card className="shadow-none">
              <CardBody className="text-center uppercase">
                {item.icon}
                <h3 className="text-xl font-bold">{item.title}</h3>
                <span className="text-gray-400 mt-4">
                  {item.availaleItems} Products
                </span>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesPage;

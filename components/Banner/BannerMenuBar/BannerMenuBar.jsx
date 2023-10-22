import { Card } from "@nextui-org/react";
import Link from "next/link";
import { BsCamera, BsKeyboard, BsPrinter, BsSmartwatch } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { PiFireBold, PiGameControllerDuotone } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { SlScreenTablet } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const BannerMenuBar = () => {
  return (
    <div>
      <Card className="shadow-none">
        <div className="px-8 pt-2 pb-2">
          <ul className="text-sm font-semibold">
            <li className="py-3.5 border-b-1 flex items-center">
              <span>
                <RiComputerLine className="h-5 w-5 mr-2" />
              </span>
              <Link href="/">Computer & Laptop</Link>
            </li>
            <li className="py-3.5 border-b-1 flex items-center">
              <span>
                <SlScreenTablet className="h-5 w-5 mr-2" />
              </span>
              <Link href="/">Tablet & IPad</Link>
            </li>
            <li className="py-3.5 border-b-1 flex items-center">
              <span>
                <BsPrinter className="h-5 w-5 mr-2" />
              </span>
              <Link href="/">Printer</Link>
            </li>
            <li className="py-3.5 border-b-1 flex items-center">
              <span>
                <FiSmartphone className="h-5 w-5 mr-2" />
              </span>
              <Link href="/">Smartphones</Link>
            </li>
            <li className="py-3.5 border-b-1 flex items-center">
              <span>
                <BsCamera className="h-5 w-5 mr-2" />
              </span>
              <Link href="/">Cameras</Link>
            </li>
            <li className="py-3.5 border-b-1 flex items-center">
              <span>
                <BsKeyboard className="h-5 w-5 mr-2" />
              </span>
              <Link href="/">Keyboard & Mouse</Link>
            </li>
            <li className="py-3.5 border-b-1 flex items-center">
              <span>
                <PiGameControllerDuotone className="h-5 w-5 mr-2" />
              </span>
              <Link href="/">Video Games</Link>
            </li>
            <li className="py-3.5 border-b-1 flex items-center">
              <span>
                <BsSmartwatch className="h-5 w-5 mr-2" />
              </span>
              <Link href="/">Smart Watch</Link>
            </li>
            <li className="py-3.5 border-b-1 flex items-center">
              <span>
                <TfiHeadphoneAlt className="h-5 w-5 mr-2" />
              </span>
              <Link href="/">Headphones & Audios</Link>
            </li>
            <li className="py-3 flex items-center">
              <span>
                <PiFireBold className="h-5 w-5 mr-2" />
              </span>
              <Link href="/">Hot Selling Products</Link>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default BannerMenuBar;

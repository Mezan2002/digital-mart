"use client";
import {
  Badge,
  Divider,
  Link,
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { SearchIcon } from "../Icons/SearchIcon";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectItems = [
    "All Categories",
    "Electronics",
    "Mobiles",
    "Earphones",
    "Accessories",
    "Watchs",
    "Laptops",
    "Keyboards",
    "Speakers",
  ];

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <div>
      <Navbar
        className="bg-white mt-3"
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarContent justify="start" className="w-3/12 items-center">
          <div className="mr-4 hidden md:flex">
            <Image
              src="https://i.ibb.co/Jsqf7SN/logo.png"
              alt="Digital Mart's Logo"
              width={1000}
              height={1000}
              className="h-14 w-14"
            />
          </div>
          <p className="hidden md:block -ml-5 mt-3 font-bold text-inherit text-2xl uppercase">
            Digital Mart
          </p>
        </NavbarContent>

        <div className="flex items-center md:w-6/12 md:border h-[50px] md:bg-[#F4F4F6] rounded-lg">
          <div className="md:hidden block">
            <Image
              src="https://i.ibb.co/Jsqf7SN/logo.png"
              alt="Digital Mart's Logo"
              width={1000}
              height={1000}
              className="h-10 w-10"
            />
          </div>
          <Select
            radius="sm"
            placeholder="All Categories"
            className="w-4/12 hidden md:block shadow-none rounded-l-full hover:bg-[#F4F4F6]"
            size="sm"
          >
            {selectItems.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </Select>
          <Divider orientation="vertical" className="hidden md:block" />
          <div className="w-8/12 hidden md:flex items-center justify-between ">
            <input
              type="text"
              className="p-2.5 outline-none w-full bg-transparent"
              placeholder="Search for Products"
            />
            <div className="mr-3 -mt-0.5">
              <SearchIcon />
            </div>
          </div>
        </div>
        <NavbarContent as="div" className="items-center w-3/12" justify="end">
          <div className="md:flex items-center hidden">
            <AiOutlineUser size={35} className="mr-1" />
            <div>
              <span className="text-xs text-gray-300">Log In</span>
              <p className="text-sm text-gray-600 -mt-1.5 font-medium">
                Account
              </p>
            </div>
          </div>
          <div className="hidden md:block mt-3">
            <Badge content="0" size="md">
              <AiOutlineHeart size={32} />
            </Badge>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <Badge content="0" size="md">
                <AiOutlineShoppingCart size={32} />
              </Badge>
              <div className="ml-2 mb-1 hidden md:block">
                <span className="text-xs text-gray-300">Cart</span>
                <p className="text-sm text-gray-600 -mt-1.5 font-medium">
                  $0.00
                </p>
              </div>
            </div>
          </div>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="py-5 w-11/12 mx-auto md:hidden block">
        <div className="flex items-center w-full border h-[50px] bg-[#F4F4F6] rounded-lg">
          <div className="md:hidden flex">
            <Select
              radius="sm"
              placeholder="All Categories"
              className="w-5/12 shadow-none rounded-l-full hover:bg-[#F4F4F6]"
              size="sm"
            >
              {selectItems.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
            <Divider orientation="vertical" className="" />
            <div className="w-7/12 flex items-center justify-between">
              <input
                type="text"
                className="p-2.5 outline-none w-full placeholder:text-sm bg-transparent"
                placeholder="Search for Products"
              />
              <div className="mr-3 -mt-0.5">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[78%] mx-auto pb-4">
        <Divider className="my-4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center border-r-2 font-semibold pr-10 w-2/12">
            <RxHamburgerMenu className="text-xl" />
            <p className="ml-2 uppercase text-lg">All Categories</p>
          </div>
          <div className="w-6/12">
            <ul className="flex items-center justify-between">
              <li>
                <Link href="/" className="text-black uppercase font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black uppercase font-semibold">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black uppercase font-semibold">
                  Hot Sale
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black uppercase font-semibold">
                  New Arrival
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black uppercase font-semibold">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/" className="text-black uppercase font-semibold">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-3/12 flex items-end justify-end">
            <AiOutlineClockCircle size={25} />
            <p className="ml-2 uppercase font-medium">
              Recenly Viewed Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

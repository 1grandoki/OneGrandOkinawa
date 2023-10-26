"use client";
import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SlMagnifier } from "react-icons/sl";
import { AnimatePresence, motion } from "framer-motion";
import Dropdown from "./Dropdown";
import MyDisclosure from "./MyDisclosure";
type Props = {};

const variants = {
  open: { innerHeight: "0" },
  closed: { innerHeight: "-100%" },
};

export default function Header({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (headerRef.current)
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          headerRef.current.style.top = "-80px";
        } else {
          // if scroll up show the navbar
          headerRef.current.style.top = "0px";
        }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div
      ref={headerRef}
      style={{ transition: "top 0.3s" }}
      className="fixed bg-transparent border-b-[1px] border-white/10 top-0 mx-auto w-full select-none z-10"
    >
      <Menu as="div" className="mx-auto flex max-w-[1200px] flex-col">
        <div className="mx-5 flex h-20 min-h-[48px] items-center justify-normal md:justify-between">
          {/* Menu button */}
          <Menu.Button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="flex sm:flex-auto flex-1 md:hidden sm:self-auto justify-self-start"
            aria-label="openNavigation"
          >
            {({ open }) => (
              <>
                {!open ? (
                  <div
                    className={`flex cursor-pointer transition-all duration-200 hover:scale-110 scale-100 select-none p-2 text-sm font-medium active:scale-95`}
                  >
                    <HiOutlineMenuAlt3 className={`h-7 w-7`} />
                  </div>
                ) : (
                  <div
                    className={`flex cursor-pointer transition-all duration-200 hover:scale-110 scale-100 select-none p-2 text-sm font-medium active:scale-95`}
                  >
                    <AiOutlineClose className={`h-7 w-7`} />
                  </div>
                )}
              </>
            )}
          </Menu.Button>
          {/* logo & navigation*/}
          <motion.div
            viewport={{ once: true }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              damping: 15,
              stiffness: 50,
            }}
            className="relative mx-auto md:flex-auto flex-1 flex items-center justify-self-center justify-start gap-x-8"
          >
            <Link
              href="/"
              className="relative font-medium uppercase flex w-[150px] cursor-pointer justify-start"
            >
              one grand Oki
            </Link>

            {/* navigation */}
            <nav className="hidden font-light text-sm items-center gap-x-2 md:flex lg:gap-x-3">
              <Dropdown
                title="Car rental"
                elements={[
                  "All",
                  "Sales",
                  "JDM",
                  "Executive",
                  "Exotic",
                  "Hyper",
                ]}
              />
              <Dropdown
                title="Services"
                elements={[
                  "All",
                  "Sales",
                  "Timeless Services",
                  "Royal Services",
                ]}
              />
              <Link
                className="flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:sm:flex"
                href="#premium"
              >
                Premium
              </Link>
              <Link
                className="flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:sm:flex"
                href="#contact"
              >
                Contact us
              </Link>
            </nav>
          </motion.div>

          {/* actions */}
          <motion.div
            viewport={{ once: true }}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 15,
              stiffness: 50,
            }}
            className="flex md:flex-auto flex-1 md:self-auto justify-self-end items-center justify-end gap-x-5 sm:gap-x-10"
          >
            <button
              type="button"
              className="rounded-full cursor-pointer select-none text-base font-medium transition-all duration-200 drop-shadow-md shadow-peacoat-400 hover:drop-shadow-xl hover:scale-110 active:scale-90 flex"
            >
              <SlMagnifier className={"sm:w-6 w-5 h-5 sm:h-6"} />
            </button>
            <button
              type="button"
              className="rounded-full cursor-pointer select-none text-base font-medium transition-all duration-200 drop-shadow-md shadow-peacoat-400 hover:drop-shadow-xl hover:scale-110 active:scale-90 flex"
            >
              <HiOutlineShoppingBag className={"sm:w-6 w-5 h-5 sm:h-6"} />
            </button>
          </motion.div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 "
          enterTo="transform opacity-100 "
          leave="transition ease-in duration-300"
          leaveFrom="transform opacity-100 "
          leaveTo="transform opacity-0 "
        >
          <Menu.Items className="px-5 bg-teal-500/40 backdrop-blur-[6px] text-sm sm:px-16 xl:px-28">
            {({ open }) => (
              <div className="flex overflow-hidden md:hidden">
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: "auto",
                      }}
                      exit={{
                        height: 0,
                      }}
                      className={"flex w-full flex-col gap-y-2 "}
                    >
                      {/* actions */}
                      <motion.div
                        viewport={{ once: true }}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.4,
                          type: "spring",
                          damping: 15,
                          stiffness: 50,
                        }}
                        className="flex items-center justify-center gap-x-10"
                      >
                        <button
                          type="button"
                          className="hidden rounded-full cursor-pointer select-none text-base font-medium transition-all duration-200 drop-shadow-md shadow-peacoat-400 hover:drop-shadow-xl hover:scale-110 active:scale-90 lg:flex"
                        >
                          <SlMagnifier className={"w-6 h-6"} />
                        </button>
                        <button
                          type="button"
                          className="hidden rounded-full cursor-pointer select-none text-base font-medium transition-all duration-200 drop-shadow-md shadow-peacoat-400 hover:drop-shadow-xl hover:scale-110 active:scale-90 lg:flex"
                        >
                          <HiOutlineShoppingBag className={"w-6 h-6"} />
                        </button>
                      </motion.div>
                      <nav className="w-full py-2 ">
                        <div className="w-full items-center px-4 py-[16px]">
                          <MyDisclosure
                            title="Car rental"
                            elements={[
                              "All",
                              "Sales",
                              "JDM",
                              "Executive",
                              "Exotic",
                              "Hyper",
                            ]}
                          />
                        </div>
                        <div className="w-full items-center px-4 py-[16px]">
                          <MyDisclosure
                            title="Services"
                            elements={[
                              "All",
                              "Sales",
                              "Timeless Services",
                              "Royal Services",
                            ]}
                          />
                        </div>

                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              Services
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              Premium
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              Contact us
                            </Link>
                          )}
                        </Menu.Item>
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Menu.Items>
        </Transition>

        {/* </motion.div> */}
      </Menu>
    </div>
  );
}

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
type Props = {
  title?: string;
  elements: element[];
};
type element = {
  title: string;
  href: string;
};
export default function Dropdown({ title = "Options", elements }: Props) {
  return (
    //violet
    <div className="text-right font-light text-sm">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center bg-opacity-20 px-4 py-2 hover:bg-opacity-30 focus:outline-none">
            {title}
            <FiChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-teal-700"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 px-2 py-1 w-56 origin-top-right divide-y divide-white/5 text-teal-950/80 bg-teal-500/40 backdrop-blur-[6px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {elements.map((val, index) => {
              return (
                <Link
                  target="_blank"
                  href={val.href}
                  className="px-1 py-1 "
                  key={index}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active && "bg-teal-400/50"
                        } group flex w-full items-center px-2 py-2 text-sm`}
                      >
                        {val.title}
                      </button>
                    )}
                  </Menu.Item>
                </Link>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

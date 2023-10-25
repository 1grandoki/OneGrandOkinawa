import { Disclosure, Menu } from "@headlessui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
type Props = {
  title: string;
  elements: string[];
};
export default function MyDisclosure({ title = "Options", elements }: Props) {
  return (
    <Disclosure>
      <Disclosure.Button className="py-0">
        <div className="inline-flex w-full justify-center items-center gap-x-1 bg-opacity-20 hover:bg-opacity-30 focus:outline-none">
          {title}
          <FiChevronDown
            className="h-4 w-4 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </div>
      </Disclosure.Button>
      <Disclosure.Panel className="">
        <div className="flex flex-col gap-y-2 py-1 px-4">
          {elements.map((val, index) => {
            return (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Link
                    href={"#"}
                    className={`${
                      active && "bg-violet-500/50 text-white"
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    {val}
                  </Link>
                )}
              </Menu.Item>
            );
          })}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}

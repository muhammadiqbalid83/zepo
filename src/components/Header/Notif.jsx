import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
export default function Notif() {
  return (
    <div className="w-full  h-12 border-b border-base-border">
      <div className="w-4/5 mx-auto h-12 flex items-center justify-between">
        <div>
          <h2>Belanja diatas 350k gratis ongkir</h2>
        </div>
        <div className="flex items-center gap-1">
          <div>My Account</div>
          <Menu as="div" className="border-r-2 pt-1 cursor-pointer pr-5 h-5">
            <Menu.Button>
              <ChevronDownIcon
                className="mt-[-20px] ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-[190px] w-[160px] border-b border-l border-r border-base-border mt-[5px]">
                <div className="px-1 py-1 ">
                  <Menu.Item className="">
                    <button>Log In</button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <div className="pl-5 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className="rounded-full pl-[4.5px] pt-[1px]  bg-orange w-4 h-4 text-[10px] text-white">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ProfileIcon from "../assets/person-circle-outline.svg";

/* For routing: Just change the href below */
const navigation = [
  { name: "Service Centers", href: "#" },
  { name: "ePlatforms", href: "/eplatforms" },
  { name: "External Platforms", href: "/external-platforms" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SignedNavbar(props) {
  return (
    <Disclosure as="nav" className="bg-background border-b-2 border-dark-green font-Roboto">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 text-jetBlack" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-jetBlack" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center md:mr-auto">
                  <p className="font-NotoSerif text-2xl">BetterKFUPM</p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.name == props.name ? " text-mid-green" : "text-jetBlack hover:text-mid-green",
                          "px-3 py-2 text-md "
                        )}
                        aria-current={item.name == props.name ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm active:outline-none active:ring-1 active:ring-jetBlack active:ring-offset-1 active:ring-offset-jetBlack">
                      <span className="sr-only">Open user menu</span>
                      <img className="bg-background w-8" src={ProfileIcon} alt="Profile Icon" />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-jetBlack py-1 shadow-lg ring-1 ring-background ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          /* Change this href for routing purposes */
                          <a href="#" className={classNames(active ? "text-light-green" : "text-background", "block px-4 py-2 text-sm ")}>
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          /* Change this href for routing purposes */
                          <a
                            href="#"
                            className={classNames(
                              active ? "text-light-green" : "text-background",
                              "block px-4 py-2 text-sm text-background"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.name == props.name ? " text-mid-green" : "text-jetBlack hover:text-mid-green",
                    "px-3 py-2 text-md "
                  )}
                  aria-current={item.name == props.name ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

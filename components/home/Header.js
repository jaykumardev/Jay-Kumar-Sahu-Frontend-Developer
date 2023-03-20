import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import DesktopSlideOver from "./DesktopSlideOver";
import Link from "next/link";

const navigation = [
  { name: "FALCON 9", href: "#" },
  { name: "FALCON HEAVY", href: "#" },
  { name: "DRAGON", href: "#" },
  { name: "STARSHIP", href: "#" },
  { name: "HUMAN SPACEFLIGHT", href: "#" },
  { name: "RIDESHARE", href: "#" },
  { name: "STARSHIELD", href: "#" },
  { name: "STARLINK", href: "#" },
];

const secondaryNavigation = [
  { name: "MISSION", href: "#" },
  { name: "LAUNCHES", href: "#" },
  { name: "CAREERS", href: "#" },
  { name: "UPDATES", href: "#" },
  { name: "SHOP", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SpaceX</span>
            <Image
              src="/images/SpaceX.png"
              height={500}
              width={500}
              className="h-10 w-auto object-scale-down"
              alt="SpaceX"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="text-white h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            SHOP
          </a>
          <button type="button" onClick={() => setOpen(true)}>
            <Bars3Icon className="text-white h-5 w-5 ml-6" aria-hidden="true" />
          </button>
          <DesktopSlideOver
            open={open}
            setOpen={setOpen}
            secondaryNavigation={secondaryNavigation}
          />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "@/data/index";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import DropDownMenu from "./DropDownMenu";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            {/* Aquí se inserta el logo */}
            <Link to="/" className="-m-1.5 p-1.5">
              <Logo />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`relative inline-flex items-center text-sm font-semibold pb-1 ${
                    isActive
                      ? "text-red-600 after:w-full"
                      : "text-gray-900 after:w-0 hover:after:w-full"
                  } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-400 after:transition-all after:duration-300`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="#" className="">
              <DropDownMenu />
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only"></span>
                <Logo /> {/* Aquí también puedes usar el logo */}
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)} // Cerrar menú al hacer clic
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <DropDownMenu />
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
  );
}

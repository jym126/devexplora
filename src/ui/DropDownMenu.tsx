import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import user from "../public/logoUser.svg";
import { Link } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para manejar si está autenticado

  return (
    <div className="relative inline-block text-left">
      {isLoggedIn ? (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton>
              <img alt="ïcono usuario" src={user} className="h-8 w-auto" />
            </MenuButton>
          </div>

          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Perfil
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <Link
                  to="/settings"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Configuración
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => setIsLoggedIn(false)} // Lógica para cerrar sesión
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm w-full text-left"
                  )}
                >
                  Cerrar Sesión
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      ) : (
        <button
          onClick={() => setIsLoggedIn(true)} // Lógica para iniciar sesión
          className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </button>
      )}
    </div>
  );
}

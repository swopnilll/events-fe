import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";
import { MenuIcon, XIcon } from "lucide-react";
import Logo from "../logo/Logo";

import "./NavBar.css";
import cn from "../../lib/utils";
import { navLinks } from "../../config/ui/uiConfig";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { width } = useViewportSize();

  const isMobile = width < 768; // below md breakpoint

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("overflow-hidden");
      console.log("isMenuOpen: ", isMenuOpen);
    } else {
      document.body.classList.remove("overflow-hidden");
      console.log("isMenuOpen: ", isMenuOpen);
    }
  };

  const closeMenuOnMobile = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed w-full px-8 pb-0 pl-0 shadow-sm shadow-neutral-500 h-[--navbar-height] flex items-center bg-[#2B293D] text-white z-50">
        <nav className="flex justify-between items-center w-full">
          <NavLink to="/" className="font-bold">
            <Logo className="h-20" />
          </NavLink>
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleMenu}
          />
          <ul
            className={cn(
              "flex items-end gap-8 z-50",
              isMenuOpen &&
                "bg-neutral-700 flex-col fixed top-[--navbar-height] right-0 w-200 p-8 h-full overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-0",
              !isMenuOpen &&
                isMobile &&
                "bg-neutral-700 flex-col fixed top-[--navbar-height] right-0 w-200 p-8 h-full overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-full"
            )}
          >
            {navLinks.map((link) => {
              return (
                <li key={link.name} className="relative">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        "text-white px-4 py-4 border-b-4 transition-all duration-300",
                        isActive ? "border-yellow-400" : "border-transparent"
                      )
                    }
                    onClick={closeMenuOnMobile}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
            <NavLink
              to={"/create-event"}
              className="text-black rounded-lg py-2 px-4 bg-[#FFE047]"
            >
              Create Events
            </NavLink>
          </ul>

          <button
            aria-labelledby="Menu Toggle Button"
            className="block md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XIcon className="size-6 text-white" />
            ) : (
              <MenuIcon className="size-6 text-white" />
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

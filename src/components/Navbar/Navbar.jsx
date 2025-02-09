import { useState, React } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useViewportSize } from "@mantine/hooks";
import { MenuIcon, XIcon, User } from "lucide-react";

import Logo from "../logo/Logo";
import cn from "../../lib/utils";
import { navLinks } from "../../config/ui/uiConfig";

import { useAuth } from "../../contexts/AuthContext/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { width } = useViewportSize();

  const isMobile = width < 768; // below md breakpoint

  const navigate = useNavigate();

  const { isAuthenticated, logout, user } = useAuth();

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

  const handleLogout = async () => {
    console.log("i am calllleddd");
    try {
      const response = await logout();

      if (response.success) {
        navigate(-1); // Navigate to homepage
      } else {
        console.log("Log out failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
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
                "bg-neutral-700 flex-col fixed top-[--navbar-height] right-0 w-200 p-8 h-full overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-full",
            )}
          >
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "text-white px-4 py-4 border-b-4 transition-all duration-300",
                      isActive ? "border-yellow-400" : "border-transparent",
                    )
                  }
                  onClick={closeMenuOnMobile}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            {!isAuthenticated && (
              <li>
                <NavLink
                  to={"/auth/login"}
                  className={({ isActive }) =>
                    cn(
                      "text-white px-4 py-4 border-b-4 transition-all duration-300",
                      isActive ? "border-yellow-400" : "border-transparent",
                    )
                  }
                >
                  Login
                </NavLink>
              </li>
            )}

            {!isAuthenticated && (
              <li>
                <NavLink
                  to={"/auth/signup"}
                  className={({ isActive }) =>
                    cn(
                      "text-white px-4 py-4 border-b-4 transition-all duration-300",
                      isActive ? "border-yellow-400" : "border-transparent",
                    )
                  }
                >
                  Register
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to={"/create-event"}
                className="text-black rounded-lg py-2 px-4 bg-[#FFE047]"
              >
                Create Events
              </NavLink>
            </li>

            {isAuthenticated && (
              <li className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="text-white w-6 h-6" />
                  </div>
                </div>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2  bg-white rounded-lg shadow-lg py-2 z-50"
                    onMouseLeave={closeDropdown}
                  >
                    {/* User Info */}
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm text-gray-600">Logged in as:</p>
                      <p className="font-semibold text-gray-800">
                        {user?.name}
                      </p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>

                    {/* Logout Button */}
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            )}
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

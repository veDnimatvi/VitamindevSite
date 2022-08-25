import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/img/mylogo.svg";
import menuIcon from "../../public/img/icons-menu.svg";

const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [isFirstLoad, setisFirstLoad] = useState(false);

  const handleMenuMobile = () => {
    setOpenMenuMobile(!openMenuMobile);
    setisFirstLoad(true);
  };

  const closeMenu = () => setOpenMenuMobile(false);
  return (
    <div>
      {openMenuMobile && (
        <>
          <div
            className="model"
            onClick={handleMenuMobile}
            aria-hidden="true"
          ></div>
        </>
      )}
      <div className="navbar-sticky">
        <div className="container flex justify-between mx-auto navbar">
          <div className="float-left pl-8 text-2xl cursor-pointer font-bold">
            <Link href="/">
              <div className="flex items-center">
                <Image src={logo} alt="logo" />
                <span className="pl-2">Vitamindev</span>
              </div>
            </Link>
          </div>
          <div className="flex float-right menu-desktop ">
            <div className="text-lg cursor-pointer nav-item">
              <Link href="/">Home</Link>
            </div>
            <div className="ml-12 text-lg cursor-pointer nav-item">
              <Link href="/about">About</Link>
            </div>

            <div className="ml-12 text-lg cursor-pointer nav-item">
              <a>Project</a>
            </div>
            <div className="ml-12 text-lg cursor-pointer nav-item">
              <Link href="/blog">Blog</Link>
            </div>
            <div className="ml-12 text-lg cursor-pointer nav-item">
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div
            className="float-right pt-1 mr-4 menu-icon"
            onClick={handleMenuMobile}
          >
            <Image src={menuIcon} alt="menu icon" />
          </div>
        </div>
      </div>

      <div
        className={
          openMenuMobile
            ? "menu-open"
            : isFirstLoad
            ? "menu-close"
            : "menu-close-first"
        }
      >
        <div
          className="mb-12 ml-16 text-xl cursor-pointer mt-28"
          onClick={closeMenu}
        >
          <Link href="/">Home</Link>
        </div>
        <div className="mb-12 ml-16 text-xl cursor-pointer" onClick={closeMenu}>
          <Link href="/about">About</Link>
        </div>

        <div className="mb-12 ml-16 text-xl cursor-pointer" onClick={closeMenu}>
          <a>Project</a>
        </div>
        <div className="mb-12 ml-16 text-xl cursor-pointer" onClick={closeMenu}>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="mb-12 ml-16 text-xl cursor-pointer" onClick={closeMenu}>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import Aside from "@/components/containers/Aside";
import { Logo } from "@/components/Icon";

export default function Hamburger() {
  const checkboxRef = useRef(null);
  const pathname = usePathname();

  function handleClick() {
    checkboxRef.current.checked = false;
  }

  return (
    <React.Fragment>
      <label className="h-px w-8 cursor-pointer md:hidden">
        <input
          ref={checkboxRef}
          type="checkbox"
          className="peer sr-only h-px w-8"
        />
        <span className="relative z-30 block h-0.5 w-1/2 rounded-full bg-black-600 transition-all duration-150 before:absolute before:h-0.5 before:w-full before:-translate-y-1 before:rounded-full before:bg-black-600 before:transition-all before:duration-150 after:absolute after:h-0.5 after:w-full after:translate-y-1 after:rounded-full after:bg-black-600 after:transition-all after:duration-150 peer-checked:bg-transparent peer-checked:before:translate-y-0 peer-checked:before:rotate-45 peer-checked:after:translate-y-0 peer-checked:after:-rotate-45"></span>

        <div className="peer:transition fixed -left-full top-0 z-20 block h-dvh w-9/12 overflow-x-hidden overflow-y-scroll bg-light p-6 pb-4 shadow-2xl delay-150 duration-300 ease-out peer-checked:left-0">
          <div onClick={handleClick} className="mx-auto p-6 text-center">
            <Logo />
          </div>
          <div className="mt-8">
            <ul className="py-4">
              {siteConfig.sideMenu.map((menu) => (
                <li
                  key={menu.label}
                  onClick={handleClick}
                  className="py-1 font-medium"
                >
                  <Link
                    // id={menu.href}
                    className={`link ${pathname === menu.href ? "text-pink-200" : "text-black-100 hover:text-pink-200"}`}
                    // className="text-black-100 target:text-pink-200 hover:text-pink-200"
                    href={menu.href}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <Aside handler={handleClick} />
          </div>
        </div>

        <span className="fixed left-0 top-0 z-10 hidden h-screen w-screen bg-gray-900 duration-200 peer-checked:block peer-checked:bg-opacity-30 peer-checked:transition"></span>
      </label>
    </React.Fragment>
  );
}

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/Logo";
import Aside from "@/components/containers/Aside";

const sideMenu = [{ text: "Services" }, { text: "Shop" }];

export default function Hamburger() {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <label className="h-px w-8 cursor-pointer md:hidden">
        <input type="checkbox" className="peer sr-only" />
        <span
          className="
          relative
          z-30
          block 
          h-0.5 
          w-1/2 
          rounded-full
          bg-black-600 
          transition-all 
          duration-150         
          
          before:absolute 
          before:h-0.5 
          before:w-full 
          before:-translate-y-1 
          before:rounded-full 
          before:bg-black-600 
          before:transition-all 
          before:duration-150
          
          after:absolute 
          after:h-0.5 
          after:w-full 
          after:translate-y-1 
          after:rounded-full 
          after:bg-black-600 
          after:transition-all 
          after:duration-150
          
          peer-checked:bg-transparent
          peer-checked:before:translate-y-0
          peer-checked:before:rotate-45
          peer-checked:after:translate-y-0
          peer-checked:after:-rotate-45
          "
        ></span>

        <nav className="peer:transition fixed -left-full top-0 z-20 block h-dvh w-9/12 overflow-x-hidden overflow-y-scroll bg-light shadow-2xl delay-150 duration-300 ease-out peer-checked:left-0">
          <ul className="p-6 pb-4">
            <div className="mx-auto p-6 text-center">
              <Logo />
            </div>
            <div className="mt-8">
              <div className="py-4">
                {sideMenu.map((menu) => (
                  <Link
                    key={menu.text}
                    className={`link ${
                      pathname === "/services"
                        ? "text-pink-200"
                        : "text-black-100 hover:text-pink-200"
                    }`}
                    href={menu.text.toLowerCase()}
                  >
                    <li className="py-1 font-medium">{menu.text}</li>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <Aside />
            </div>
          </ul>
        </nav>

        <span className="fixed left-0 top-0 z-10 hidden h-screen w-screen bg-gray-900 duration-200 peer-checked:block peer-checked:bg-opacity-30 peer-checked:transition "></span>
      </label>
    </React.Fragment>
  );
}

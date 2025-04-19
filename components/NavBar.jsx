import Link from "next/link";

import Hamburger from "@/components/Hamburger";

import { siteConfig } from "@/config/site";
import { CartIcon, Logo, ProfileIcon } from "@/components/Icon";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between pt-8">
      <Hamburger />
      <Logo />
      <nav>
        <ul className="flex justify-between gap-x-10">
          {siteConfig.navItems.map((navItem) => {
            if (navItem.label == "Profile") {
              return (
                <li
                  key={navItem.label}
                  className="relative h-7 w-7  rounded-full border-pink-200 bg-pink-100"
                >
                  <Link href="/profile">
                    <div className="absolute bottom-1 left-1">
                      <ProfileIcon />
                    </div>
                  </Link>
                </li>
              );
            }

            if (navItem.label == "Cart") {
              return (
                <li key={navItem.label}>
                  <Link
                    href="/cart"
                    id="/cart"
                    className="text-black-100 hover:text-pink-200 inline-flex gap-x-2 target:text-pink-200 target:inline-flex target:gap-x-2"
                  >
                    <CartIcon />
                    <span className="hidden md:block">Cart</span>
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={navItem.label}
                className="hidden font-normal md:inline-flex"
              >
                <Link
                  id={navItem.href}
                  className="text-black-100 hover:text-pink-200 target:text-pink-200"
                  href={navItem.href}
                >
                  {navItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

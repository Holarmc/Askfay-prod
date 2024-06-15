"use client";

import NavBar from "@/components/NavBar";
import Search from "../Search";

//Constructing the header section
const Header = () => {
  return (
    <div className="col-start-1 col-end-13 pb-0 pl-2 pr-2 pt-2">
      <NavBar />
      <Search />
    </div>
  );
};

export default Header;

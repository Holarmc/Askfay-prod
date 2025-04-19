import dynamic from "next/dynamic";

import { usePathname } from "next/navigation";
import { SearchIcon } from "@/components/Icon";
// import ComboBoxResponsive from "@/components/ComboBoxResponsive";

const ComboBoxResponsive = dynamic(() => import("./ComboBoxResponsive"), {
  ssr: false,
});

const Search = () => {
  const pathname = usePathname();

  return (
    <form
      // action=""
      className={
        pathname === "/profile" ||
        pathname === "/auth" ||
        pathname === "/hotline" ||
        pathname === "/payment"
          ? "hidden"
          : "relative mb-6 mt-6 flex w-full flex-row gap-2 shadow-md"
      }
    >
      <div className="w-10/12">
        <SearchIcon />
        <input
          name="searchParams"
          className="block w-full appearance-none rounded-l-md py-3 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
          type="text"
          aria-label="search term"
          placeholder="What are you looking for?"
        />
      </div>
      <div className="flex w-2/12 gap-1">
        <ComboBoxResponsive />
        <input
          name="submitSearch"
          type="submit"
          value="Search"
          className="w-3/5 flex-1 rounded-r-md bg-pink-200 text-sm leading-6 text-light transition ease-in-out hover:bg-pink-300 active:scale-95 active:bg-pink-300"
        />
      </div>
    </form>
  );
};

export default Search;

import dynamic from "next/dynamic";

import { usePathname } from "next/navigation";

const ComboBoxResponsive = dynamic(() => import("./ComboBoxResponsive"), {
  ssr: false,
});

const Search = () => {
  const pathname = usePathname();

  return (
    <form
      action=""
      className={
        pathname === "/profile" || pathname === "/auth"
          ? "hidden"
          : "relative mb-6 mt-6 flex w-full flex-row gap-2 shadow-md"
      }
    >
      <div className="w-10/12 ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-3 top-1/2 -mt-2.5 text-slate-400 group-focus-within:text-pink-200"
          aria-hidden="true"
        >
          <path
            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
            stroke="#121212"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.9304 20.6888C19.4604 22.2888 20.6704 22.4488 21.6004 21.0488C22.4504 19.7688 21.8904 18.7188 20.3504 18.7188C19.2104 18.7088 18.5704 19.5988 18.9304 20.6888Z"
            stroke="#121212"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

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
          className="w-3/5 flex-1 rounded-r-md bg-pink-200 text-sm leading-6 text-light transition ease-in-out hover:bg-pink-300 active:scale-95 active:bg-pink-300 "
        />
      </div>
    </form>
  );
};

export default Search;

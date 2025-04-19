import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  CommunityIcon,
  ArticleIcon,
  VisualmediaIcon,
  BookmarkIcon,
  FaqIcon,
  NotificationIcon,
} from "@/assets/navMenuIcons.jsx";

// import {
//   CommunityIcon,
//   ArticleIcon,
//   VisualMediaIcon,
//   BookmarkIcon,
//   FaqIcon,
//   NotificationIcon,
// } from "@/app/utils/assets/Icons";

const serviceMenu = [
  {
    text: "Community",
    icon: <CommunityIcon />,
  },
  {
    text: "Articles",
    icon: <ArticleIcon />,
  },
  {
    text: "Visual-media",
    icon: <VisualmediaIcon />,
  },
  {
    text: "Bookmarks",
    icon: <BookmarkIcon />,
  },
  {
    text: "FAQ",
    icon: <FaqIcon />,
  },
  {
    text: "Notifications",
    icon: <NotificationIcon />,
  },
];

const topContributors = [
  {
    avatar: "https://i.pravatar.cc/200",
    name: "Charity",
  },
  {
    avatar: "https://i.pravatar.cc/300",
    name: "prevalence",
  },
  {
    avatar: "https://i.pravatar.cc/100",
    name: "Checking",
  },
  {
    avatar: "https://i.pravatar.cc/400",
    name: "people",
  },
];

//MAKE SURE THE DATA ITEMS USED AS KEY ARE UNIQUE WHEN QUERIED FROM THE DATABASE.

const Aside = ({ handler }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-col justify-start gap-4">
        {serviceMenu.map((menu) => (
          <ul className="pb-4" key={menu.text}>
            <li className="my-4 py-4 first:my-0 first:py-0">
              <Link
                onClick={handler}
                className={`link ${
                  pathname === menu.text.toLowerCase()
                    ? "text-pink-200"
                    : "text-black-100 hover:text-pink-200"
                }`}
                href={menu.text.toLowerCase()}
              >
                <span className="flex justify-start gap-2">
                  {menu.icon}
                  <span className="pl-3 font-medium">{menu.text}</span>
                </span>
              </Link>
            </li>
          </ul>
        ))}

        <div className="pb-4">
          <h2 className="pb-6 font-medium text-slate-600">SERVICE PROVIDERS</h2>
          <ul>
            <li className="pb-2">
              <Image
                src="/youthExchange.svg"
                alt="youthExchange Logo"
                width={104}
                height={40}
                style={{ width: "auto", height: "auto" }}
              />
            </li>
          </ul>
          <ul>
            <li className="pb-2">
              <Image
                src="/jhpiego.svg"
                alt="jhpiego Logo"
                width={149}
                height={40}
              />
            </li>
          </ul>
          <ul>
            <li className="pb-2">
              <Image
                src="/familyHealth.svg"
                alt="familyHealth Logo"
                width={163}
                height={40}
              />
            </li>
          </ul>
          <ul>
            <li className="pb-2">
              <Image src="/cphi.svg" alt="cphi Logo" width={149} height={40} />
            </li>
          </ul>
        </div>

        <div className="pb-4">
          <h2 className="pb-6 font-medium text-slate-600">TOP CONTRIBUTORS</h2>
          <ul>
            <li className="flex justify-start space-x-2">
              {topContributors.map((contributor) => (
                <img
                  key={contributor.name}
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="h-10 w-10 rounded-full bg-slate-100"
                />
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Aside;

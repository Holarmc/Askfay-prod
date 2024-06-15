import dynamic from "next/dynamic";

import Link from "next/link";

// import { getPosts } from "~/models/post.server";

// import LastSeen from "@/components/LastSeen";

const LastSeen = dynamic(() => import("@/components/LastSeen"), {
  ssr: false,
});

const data = [
  {
    id: 1,
    postContent:
      "I'm considering starting birth control pills. Can anyone share their experiences with them?",
    isTopComment: true,
    commenter: {
      username: "Anon3221P",
      avatar: "https://i.pravatar.cc/300",
      comment:
        "Birth control pills are a common choice for contraception. Many people find them effective. Some possible side effects include mood changes and changes in menstrual flow. It's important to consult your healthcare provider to discuss your options, medical history, and any potential side effects. They can help you decide if birth control pills are right for you.",
    },
  },
  {
    id: 2,
    postContent:
      "I'm considering starting birth control pills. Can anyone share their experiences with them?",
    isTopComment: true,
    commenter: {
      username: "Timothy",
      avatar: "https://i.pravatar.cc/300",
      comment:
        "Birth control pills are a common choice for contraception. Many people find them effective. Some possible side effects include mood changes and changes in menstrual flow. It's important to consult your healthcare provider to discuss your options, medical history, and any potential side effects. They can help you decide if birth control pills are right for you.",
    },
  },
  {
    id: 3,
    postContent:
      "I'm considering starting birth control pills. Can anyone share their experiences with them?",
    isTopComment: true,
    commenter: {
      username: "Fay",
      avatar: "https://i.pravatar.cc/300",
      comment:
        "Birth control pills are a common choice for contraception. Many people find them effective. Some possible side effects include mood changes and changes in menstrual flow. It's important to consult your healthcare provider to discuss your options, medical history, and any potential side effects. They can help you decide if birth control pills are right for you.",
    },
  },
  {
    id: 4,
    postContent:
      "I'm considering starting birth control pills. Can anyone share their experiences with them?",
    isTopComment: true,
    commenter: {
      username: "Dr. Spray",
      avatar: "https://i.pravatar.cc/300",
      comment:
        "Birth control pills are a common choice for contraception. Many people find them effective. Some possible side effects include mood changes and changes in menstrual flow. It's important to consult your healthcare provider to discuss your options, medical history, and any potential side effects. They can help you decide if birth control pills are right for you.",
    },
  },
  {
    id: 5,
    postContent:
      "I'm considering starting birth control pills. Can anyone share their experiences with them?",
    isTopComment: true,
    commenter: {
      username: "Anon3221P",
      avatar: "",
      comment:
        "Birth control pills are a common choice for contraception. Many people find them effective. Some possible side effects include mood changes and changes in menstrual flow. It's important to consult your healthcare provider to discuss your options, medical history, and any potential side effects. They can help you decide if birth control pills are right for you.",
    },
  },
  {
    id: 6,
    postContent:
      "I'm considering starting birth control pills. Can anyone share their experiences with them?",
    isTopComment: true,
    commenter: {
      username: "Yusuf",
      avatar: "https://i.pravatar.cc/300",
      comment:
        "Birth control pills are a common choice for contraception. Many people find them effective. Some possible side effects include mood changes and changes in menstrual flow. It's important to consult your healthcare provider to discuss your options, medical history, and any potential side effects. They can help you decide if birth control pills are right for you.",
    },
  },
  {
    id: 7,
    postContent:
      "I'm considering starting birth control pills. Can anyone share their experiences with them?",
    isTopComment: true,
    commenter: {
      username: "Yay",
      avatar: "https://i.pravatar.cc/300",
      comment:
        "Birth control pills are a common choice for contraception. Many people find them effective. Some possible side effects include mood changes and changes in menstrual flow. It's important to consult your healthcare provider to discuss your options, medical history, and any potential side effects. They can help you decide if birth control pills are right for you.",
    },
  },
];

export default function PageFeed() {
  //   console.log(feedData);
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="mb-4 border-b border-gray-300 py-4 pb-2">
          <h2 className="text-lg font-semibold text-black-100">
            <Link href="/signin" passHref>
              {item.postContent}
            </Link>
          </h2>
          {item.isTopComment && (
            <span className="mt-6 hidden text-xs font-bold text-gray-600 md:block">
              Top Comment
            </span>
          )}
          <div className="mt-2 flex items-center">
            {item.commenter?.avatar ? (
              <img
                src={item.commenter.avatar}
                alt={item.commenter.username}
                className="mr-2 h-10 w-10 rounded-full border-2 border-pink-300  bg-slate-100"
              />
            ) : (
              <div className="relative mr-2 h-10 w-10 rounded-full border-2 border-pink-300 bg-pink-100 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="absolute bottom-2 left-2"
                >
                  <g clipPath="url(#clip0_307_5800)">
                    <path
                      d="M15.4169 8.54518C15.4169 8.58185 15.4169 8.61935 15.4144 8.65602C15.1793 8.44713 14.8756 8.33204 14.5611 8.33268C14.4261 8.33268 14.2944 8.35352 14.1669 8.39435V4.79102C14.1669 4.62526 14.1011 4.46628 13.9839 4.34907C13.8666 4.23186 13.7077 4.16602 13.5419 4.16602H6.45858C6.29282 4.16602 6.13385 4.23186 6.01664 4.34907C5.89943 4.46628 5.83358 4.62526 5.83358 4.79102V8.54518C5.83358 8.89018 6.11358 9.17018 6.45858 9.17018H13.3552L13.3469 9.19102L13.3444 9.20102L12.9694 10.3543L12.9611 10.376C12.9561 10.3908 12.9508 10.4056 12.9452 10.4202H6.45858C5.9613 10.4202 5.48439 10.2226 5.13276 9.87101C4.78112 9.51938 4.58358 9.04246 4.58358 8.54518V4.79102C4.58358 4.29373 4.78112 3.81682 5.13276 3.46519C5.48439 3.11356 5.9613 2.91602 6.45858 2.91602H9.37525V2.29102C9.37528 2.13986 9.43009 1.99384 9.52953 1.87999C9.62897 1.76615 9.7663 1.6922 9.91608 1.67185L10.0002 1.66602C10.1514 1.66605 10.2974 1.72086 10.4113 1.8203C10.5251 1.91974 10.5991 2.05707 10.6194 2.20685L10.6252 2.29102L10.6244 2.91602H13.5411C14.0384 2.91602 14.5153 3.11356 14.8669 3.46519C15.2185 3.81682 15.4161 4.29373 15.4161 4.79102L15.4169 8.54518ZM10.8694 11.696L10.9627 11.666H5.21191C4.71463 11.666 4.23772 11.8636 3.88609 12.2152C3.53446 12.5668 3.33691 13.0437 3.33691 13.541V14.2968C3.33683 14.7469 3.43396 15.1917 3.62165 15.6007C3.80935 16.0097 4.08318 16.3734 4.42441 16.6668C5.72691 17.786 7.59275 18.3335 10.0002 18.3335C11.7302 18.3335 13.1811 18.051 14.3444 17.4768C14.1231 17.4349 13.9167 17.3357 13.7457 17.189C13.5748 17.0423 13.4453 16.8534 13.3702 16.641L13.3669 16.631L13.3419 16.5535C12.4369 16.9052 11.3252 17.0835 10.0002 17.0835C7.86775 17.0835 6.28775 16.6202 5.23941 15.7185C5.03471 15.5425 4.87044 15.3243 4.75783 15.079C4.64521 14.8336 4.58691 14.5668 4.58691 14.2968V13.541C4.58691 13.3753 4.65276 13.2163 4.76997 13.0991C4.88718 12.9819 5.04615 12.916 5.21191 12.916H10.0002V12.9135C10.0002 12.6472 10.0828 12.3874 10.2367 12.1701C10.3906 11.9527 10.6082 11.7886 10.8594 11.7002L10.8694 11.696ZM9.16608 6.45768C9.17002 6.31847 9.146 6.17987 9.09544 6.0501C9.04489 5.92032 8.96882 5.80201 8.87174 5.70214C8.77466 5.60228 8.65855 5.5229 8.53025 5.46869C8.40196 5.41448 8.2641 5.38656 8.12483 5.38656C7.98556 5.38656 7.8477 5.41448 7.71941 5.46869C7.59112 5.5229 7.475 5.60228 7.37792 5.70214C7.28084 5.80201 7.20477 5.92032 7.15422 6.0501C7.10366 6.17987 7.07964 6.31847 7.08358 6.45768C7.09125 6.72874 7.20432 6.98612 7.39875 7.17514C7.59319 7.36415 7.85366 7.46989 8.12483 7.46989C8.396 7.46989 8.65647 7.36415 8.85091 7.17514C9.04535 6.98612 9.15841 6.72874 9.16608 6.45768ZM11.8686 5.41602C12.0078 5.41208 12.1464 5.4361 12.2762 5.48665C12.4059 5.53721 12.5243 5.61327 12.6241 5.71035C12.724 5.80743 12.8034 5.92355 12.8576 6.05184C12.9118 6.18013 12.9397 6.31799 12.9397 6.45727C12.9397 6.59654 12.9118 6.7344 12.8576 6.86269C12.8034 6.99098 12.724 7.1071 12.6241 7.20418C12.5243 7.30126 12.4059 7.37732 12.2762 7.42788C12.1464 7.47844 12.0078 7.50245 11.8686 7.49852C11.5975 7.49085 11.3401 7.37778 11.1511 7.18335C10.9621 6.98891 10.8564 6.72843 10.8564 6.45727C10.8564 6.1861 10.9621 5.92562 11.1511 5.73119C11.3401 5.53675 11.5975 5.42368 11.8686 5.41602ZM13.4077 14.5093C13.1208 14.1383 12.7297 13.8612 12.2844 13.7135L11.1369 13.3402C11.0488 13.3088 10.9725 13.2509 10.9185 13.1744C10.8646 13.098 10.8356 13.0067 10.8356 12.9131C10.8356 12.8195 10.8646 12.7282 10.9185 12.6518C10.9725 12.5753 11.0488 12.5174 11.1369 12.486L12.2844 12.1127C12.6244 11.9954 12.9331 11.8023 13.1873 11.5479C13.4414 11.2934 13.6342 10.9844 13.7511 10.6443L13.7594 10.616L14.1336 9.46852C14.1648 9.38007 14.2227 9.30347 14.2992 9.2493C14.3758 9.19512 14.4673 9.16603 14.5611 9.16603C14.6549 9.16603 14.7464 9.19512 14.8229 9.2493C14.8995 9.30347 14.9574 9.38007 14.9886 9.46852L15.3619 10.616C15.4781 10.9648 15.674 11.2817 15.9341 11.5415C16.1942 11.8013 16.5113 11.9969 16.8602 12.1127L18.0086 12.486L18.0311 12.4918C18.1192 12.5232 18.1955 12.5811 18.2495 12.6576C18.3034 12.7341 18.3324 12.8254 18.3324 12.9189C18.3324 13.0125 18.3034 13.1038 18.2495 13.1803C18.1955 13.2567 18.1192 13.3146 18.0311 13.346L16.8827 13.7193C16.5339 13.8353 16.2168 14.0309 15.9568 14.2907C15.6967 14.5505 15.5007 14.8673 15.3844 15.216L15.0119 16.3635C14.9801 16.4519 14.922 16.5284 14.8452 16.5827C14.788 16.6231 14.7222 16.6498 14.653 16.6605C14.5837 16.6712 14.5129 16.6658 14.4461 16.6445C14.3794 16.6233 14.3184 16.5869 14.2681 16.5381C14.2178 16.4894 14.1794 16.4296 14.1561 16.3635L13.7827 15.216C13.6988 14.9608 13.572 14.7219 13.4077 14.5093ZM19.8194 17.6768L19.1819 17.4702C18.9881 17.4058 18.8119 17.2971 18.6674 17.1527C18.5229 17.0084 18.414 16.8323 18.3494 16.6385L18.1419 16.001C18.1247 15.9518 18.0925 15.9091 18.05 15.879C18.0074 15.8488 17.9566 15.8326 17.9044 15.8326C17.8523 15.8326 17.8014 15.8488 17.7588 15.879C17.7163 15.9091 17.6842 15.9518 17.6669 16.001L17.4594 16.6377C17.3963 16.8302 17.2895 17.0055 17.1474 17.1499C17.0053 17.2944 16.8317 17.404 16.6402 17.4702L16.0019 17.6768C15.9527 17.6941 15.91 17.7262 15.8799 17.7688C15.8497 17.8113 15.8335 17.8622 15.8335 17.9143C15.8335 17.9665 15.8497 18.0174 15.8799 18.0599C15.91 18.1025 15.9527 18.1346 16.0019 18.1518L16.6402 18.3594C16.8343 18.4241 17.0106 18.5334 17.155 18.6783C17.2994 18.8233 17.4079 19 17.4719 19.1943L17.6802 19.831C17.6979 19.8799 17.7301 19.9221 17.7726 19.9519C17.8151 19.9818 17.8658 19.9978 17.9177 19.9978C17.9697 19.9978 18.0203 19.9818 18.0628 19.9519C18.1053 19.9221 18.1376 19.8799 18.1552 19.831L18.3619 19.1943C18.4264 19.0003 18.5353 18.8239 18.6799 18.6794C18.8246 18.5348 19.0011 18.4261 19.1952 18.3618L19.8327 18.1552C19.882 18.1379 19.9246 18.1058 19.9548 18.0633C19.985 18.0207 20.0012 17.9698 20.0012 17.9177C20.0012 17.8655 19.985 17.8147 19.9548 17.7721C19.9246 17.7296 19.882 17.6974 19.8327 17.6802L19.8194 17.6768Z"
                      fill="#CF0095"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_307_5800">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            )}
            <p className="text-sm font-medium text-gray-600">
              {item.commenter.username}
            </p>
          </div>

          {/* <LastSeen date={"Sat May 25 2024 19:34:44 GMT+0100"} /> */}

          <div>
            <p className="mb-10 text-base text-black-100">
              {item.commenter.comment}
            </p>
          </div>
          <div className="my-2 flex">
            <div className="mr-6 flex gap-2">
              <span>68</span>
              <span>comments</span>
            </div>

            <div className="mr-6 flex gap-2">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7415 4.8999H4.25816C2.83316 4.8999 1.6665 6.06656 1.6665 7.49156V16.9582C1.6665 18.1666 2.53317 18.6832 3.5915 18.0916L6.8665 16.2666C7.2165 16.0749 7.78317 16.0749 8.12484 16.2666L11.3998 18.0916C12.4582 18.6832 13.3248 18.1666 13.3248 16.9582V7.49156C13.3332 6.06656 12.1665 4.8999 10.7415 4.8999Z"
                    stroke="#121212"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3332 7.49156V16.9582C13.3332 18.1666 12.4665 18.6749 11.4082 18.0916L8.13318 16.2666C7.78318 16.0749 7.2165 16.0749 6.8665 16.2666L3.5915 18.0916C2.53317 18.6749 1.6665 18.1666 1.6665 16.9582V7.49156C1.6665 6.06656 2.83316 4.8999 4.25816 4.8999H10.7415C12.1665 4.8999 13.3332 6.06656 13.3332 7.49156Z"
                    stroke="#121212"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3332 4.25816V13.7248C18.3332 14.9332 17.4665 15.4415 16.4082 14.8582L13.3332 13.1415V7.4915C13.3332 6.0665 12.1665 4.89984 10.7415 4.89984H6.6665V4.25816C6.6665 2.83316 7.83316 1.6665 9.25816 1.6665H15.7415C17.1665 1.6665 18.3332 2.83316 18.3332 4.25816Z"
                    stroke="#121212"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span> Bookmark</span>
            </div>
            <div className="mr-6 flex gap-2">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.2915 1.6665V18.3332"
                    stroke="#121212"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.2915 3.3335H13.6248C15.8748 3.3335 16.3748 4.5835 14.7915 6.16683L13.7915 7.16683C13.1248 7.8335 13.1248 8.91683 13.7915 9.50016L14.7915 10.5002C16.3748 12.0835 15.7915 13.3335 13.6248 13.3335H4.2915"
                    stroke="#121212"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Report</span>
            </div>
          </div>
        </div>
      ))}
      <input
        type="button"
        value="Load More"
        className="my-5 h-14 w-32 rounded-md border-2  border-pink-200 text-pink-200"
      />

      <div className="mx-auto my-10 h-[420px] w-96 bg-[url('/mobileHelpline.svg')] bg-no-repeat lg:h-[400px] lg:w-[880px] lg:bg-[url('/helpline.svg')]"></div>
    </div>
  );
}

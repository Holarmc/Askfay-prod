const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="static bottom-0 left-0 col-start-1 col-end-13  p-2 ">
      <div className="flex flex-col justify-between md:flex-row">
        <section className="items-left justify-center p-2 ">
          <h2 className="mb-3 font-black text-pink-200">AskFAY</h2>

          <p className="p-x-4 max-w-52 text-sm  text-black-100">
            Revolutionizing the delivery of SRH information and services to
            reach young people at scale
          </p>
        </section>

        <section className="items-left justify-center p-2">
          <h2 className="mb-3 font-medium text-slate-500">INFROMATION</h2>

          <ul className="p-x-4 flex flex-col gap-2 text-sm  text-black-100">
            <li>About us</li>
            <li>Services</li>
            <li>Products</li>
          </ul>
        </section>

        <section className="items-left justify-center p-2">
          <h2 className="mb-3 font-medium text-slate-500">HELPFUL LINKS</h2>

          <ul className="p-x-4 flex flex-col gap-2 text-sm  text-black-100">
            <li>FAQ</li>
            <li>Community guidelines</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
        <section className="items-left justify-center p-2">
          <h2 className="mb-3 pb-2 font-medium text-slate-500">CONTACT US</h2>

          <ul className="p-x-4 flex flex-col gap-2 text-sm  text-black-100">
            <li className="flex gap-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21.97 18.6698C21.97 19.0298 21.89 19.3998 21.72 19.7598C21.55 20.1198 21.33 20.4598 21.04 20.7798C20.55 21.3198 20.01 21.7098 19.4 21.9598C18.8 22.2098 18.15 22.3398 17.45 22.3398C16.43 22.3398 15.34 22.0998 14.19 21.6098C13.04 21.1198 11.89 20.4598 10.75 19.6298C9.6 18.7898 8.51 17.8598 7.47 16.8298C6.44 15.7898 5.51 14.6998 4.68 13.5598C3.86 12.4198 3.2 11.2798 2.72 10.1498C2.24 9.00984 2 7.91984 2 6.87984C2 6.19984 2.12 5.54984 2.36 4.94984C2.6 4.33984 2.98 3.77984 3.51 3.27984C4.15 2.64984 4.85 2.33984 5.59 2.33984C5.87 2.33984 6.15 2.39984 6.4 2.51984C6.66 2.63984 6.89 2.81984 7.07 3.07984L9.39 6.34984C9.57 6.59984 9.7 6.82984 9.79 7.04984C9.88 7.25984 9.93 7.46984 9.93 7.65984C9.93 7.89984 9.86 8.13984 9.72 8.36984C9.59 8.59984 9.4 8.83984 9.16 9.07984L8.4 9.86984C8.29 9.97984 8.24 10.1098 8.24 10.2698C8.24 10.3498 8.25 10.4198 8.27 10.4998C8.3 10.5798 8.33 10.6398 8.35 10.6998C8.53 11.0298 8.84 11.4598 9.28 11.9798C9.73 12.4998 10.21 13.0298 10.73 13.5598C11.27 14.0898 11.79 14.5798 12.32 15.0298C12.84 15.4698 13.27 15.7698 13.61 15.9498C13.66 15.9698 13.72 15.9998 13.79 16.0298C13.87 16.0598 13.95 16.0698 14.04 16.0698C14.21 16.0698 14.34 16.0098 14.45 15.8998L15.21 15.1498C15.46 14.8998 15.7 14.7098 15.93 14.5898C16.16 14.4498 16.39 14.3798 16.64 14.3798C16.83 14.3798 17.03 14.4198 17.25 14.5098C17.47 14.5998 17.7 14.7298 17.95 14.8998L21.26 17.2498C21.52 17.4298 21.7 17.6398 21.81 17.8898C21.91 18.1398 21.97 18.3898 21.97 18.6698Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.5 9.33984C18.5 8.73984 18.03 7.81984 17.33 7.06984C16.69 6.37984 15.84 5.83984 15 5.83984"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 9.33984C22 5.46984 18.87 2.33984 15 2.33984"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-black-100">+234 000 000 0000</span>
            </li>
            <li className="flex gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M17 20.8398H7C4 20.8398 2 19.3398 2 15.8398V8.83984C2 5.33984 4 3.83984 7 3.83984H17C20 3.83984 22 5.33984 22 8.83984V15.8398C22 19.3398 20 20.8398 17 20.8398Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 9.33984L13.87 11.8398C12.84 12.6598 11.15 12.6598 10.12 11.8398L7 9.33984"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-black-100">askfay@help.ng</span>
            </li>
            <li className="justify-left flex gap-x-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M9 22.3398H15C20 22.3398 22 20.3398 22 15.3398V9.33984C22 4.33984 20 2.33984 15 2.33984H9C4 2.33984 2 4.33984 2 9.33984V15.3398C2 20.3398 4 22.3398 9 22.3398Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15.8398C13.933 15.8398 15.5 14.2728 15.5 12.3398C15.5 10.4068 13.933 8.83984 12 8.83984C10.067 8.83984 8.5 10.4068 8.5 12.3398C8.5 14.2728 10.067 15.8398 12 15.8398Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.6361 7.33984H17.6477"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M14 9.63984V12.5398H16.6C16.8 12.5398 16.9 12.7398 16.9 12.9398L16.5 14.8398C16.5 14.9398 16.3 15.0398 16.2 15.0398H14V22.3398H11V15.1398H9.3C9.1 15.1398 9 15.0398 9 14.8398V12.9398C9 12.7398 9.1 12.6398 9.3 12.6398H11V9.33984C11 7.63984 12.3 6.33984 14 6.33984H16.7C16.9 6.33984 17 6.43984 17 6.63984V9.03984C17 9.23984 16.9 9.33984 16.7 9.33984H14.3C14.1 9.33984 14 9.43984 14 9.63984Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 22.3398H9C4 22.3398 2 20.3398 2 15.3398V9.33984C2 4.33984 4 2.33984 9 2.33984H15C20 2.33984 22 4.33984 22 9.33984V15.3398C22 20.3398 20 22.3398 15 22.3398Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M17 20.3398H7C4 20.3398 2 18.3398 2 15.3398V9.33984C2 6.33984 4 4.33984 7 4.33984H17C20 4.33984 22 6.33984 22 9.33984V15.3398C22 18.3398 20 20.3398 17 20.3398Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3996 9.83917L13.8996 11.3392C14.7996 11.9392 14.7996 12.8392 13.8996 13.4392L11.3996 14.9392C10.3996 15.5392 9.59961 15.0392 9.59961 13.9392V10.9392C9.59961 9.63917 10.3996 9.23917 11.3996 9.83917Z"
                    stroke="#121212"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </section>
        <section className="items-left justify-center p-2">
          <h2 className="mb-3 hidden font-medium text-slate-500 md:block">
            Language
          </h2>
          <ul className="flex justify-around gap-1 text-black-100 md:flex-col">
            <li>English</li>
            <li>Hausa</li>
            <li>Yoruba</li>
            <li>Igbo</li>
            <li>Pidgin</li>
          </ul>
        </section>
      </div>
      <div className="p-4 text-center text-sm ">
        <p>© {year} | AskFAY | All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;

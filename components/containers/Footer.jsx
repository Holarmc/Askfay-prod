import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  Logo,
  PhoneIcon,
  YoutubeIcon,
} from "@/components/Icon";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="static bottom-0 left-0 col-start-1 col-end-13  p-2 ">
      <div className="flex flex-col justify-between md:flex-row">
        <section className="items-left justify-center p-2 ">
          <Logo />
          <p className="mt-3 p-x-4 max-w-52 text-sm  text-black-100">
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
              <PhoneIcon />
              <span className="text-black-100">+234 000 000 0000</span>
            </li>
            <li className="flex gap-x-2">
              <EmailIcon />
              <span className="text-black-100">askfay@help.ng</span>
            </li>
            <li className="justify-left flex gap-x-4">
              <span>
                <InstagramIcon />
              </span>
              <span>
                <FacebookIcon />
              </span>
              <span className="text-xs">
                <YoutubeIcon />
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

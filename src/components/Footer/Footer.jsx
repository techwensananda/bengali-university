import {
  FaRegCopyright,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../../assets/Bengal_University.png";
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-zinc-900">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img width={50} src={Logo} alt="" />
            <span className="ml-3 text-xl text-white">Bengal University</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Box 35300 1810 Campus Way NE Bothell, WA 98011-8246
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 border-b-2 pb-2 border-green-400">
              Our Campus
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 border-b-2 pb-2 border-green-400">
              Campus Life
            </h2>

            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 border-b-2 pb-2 border-green-400">
              Academics
            </h2>

            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 border-b-2 pb-2 border-green-400">
              Others
            </h2>

            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-800">
        <div className="container mx-auto py-8 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left flex items-center">
            <FaRegCopyright className="mr-2" /> 2023 Bengal University —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @Rajesh
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <span className="flex items-center">
              <a className="text-gray-500">
                <FaFacebookF
                  size={20}
                  className=" text-green-700 cursor-pointer"
                />
              </a>
              <a className="ml-3 text-gray-500">
                <FaGooglePlusG
                  size={30}
                  className=" text-green-700 cursor-pointer"
                />
              </a>
              <a className="ml-3 text-gray-500">
                <FaLinkedinIn
                  size={20}
                  className=" text-green-700 cursor-pointer"
                />
              </a>
              <a className="ml-3 text-gray-500">
                <FaSkype size={20} className=" text-green-700 cursor-pointer" />
              </a>
              <a className="ml-3 text-gray-500">
                <FaTwitter
                  size={20}
                  className=" text-green-700 cursor-pointer"
                />
              </a>
              <a className="ml-3 text-gray-500">
                <FaInstagram
                  size={20}
                  className=" text-green-700 cursor-pointer"
                />
              </a>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

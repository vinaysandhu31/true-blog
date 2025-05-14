import { Footer, FooterDivider } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsWhatsapp } from "react-icons/bs";

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-col-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-centered whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 bg-black py-1 rounded-lg text-white">
                TrueBlog
              </span>
              
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <span className="text-gray-500 dark:text-gray-400">
                  Project
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  TrueBlog
                </span>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <span className="text-gray-500 dark:text-gray-400">Github</span>
                <span className="text-gray-500 dark:text-gray-400">Discord</span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <span className="text-gray-500 dark:text-gray-400">Privacy Policy</span>
                <span className="text-gray-500 dark:text-gray-400">Terms &amp; Conditions</span>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="TrueBlog"
            year={new Date().getUTCFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <BsFacebook className="text-xl cursor-pointer" />
            <BsInstagram className="text-xl cursor-pointer" />
            <BsTwitter className="text-xl cursor-pointer" />
            <BsGithub className="text-xl cursor-pointer" />
            <BsWhatsapp className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </Footer>
  );
}

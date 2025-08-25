import React from "react";
import { Link } from "react-router";
import Logo from "../../assets/test-removebg-preview.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#15616d] text-gray-300 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                className="lg:w-14 w-10 lg:block hidden"
                src={Logo}
                alt="BookBridge Logo"
              />
              <h2 className="text-2xl font-bold flex logo-font">
                <span className="text-[#e6bf84]">Book</span>
                <span className="lg:block hidden">Bridge</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400">
              Your gateway to thousands of books. Discover, filter, and explore
              the world of knowledge with BookBridge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#e6bf84] mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#e6bf84]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/bookShelf" className="hover:text-[#e6bf84]">
                  All Books
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#e6bf84]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#e6bf84]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-[#e6bf84] mb-3">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <p className="hover:text-[#e6bf84]">Fiction</p>
              </li>
              <li>
                <p className="hover:text-[#e6bf84]">Non-Fiction</p>
              </li>
              <li>
                <p className="hover:text-[#e6bf84]">Science</p>
              </li>
              <li>
                <p className="hover:text-[#e6bf84]">History</p>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-[#e6bf84] mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/md.shahariyar.787622"
                target="_blank"
                className="hover:text-[#e6bf84]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                className="hover:text-[#e6bf84]"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="hover:text-[#e6bf84]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/shahab-bin-shariar-web/"
                target="_blank"
                className="hover:text-[#e6bf84]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BookBridge. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

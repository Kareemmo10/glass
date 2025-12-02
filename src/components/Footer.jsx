// components/Footer.jsx
import {
  ArrowRight,
  Facebook,
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111418] text-gray-400 py-16 px-4 sm:px-6 lg:px-8 rounded-t-4xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Men's Glasses
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Women's Glasses
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Sunglasses
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Sale
                </a>
              </li>
            </ul>
          </div>
          {/* Customer Service Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Shipping &amp; Returns
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>
          {/* About Us Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors duration-300"
                  href="#"
                >
                  Store Locator
                </a>
              </li>
            </ul>
          </div>
          {/* CTA & Socials Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm">
              Get the latest updates on new arrivals and special offers.
            </p>
            {/* Newsletter Form (CTASection adaptation) */}
            <form className="flex w-full mb-6">
              <label className="sr-only" htmlFor="email-subscribe">
                Email address
              </label>
              <div className="flex w-full items-stretch rounded-full overflow-hidden bg-[#283039]">
                <input
                  className="form-input w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 focus:ring-0 border-none bg-transparent placeholder:text-gray-500 pl-4 pr-2 text-sm"
                  id="email-subscribe"
                  placeholder="Enter your email"
                  type="email"
                />
                <div className="flex items-center justify-center p-1">
                  <button
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 transition-colors duration-300"
                    type="submit"
                  >
                    <span className="sr-only">Subscribe</span>
                    <span className="material-symbols-outlined bg-[#137fec] text-white p-2 rounded-full">
                      <ArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </form>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                aria-label="Facebook"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                href="#"
              >
                <FacebookIcon />
              </a>
              <a
                aria-label="Instagram"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                href="#"
              >
                <InstagramIcon />
              </a>

              <a
                aria-label="Twitter"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                href="#"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 sm:mb-0">
            © 2024 Eyewear Co. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a
              className="hover:text-primary transition-colors duration-300"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="hover:text-primary transition-colors duration-300"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

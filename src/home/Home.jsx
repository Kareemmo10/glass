import React, { useState } from "react";
import { ScanFace, Package, ShieldCheck } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StatsCounter from "../components/StatsCounter";

export default function Home({ allProducts }) {
  const topImages = [
    "/rose-gold-eyeglasses-women.jpg",
    "/2.jpg",
    "/ar.jpg",
    "/aviator-sunglasses-men.jpg",
    "/black-eyeglasses-frames.jpg",
    "/classic-wayfarer-eyeglasses.jpg",
    "/designer-deluxe-frames.jpg",
  ];

  const bottomImages = [
    "/cat-eye-glasses-women.jpg",
    "/classic-black-wayfarer-eyeglasses.jpg",
    "/classic-eyeglasses-frames.jpg",
    "/classic-oval-frames.jpg",
    "/classic-round-frames.jpg",
    "/crystal-clear-transparent-glasses.jpg",
    "//designer-pilot-frames.jpg",
  ];

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ فلترة المنتجات لايف
  const filteredProducts =
    allProducts?.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-screen min-h-[600px] bg-background-light  font-display flex flex-col items-start justify-center pt-24 md:pt-32"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/HP_JUPITER_SECONDARY_BANNER_D.avif"
            alt="A stylish person wearing modern glasses, blurred in the background."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/60  "></div>
        </div>

        <motion.div
          className="relative z-10 flex flex-col items-start pl-6 md:pl-12 w-full max-w-4xl text-left"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect Pair
          </h1>

          <p className="text-lg md:text-xl text-slate-200 dark:text-slate-300 mb-10 max-w-2xl">
            Discover Stylish Eyewear with AR Try-On
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl flex flex-col">
            <div className="relative flex items-center bg-white  rounded-full shadow-lg w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-4 pl-6 pr-6 bg-transparent border-none outline-none focus:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Live Search Results */}
            {searchTerm && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 max-h-64 overflow-y-auto z-50">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        navigate(`/product/${item.id}`, {
                          state: { product: item },
                        })
                      }
                      className="flex items-center gap-4 p-2 hover:bg-gray-100  cursor-pointer"
                    >
                      {/* صورة المنتج */}
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />

                      {/* اسم المنتج */}
                      <span className="text-gray-900 ">{item.name}</span>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-gray-500">No results found</div>
                )}
              </div>
            )}
          </div>

          {/* Frequently Searched Tags */}
          <div className="mt-6 flex items-center flex-wrap gap-3">
            <span className="text-sm font-medium text-slate-200 ">
              Frequently searched:
            </span>
            {[
              "Sunglasses",
              "Blue Light",
              "Reading Glasses",
              "Kids' Glasses",
            ].map((tag) => (
              <a
                key={tag}
                className="px-4 py-1.5 text-sm text-white bg-white/20  rounded-full border border-white/30  hover:bg-white/30  transition-colors"
                href="#"
              >
                {tag}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <main class="py-12 sm:py-16 lg:py-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-start mb-8">
            <div>
              <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900  tracking-tighter">
                SHOP BY FRAME SHAPE
              </h1>
              <p class="mt-2 text-lg text-gray-600 ">
                Versatile shapes made to fit your mood and every moment.
              </p>
            </div>
            <Link
              class="hidden sm:inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity whitespace-nowrap bg-black"
              to="/product"
            >
              Shop all
            </Link>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            <div class="group text-center">
              <a href="#">
                <div class="bg-[#d4f2f9] rounded-lg overflow-hidden mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img
                    alt="Square shaped eyeglasses"
                    class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2DWhm0mGH-5ADGbFAhv1dPLNGHsryejmiSuVP9lONw-8dJcmPigXPO2RcoWeWFX4PDwXuYlsHZBAMyFmKChMyxayTYPzbiAVOyZlG-Ulpmg1Cg9k4BCDlq5oPNaSHKoFuqqF3m4ZPihHWCUjsz8sLwryBRgGw0Je82zJg4_2aa5674-bsVEsorQZto-bkdupYcsfjsucIcusBGELkflH6Erms8SQi-U0yfjOECJvzM7TNdsWiwX5qO6FQWGu-ujJF3oCJvTf92k-J"
                  />
                </div>
                <h3 class="font-bold text-sm text-gray-800 dark:text-gray-200 tracking-wider">
                  SQUARE
                </h3>
              </a>
            </div>
            <div class="group text-center">
              <a href="#">
                <div class="bg-[#d4f2f9] rounded-lg overflow-hidden mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img
                    alt="Rectangle shaped eyeglasses"
                    class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn_bKgiEvimIWHxtcO0TzjmdwZG_Zya5ttOOsVc9sDuBbikyaVeU97l1hwrAyCFog7wpbZz3hsgrT8ZV6HmJR8K4mq_pzTY_1IGSxV1uaXZOpmeM8S8PI11zFkJNft3CYvjZecTPsKOgsdH7aOCP8X3x9NitNDKLsewtdXRsJVIwVzUgGsd9S7OxHIL7ozYToz1Hsm3SWEULxFUwaxst8MGyNfEf-ubRHeoX64Gsv-Gr5Q8ipZUBBT0sB4sFn6Hdh65Wvt119vb_Oi"
                  />
                </div>
                <h3 class="font-bold text-sm text-gray-800 dark:text-gray-200 tracking-wider">
                  RECTANGLE
                </h3>
              </a>
            </div>
            <div class="group text-center">
              <a href="#">
                <div class="bg-[#d4f2f9] rounded-lg overflow-hidden mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img
                    alt="Round shaped eyeglasses"
                    class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw8o0KnGIY4cuzSBNxIwwWH3SsdzA9QJbK9xrXQF2pD0fS0-TBJyLTyjTypfi-y1ejecAVeOLr4589253qCKCMAjbua7YbAwrv0MzrelyARJT9DE8EvBNYyHJDxtlvV5OP8qMEicfbFzQ6L9A9ooYO76aq83K2dXWxjJQZWMyUQOSt2NoNQ9UPBQG8K6PRzi9RDXIaPdBiRUWQqNB1-OuEilhr0YSud3J2oLpfUb04IvTs-diRPBqYlI0G0hPBnw1nRlQ-3QkU9AV9"
                  />
                </div>
                <h3 class="font-bold text-sm text-gray-800 dark:text-gray-200 tracking-wider">
                  ROUND
                </h3>
              </a>
            </div>
            <div class="group text-center">
              <a href="#">
                <div class="bg-[#d4f2f9] rounded-lg overflow-hidden mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img
                    alt="Cat-eye shaped eyeglasses"
                    class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZol1CAAwtUCO1skkDR-WHraMKQ2LWYJAaD0gQdchQKkmV8ridoYpjry00Al4n7wgcRkL2Kdv6VVe_88keVnB0uCegvSnJwqJ9ZO_zUWd55CcXIZG2ixDMAWRkqbg5ET42G5Fx5U85a2kJ9ZZqhgP144NoVKlpVNeHOsoNAplaoE28TRHbJ-z31ssbYdAu30FfLiI8xoRx8z8QMdYfeW-VwfWF8omrF7lTLvqBeejADPrYS8aCF_kzC95UWLYi2pu3i567a1-mIEYO"
                  />
                </div>
                <h3 class="font-bold text-sm text-gray-800 tracking-wider">
                  CAT-EYE
                </h3>
              </a>
            </div>
            <div class="group text-center">
              <a href="#">
                <div class="bg-[#d4f2f9] rounded-lg overflow-hidden mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img
                    alt="Browline shaped eyeglasses"
                    class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBncR4Zc95z3rNXvPhsphY-_BZGxy1fRksU0biBXZFskOmUAYgfkJy5CiZ-apuWjFwmmLDp86Qb5t_W7VDtX3VgAQl4ZAE4rGONBJLlEA-WCzJlv8O9fkyJA4xKlFyDc0paGrLjwhViqPFHSF5eWAqyFw5veN82FnvE-seWhDuTI4HwnFZ_a3QiNWpZcxlcXDq5-bcABDIaEh4Y_H7eKqyEOPxHUYRHrSPWH0tL3fZVG6Ha8koi7uJfEQfWD8RqpX1SH32F-wcJB4Jh"
                  />
                </div>
                <h3 class="font-bold text-sm text-gray-800 tracking-wider">
                  BROWLINE
                </h3>
              </a>
            </div>
            <div class="group text-center">
              <a href="#">
                <div class="bg-[#d4f2f9] rounded-lg overflow-hidden mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img
                    alt="Aviator shaped eyeglasses"
                    class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5RZbLpQYVLG4RbVLwiDBs5MV9og-qQcWyLGxAoa2dLo3gJcy9M5iCtzYmaJLVowpkDmpa6cJhh9gfeennpt5Rv3m9jEE5hSDvIRFUGGlKvYbri2dxvMFPqfzd8zPi4w-kisfhCVakuWlxigzic0v4T4mTPqS6TGFbMN97fBUvonbbn7HT_Hrp9rSfkACNTwFHDAVKlD01U7pTsAWRPv9WhsSK8f7lZsJjbBOzshwUQ0ekM7p_g2hiNbOG25x7eOtk2kjLRjgFsOS"
                  />
                </div>
                <h3 class="font-bold text-sm text-gray-800 tracking-wider">
                  AVIATOR
                </h3>
              </a>
            </div>
          </div>
        </div>
      </main>

      <div className="w-[90%] mx-auto border-t border-gray-900 my-6"></div>

      <section className="flex flex-col md:flex-row justify-center gap-6 py-12 max-w-7xl mx-auto">
        {/* Women's Section */}
        <Link
          to="/women"
          className="relative w-full md:w-1/2 h-64 overflow-hidden rounded-lg shadow-lg group"
        >
          <img
            src="/woman.jpg"
            alt="Women"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-black p-4">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Get 20% OFF <br /> Women's Eyewear
            </h3>
            <span className="mt-3 bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-gray-200 transition cursor-pointer">
              Shop Now
            </span>
          </div>
        </Link>

        {/* Men's Section */}
        <Link
          to="/men"
          className="relative w-full md:w-1/2 h-64 overflow-hidden rounded-lg shadow-lg group"
        >
          <img
            src="/mens.jpg"
            alt="Men"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-black p-4">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Get 15% OFF <br /> Men's Eyewear
            </h3>
            <span className="mt-3 bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-gray-200 transition cursor-pointer">
              Shop Now
            </span>
          </div>
        </Link>
      </section>

      <section className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-hidden bg-slate-900">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center items-center py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="layout-content-container flex flex-col w-full max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Image */}
                <div
                  className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-lg"
                  style={{
                    backgroundImage: `url("/1.jpg")`,
                  }}
                ></div>

                {/* Right Content */}
                <div className="flex flex-col gap-8">
                  {/* Title + Description */}
                  <div className="flex flex-col gap-4 text-left">
                    <h1 className="text-white dark:text-white text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                      Experience Eyewear Virtually
                    </h1>

                    <p className="text-slate-300 dark:text-slate-300 text-sm md:text-base font-normal leading-normal max-w-prose">
                      Our AR technology lets you try on hundreds of frames using
                      just your camera. Find your perfect fit from the comfort
                      of your home.
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col gap-6">
                    {/* Item 1 */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-full h-10 w-10 flex items-center justify-center bg-[#102d4a]">
                        <span className="text-[#137eea]">
                          <ShieldCheck />
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <h2 className="text-white  text-lg font-bold leading-tight">
                          Shop with Confidence
                        </h2>
                        <p className="text-slate-400 dark:text-slate-400 text-base font-normal leading-normal">
                          See how frames look from every angle before you buy.
                        </p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-full h-10 w-10 flex items-center justify-center bg-[#102d4a]">
                        <span className="text-[#137fec]">
                          <Package />
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <h2 className="text-white  text-lg font-bold leading-tight">
                          Try On Our Full Collection
                        </h2>
                        <p className="text-slate-400  text-base font-normal leading-normal">
                          Access our entire catalog virtually from wherever you
                          are.
                        </p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-full h-10 w-10 flex items-center justify-center bg-[#102d4a]">
                        <span className="text-[#137fec]">
                          <ScanFace />
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <h2 className="text-white  text-lg font-bold leading-tight">
                          Instant, Realistic Previews
                        </h2>
                        <p className="text-slate-400  text-base font-normal leading-normal">
                          Our advanced AR provides a true-to-life look and feel.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="flex w-full md:w-auto md:max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 text-white text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity bg-[#137fec]">
                    <span className="truncate">Start Virtual Try-On</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* العنوان */}
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
            Our Achievements
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">
            We take pride in our growth and the trust our customers place in us.
          </p>

          {/* الإحصائيات */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {/* عنصر 1 */}
            <div>
              <h3 className="text-5xl font-extrabold text-slate-800">
                <StatsCounter end={50} suffix="K+" />
              </h3>
              <p className="text-slate-700 mt-2 text-lg font-medium">
                Happy Customers
              </p>
            </div>

            {/* عنصر 2 */}
            <div>
              <h3 className="text-5xl font-extrabold text-slate-800">
                <StatsCounter end={120} suffix="+" />
              </h3>
              <p className="text-slate-700 mt-2 text-lg font-medium">
                Stores Worldwide
              </p>
            </div>

            {/* عنصر 3 */}
            <div>
              <h3 className="text-5xl font-extrabold text-slate-800">
                <StatsCounter end={98} suffix="%" />
              </h3>
              <p className="text-slate-700 mt-2 text-lg font-medium">
                Customer Satisfaction
              </p>
            </div>

            {/* عنصر 4 */}
            <div>
              <h3 className="text-5xl font-extrabold text-slate-800">
                <StatsCounter end={35} suffix="+" />
              </h3>
              <p className="text-slate-700 mt-2 text-lg font-medium">
                Countries Reached
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* العنوان */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-800 mb-3">
              Featured Collections
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our exclusive eyewear collections — crafted for comfort,
              quality, and modern style.
            </p>
          </div>

          {/* الكروت */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <NavLink
              to="/product"
              className="group block bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src="classic-eyeglasses-frames.jpg"
                  alt="Classic Collection"
                  className="w-full h-72 object-cover transition duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Classic Collection
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Timeless styles with modern comfort
                </p>
                <span className="text-blue-600 font-semibold">Shop Now →</span>
              </div>
            </NavLink>

            {/* Card 2 */}
            <NavLink
              to="/product"
              className="group block bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src="premium-sunglasses-outdoor.jpg"
                  alt="Sunglasses"
                  className="w-full h-72 object-cover transition duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Sunglasses</h3>
                <p className="text-gray-600 text-sm mb-3">
                  UV protection meets style
                </p>
                <span className="text-blue-600 font-semibold">Shop Now →</span>
              </div>
            </NavLink>

            {/* Card 3 */}
            <NavLink
              to="/product"
              className="group block bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src="designer-eyeglasses-luxury.jpg"
                  alt="Designer Series"
                  className="w-full h-72 object-cover transition duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Designer Series
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Luxury eyewear for the bold look
                </p>
                <span className="text-blue-600 font-semibold">Shop Now →</span>
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      {/*  Video Section */}
      <section className="relative py-50 bg-slate-900 text-white overflow-hidden">
        {/* خلفية الفيديو أو الصورة */}
        <div className="absolute inset-0">
          {/* لو عندك فيديو، استخدم ده */}
          <video
            src="/videos/ar-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* محتوى النص وزر التشغيل */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Experience <span className="text-sky-400">AR Try-On</span> in Action
          </h2>
          <p className="text-slate-200 max-w-2xl mb-8">
            Watch how our Augmented Reality feature lets you try glasses
            instantly — right from your camera, no app needed.
          </p>
        </div>

        {/* Overlay خفيف فوق الخلفية */}
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      <section className="h-screen bg-white overflow-hidden flex flex-col justify-center overflow-hidden py-10 space-y-6">
        {/* العنوان */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-6">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
            Trending Collections
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm">
            Discover our most loved eyewear styles — moving trends around the
            world.
          </p>
        </div>

        {/* Row 1 */}
        <div className="flex gap-4 animate-[scroll-left_20s_linear_infinite] hover:[animation-play-state:paused]">
          {[...topImages, ...topImages].map((src, i) => (
            <img
              key={i}
              src={src}
              className="h-50 w-auto object-cover rounded-xl"
              alt=""
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-4 animate-[scroll-right_20s_linear_infinite] hover:[animation-play-state:paused]">
          {[...bottomImages, ...bottomImages].map((src, i) => (
            <img
              key={i}
              src={src}
              className="h-50 w-auto object-cover rounded-xl"
              alt=""
            />
          ))}
        </div>

        {/* CSS Animation */}
        <style>
          {`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}
        </style>
      </section>
    </div>
  );
}

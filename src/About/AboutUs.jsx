import React from "react";
import { CheckCircle, Eye, Gauge, Truck } from "lucide-react";
import { motion } from "framer-motion";

// يمكنك استبدال هذه البيانات ببياناتك الحقيقية

function AboutUs() {
  const features = [
    {
      title: "Real-Time AR Try-On",
      desc: "See how frames look on you instantly.",
      icon: <Eye size={40} strokeWidth={1.5} />,
    },
    {
      title: "Premium Quality",
      desc: "High-quality lenses and durable frames.",
      icon: <CheckCircle size={40} strokeWidth={1.5} />,
    },
    {
      title: "Free Adjustments",
      desc: "Comfortable fit guaranteed every time.",
      icon: <Gauge size={40} strokeWidth={1.5} />,
    },
    {
      title: "Fast Delivery",
      desc: "Quick and reliable shipping.",
      icon: <Truck size={40} strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <motion.section
        className="relative w-full h-[80vh] md:h-[90vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/hero.jpg')" }}
        initial={{ y: -50, opacity: 0 }} // البداية من فوق وغير مرئي
        animate={{ y: 0, opacity: 1 }} // الحركة للوضع الطبيعي
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Overlay أقوى علشان الكلام يبان */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* النص */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
          initial={{ y: -20, opacity: 0 }} // العناصر الداخلية تتحرك بشكل أبطأ
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Hi, We're{" "}
            <span className="text-slate-900 drop-shadow-[0_0_6px_white]">
              MyProject
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Crafting Style with Smart Technology
          </h2>

          <p className="text-white text-lg md:text-xl max-w-2xl">
            At{" "}
            <span className="font-semibold drop-shadow-[0_0_6px_white]">
              Visora
            </span>
            , we blend creative designs with high-quality eyewear technology.
            Our{" "}
            <span className="font-semibold text-slate-900 drop-shadow-[0_0_6px_white]">
              AR feature
            </span>{" "}
            lets you try on glasses instantly — helping you find the perfect
            match effortlessly.
          </p>
        </motion.div>
      </motion.section>

      <section className="py-20 px-8 max-w-7xl mx-auto space-y-16">
        {/* Mission-like Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* النص على اليمين */}
          <div className="md:w-1/2 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900  leading-snug">
              Smart eyewear, effortless style
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              At <span className="font-semibold">Visora</span>, our mission is
              to empower everyone to find their perfect pair effortlessly,
              combining innovative designs, high-quality lenses, and an
              interactive AR try-on experience — all at affordable prices.
            </p>
          </div>

          {/* الصورة على اليسار */}
          <div className="md:w-1/2">
            <img
              src="/1.jpg"
              alt="Visora"
              className="w-full rounded-2xl shadow-lg object-cover max-h-[450px]"
            />
          </div>
        </div>

        {/* Vision-like Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* النص على اليسار */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
              Leading the world in smart eyewear
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              We aim to be the ultimate destination for smart eyewear
              enthusiasts, delivering an innovative experience that blends
              style, comfort, and cutting-edge technology. We aspire to reach
              people all over the world while maintaining the highest standards
              of quality and design.
            </p>
          </div>

          {/* الصورة على اليمين */}
          <div className="md:w-1/2">
            <img
              src="/2.jpg"
              alt="Visora"
              className="w-full rounded-2xl shadow-lg object-cover max-h-[400px]"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="md:w-3/5 w-full flex justify-start relative">
            <img
              src="/1.jpg"
              alt="Our Story"
              className="w-full h-[450px] rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-2/5 w-full text-center md:text-left transition-all duration-300">
            <h2 className="text-4xl font-bold mb-6 transition-colors duration-300">
              Our Story
            </h2>
            <p className="text-lg mb-4 transition-colors duration-300">
              Founded in 2009 in the heart of Ismailia, Visora began as a small
              venture with a bold idea: to make eyewear shopping smarter,
              easier, and more enjoyable. Over the years, we have grown into a
              trusted name, combining craftsmanship, style, and innovation to
              serve a global community of eyewear lovers.
            </p>
            <p className="text-lg mb-4 transition-colors duration-300">
              Our journey has been marked by dedication to quality, a passion
              for design, and the constant pursuit of technology that enhances
              the way people experience fashion and self-expression.
            </p>
            <p className="text-lg transition-colors duration-300">
              Today, Visora stands as a leader in the eyewear industry,
              empowering customers to explore, experiment, and find their
              perfect fit with confidence and ease.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-[#d4b08c]">
          Why Choose Visora?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
          {features.map((item, i) => (
            <div
              key={i}
              className="
          group p-8 rounded-3xl border
          bg-white 
          border-[#e0d5cc] 
          shadow-md hover:shadow-2xl
          transition-all duration-300 
          hover:-translate-y-3 
          
          relative overflow-hidden
        "
            >
              {/* Gradient subtle on hover */}
              <div
                className="
          absolute inset-0 opacity-0 group-hover:opacity-10 
          bg-gradient-to-br from-[#b97a50] togray-700 
          transition-opacity duration-300 
          pointer-events-none
        "
              />

              <div
                className="
            flex items-center justify-center
            text-gray-700 dark:text-[#d4b08c]
            transition-transform duration-300
            group-hover:scale-[1.3]
            drop-shadow-md
          "
              >
                {item.icon}
              </div>

              <h3
                className="
            text-xl font-semibold mt-5 
            text-gray-900 dark:text-white
          "
              >
                {item.title}
              </h3>

              <p
                className="
            text-gray-600 dark:text-gray-300 mt-3
          "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

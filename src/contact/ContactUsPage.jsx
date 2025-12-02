// src/Pages/ContactUsPage.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  RefreshCcw,
  Truck,
  Award,
  Route,
  Star,
} from "lucide-react";

const faqsData = [
  {
    q: "How do I know the right glasses size?",
    a: "You can check our size guide on each product page.",
  },
  {
    q: "Do you offer AR Try-On?",
    a: "Yes! You can try any frame in AR directly from the product page.",
  },
  {
    q: "How long does shipping take?",
    a: "Shipping usually takes 2–4 business days inside Egypt.",
  },
  {
    q: "What is your return policy?",
    a: "You can return your glasses within 14 days of purchase if they are unused.",
  },
];

const quickHelpData = [
  {
    icon: <RefreshCcw size={28} strokeWidth={1.5} className="text-blue-500" />,
    title: "Return & Exchange",
    desc: "Hassle-free returns within 14 days.",
  },
  {
    icon: <Truck size={28} strokeWidth={1.5} className="text-green-500" />,
    title: "Shipping Policy",
    desc: "Fast shipping across Egypt.",
  },
  {
    icon: <Award size={28} strokeWidth={1.5} className="text-yellow-500" />,
    title: "Warranty",
    desc: "1-year warranty on all frames.",
  },
  {
    icon: <Route size={28} strokeWidth={1.5} className="text-red-500" />,
    title: "Track Order",
    desc: "Track your order in real-time.",
  },
];

const testimonialsData = [
  {
    name: "Sara M.",
    rating: 5,
    text: "Amazing service! My new glasses fit perfectly and arrived quickly.",
  },
  {
    name: "Ahmed H.",
    rating: 4,
    text: "Great quality and the AR try-on feature is super helpful.",
  },
  {
    name: "Laila F.",
    rating: 5,
    text: "I love my new frames! Excellent customer support too.",
  },
  {
    name: "Omar K.",
    rating: 5,
    text: "Customer service was very helpful with my order.",
  },
  {
    name: "Mona A.",
    rating: 4,
    text: "Love my new glasses! Comfortable and stylish.",
  },
];

const ContactUsPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 2) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <motion.div
        className="relative w-full h-64 md:h-80 lg:h-125 overflow-hidden"
        initial={{ y: -50, opacity: 0 }} // بداية الحركة من فوق
        animate={{ y: 0, opacity: 1 }} // الحركة للوضع الطبيعي
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src="/contact.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />

        {/* Overlay سوداء شفافة */}
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="absolute inset-0 flex items-center justify-center text-5xl md:text-5xl font-bold text-white drop-shadow-xl">
          Contact Us
        </h1>
      </motion.div>

      {/* ================= FORM + GET IN TOUCH ================= */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">
        {/* Contact Form */}
        <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Send us a message
          </h2>
          <form className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User
                  size={20}
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 outline-none focus:border-black focus:shadow-md transition bg-white/50"
                />
              </div>
              <div className="relative">
                <User
                  size={20}
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 outline-none focus:border-black focus:shadow-md transition bg-white/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Phone
                  size={20}
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 outline-none focus:border-black focus:shadow-md transition bg-white/50"
                />
              </div>
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 outline-none focus:border-black focus:shadow-md transition bg-white/50"
                />
              </div>
            </div>

            <div className="relative">
              <MessageCircle
                size={20}
                className="absolute top-3 left-3 text-gray-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full pl-10 pt-3 p-3 rounded-lg border border-gray-300 outline-none focus:border-black focus:shadow-md transition resize-none bg-white/50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 shadow-md transition transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Get in Touch Cards */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions about our glasses, orders, or AR try-on? We're here
            to help!
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              {
                icon: <Phone size={24} className="text-green-600" />,
                title: "Phone",
                info: "+20 119 876 9233",
                link: "tel:+201198769233",
              },
              {
                icon: <Mail size={24} className="text-blue-500" />,
                title: "Email",
                info: "support@visora.com",
                link: "mailto:support@visora.com",
              },
              {
                icon: <MapPin size={24} className="text-red-500" />,
                title: "Location",
                info: "Ismailia, Egypt",
                link: "#",
              },
              {
                icon: <Clock size={24} className="text-yellow-500" />,
                title: "Working Hours",
                info: "Sat–Thu: 9 AM – 11 PM\nFriday: Closed",
                link: "#",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform text-center whitespace-pre-line"
              >
                <div className="mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-700">{item.info}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MAP ================= */}
      <div className="container mx-auto px-4 pb-12">
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Visora Location"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27643.86775689518!2d32.2686!3d30.5965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f859ff6c943cb5%3A0x2e3f1c293f9d5bc!2sIsmailia!5e0!3m2!1sen!2seg!4v1700000000000&hl=en&maptype=roadmap"
            style={{ filter: "grayscale(80%) contrast(120%) brightness(90%)" }}
          ></iframe>
        </div>
      </div>

      {/* ================= QUICK HELP ================= */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Quick Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {quickHelpData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
            >
              <div className="mb-2">{item.icon}</div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          What Our Customers Say
        </h2>
        <div className="relative flex justify-center items-center overflow-hidden h-64 md:h-48">
          <AnimatePresence>
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="absolute flex gap-4 w-full md:w-2/3"
            >
              {[0, 1].map((i) => {
                const testimonial =
                  testimonialsData[
                    (currentTestimonial + i) % testimonialsData.length
                  ];
                return (
                  <div
                    key={i}
                    className="flex-1 bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-md text-center"
                  >
                    <div className="flex justify-center mb-2">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, idx) => (
                          <Star
                            key={idx}
                            size={20}
                            strokeWidth={1.5}
                            className="text-yellow-400 mr-1"
                          />
                        )
                      )}
                    </div>
                    <p className="text-gray-900 mb-4">"{testimonial.text}"</p>
                    <h3 className="font-semibold text-gray-900">
                      - {testimonial.name}
                    </h3>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ================= FAQ ================= */}
      <div className="max-w-2xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqsData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm border cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <p className="font-semibold">{item.q}</p>
              {openFaq === index && (
                <p className="text-gray-600 mt-2">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

// "use client";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import Button from "./Button";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// export default function LandingPage() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       heading: "ANONDO BAARI",
//       subheading: "A Sanctuary of Wellness and Dignity for Senior Citizens",
//       image: "/hero-section/1.jpg",
//     },
// {
//   heading: "Aging — A Beautiful Phase of Life",
//   subheading: "We believe aging deserves care, respect and celebration.",
//   image: "/hero-section/2.jpg",
// },
//     {
//       heading: "Graceful Living, Joyful Aging",
//       subheading: "Let’s Build a Future Where Aging Is Joyful.",
//       image: "/hero-section/2.jpg",
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     fade: true,
//     speed: 500,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (_, next) => setCurrentSlide(next),
//   };

//   return (
//     <section className="bg-primary bg-opacity-5 md:py-32 py-20 relative group overflow-hidden">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index}>
//             <div className="flex flex-col lg:flex-row justify-between items-center custom-container mx-auto">
//               <motion.div
//                 key={
//                   currentSlide === index
//                     ? `slide-${index}-${Date.now()}`
//                     : `slide-${index}`
//                 }
//                 className="max-w-2xl"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 <motion.p
//                   variants={itemVariants}
//                   className="text-primary tracking-widest font-medium mb-2 uppercase"
//                 >
//                   {slide.heading}
//                 </motion.p>

//                 <motion.h1
//                   variants={itemVariants}
//                   className="text-3xl md:text-5xl font-bold text-secondary md:mb-12 mb-6 "
//                 >
//                   {slide.subheading}
//                 </motion.h1>

//                 <motion.div variants={itemVariants} className="flex gap-4">
//                   <Link href="/services">
//                     <Button variant="primary" size="md">
//                       Explore More
//                     </Button>
//                   </Link>
// <Link href="/book-now">
//   <Button variant="outline" size="md">
//     Book a Visit
//   </Button>
// </Link>
//                 </motion.div>
//               </motion.div>

//               <motion.div
//                 key={`img-${currentSlide === index ? Date.now() : index}`}
//                 className="relative mt-12 lg:mt-0 lg:w-1/2 w-full"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <Image
//                   src={slide.image}
//                   width={1200}
//                   height={1200}
//                   alt="Anondo Baari Wellness"
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute z-10 top-1/2 left-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
//     onClick={onClick}
//   >
//     <FaArrowLeft />
//   </div>
// );

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute z-10 top-1/2 right-6 -translate-y-1/2 bg-primary text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
//     onClick={onClick}
//   >
//     <FaArrowRight />
//   </div>
// );

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";

const heroContent = {
  subheading: "A Leading Multinational Conglomerate of Bangladesh",
  heading: "Building the Future Through Innovation & Trust",
  description: `Founded in 2018, Redith Group is a leading Bangladeshi conglomerate operating across Technology, Consumer Brands, Agribusiness, and Retail—driven by innovation, AI, and sustainable growth.`,
  image: "/hero.jpg",
};

const LandingPage = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroContent.image})` }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative z-10 px-6 flex flex-col items-center justify-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="uppercase tracking-widest text-sm text-gray-200 mb-3">
          {heroContent.subheading}
        </p>

        <h1 className="text-4xl md:text-6xl font-serif italic font-semibold mb-4">
          <span className="text-primary">
            {heroContent.heading.split(" Through")[0]}
          </span>{" "}
          <span className="text-white">
            Through{heroContent.heading.split(" Through")[1]}
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed whitespace-pre-line">
          {heroContent.description}
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/services">
            <Button variant="primary" size="md">
              Explore More
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" size="md">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;

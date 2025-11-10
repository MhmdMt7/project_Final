import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import herooo from "../../assets/herooo.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20  from-blue-100 via-white to-cyan-50 pt-24"
    >
      {/* النص */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 leading-tight mb-4">
          صحتك، <span className="text-cyan-500">أولويتنا</span>
        </h1>
        <p className="text-gray-200 text-lg mb-6 max-w-xl">
          مرحبًا بك في الوحدة الصحية — نقدم رعاية موثوقة، أطباء خبراء، ودعم طبي
          سريع في أي وقت تحتاجه.
        </p>

      </motion.div>

      {/* الصورة */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 mt-10 md:mt-0"
      >
        <div className="relative w-3/4 md:w-full mx-auto my-8 group">
          {/* خلفية gradient خفيفة */}
          <div className="absolute inset-0  from-blue-100 via-white to-blue-50 rounded-xl filter blur-xl opacity-50 transition duration-500 group-hover:opacity-70"></div>

          {/* الصورة الرئيسية */}
          <img
            src={herooo} // رابط الصورة الاحترافية
            alt="Doctor illustration"
            className="relative w-full md:w-full mx-auto rounded-xl shadow-2xl object-contain transform transition duration-500 group-hover:scale-105 group-hover:rotate-1"
          />
        </div>
      </motion.div>
    </section>
  );
}

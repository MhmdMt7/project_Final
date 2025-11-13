import { motion } from "framer-motion";
import { useState } from "react";

export default function DoctorCard({ doctor }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      whileHover={{ scale: 1.1 }} // يكبر عند hover
      animate={{
        zIndex: expanded ? 20 : 1,
        scale: expanded ? 1.15 : 1.05, // حجم أكبر دائمًا + أكبر عند التوسيع
      }}
      transition={{
        layout: { duration: 0.4, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeOut" },
      }}
      className={`relative bg-white rounded-2xl shadow-md cursor-pointer overflow-hidden p-5 w-full transition-all duration-300`}
    >
      {/* صورة الدكتور */}
      <motion.img
        src={doctor.image}
        alt={doctor.name}
        className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-blue-100"
        layoutId={`image-${doctor.id}`}
      />

      {/* اسم الدكتور */}
      <motion.h3
        layout="position"
        className="text-lg md:text-xl font-bold text-blue-700 mb-1 text-center"
      >
        {doctor.name}
      </motion.h3>

      {/* التخصص */}
      <motion.p
        layout="position"
        className="text-blue-500 text-sm md:text-base mb-2 font-medium text-center"
      >
        {doctor.specialty}
      </motion.p>

      {/* الوصف */}
      <motion.p
        layout
        className="text-gray-600 text-sm md:text-base leading-relaxed text-center"
      >
        {expanded
          ? doctor.description
          : doctor.description.slice(0, 80) + "..."}
      </motion.p>

      {/* زر عرض المزيد */}
      <motion.button
        layout
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-xs md:text-sm mx-auto block"
      >
        {expanded ? "إخفاء التفاصيل" : "عرض المزيد"}
      </motion.button>
    </motion.div>
  );
}

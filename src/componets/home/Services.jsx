import { motion } from "framer-motion";
import {
  FaHeart,
  FaAmbulance,
  FaStethoscope,
  FaSyringe,
  FaBaby,
  FaFileMedical,
  FaUtensils,
  FaDeaf,
  FaTooth,
  FaDumbbell,
  FaFlask,
} from "react-icons/fa";

export default function Services() {
  const services = [
    { icon: <FaHeart />, title: "أمراض القلب", desc: "تشخيص وعلاج متقدم لأمراض القلب بواسطة أطباء متخصصين." },
    { icon: <FaAmbulance />, title: "الرعاية الطارئة", desc: "استجابة طارئة على مدار الساعة وتقديم الرعاية الطبية العاجلة." },
    { icon: <FaStethoscope />, title: "الفحص العام", desc: "تقييم صحي شامل لضمان سلامتك وصحة جسمك." },
    { icon: <FaSyringe />, title: "التطعيمات الروتينية", desc: "تقديم جميع التطعيمات للأطفال والكبار للحماية من الأمراض." },
    { icon: <FaBaby />, title: "تسجيل المواليد", desc: "متابعة نمو الأطفال حديثي الولادة وفحص صحتهم بانتظام." },
    { icon: <FaFileMedical />, title: "تسجيل الوفيات والسجلات", desc: "تسجيل الوفيات والإبلاغ عنها مع إدارة الملفات الطبية بدقة." },
    { icon: <FaUtensils />, title: "الدعم الغذائي", desc: "توفير المشورة والدعم الغذائي للأطفال حديثي الولادة والرضع." },
    { icon: <FaDeaf />, title: "فحص السمع", desc: "تقييم السمع للأطفال والكبار لضمان صحة سمعية سليمة." },
    { icon: <FaTooth />, title: "عيادة الأسنان", desc: "خدمات شاملة لعلاج الأسنان والحفاظ على صحة الفم." },
    { icon: <FaDumbbell />, title: "العلاج الطبيعي", desc: "جلسات علاج طبيعي لإعادة التأهيل وتحسين الحركة والصحة العامة." },
    { icon: <FaFlask />, title: "التحاليل الطبية", desc: "إجراء التحاليل الطبية المختلفة بدقة وموثوقية." },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gradient-to-b from-blue-50 to-white text-center"
      variants={containerVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">خدماتنا</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {services.map((el, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center justify-center text-center"
          >
            <div className="text-blue-500 text-5xl mb-4">{el.icon}</div>
            <h3 className="text-xl text-blue-600 font-semibold mb-3">{el.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{el.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

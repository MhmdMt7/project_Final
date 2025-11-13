import DoctorCard from "./DoctorCard";
import { motion } from "framer-motion";

export default function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "د. أحمد عبد الرحمن",
      specialty: "أخصائي أمراض القلب",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&w=300&q=80",
      description: "د. أحمد متخصص في أمراض القلب والأوعية الدموية مع أكثر من 15 عامًا من الخبرة في تشخيص وعلاج أمراض القلب باستخدام أحدث التقنيات.",
    },
    {
      id: 2,
      name: "د. سارة علي",
      specialty: "طبيبة أسنان",
      image: "https://images.unsplash.com/photo-1606813902916-84f3b3f3c893?auto=format&w=300&q=80",
      description: "د. سارة خبيرة في طب وتجميل الأسنان، تقدم خدمات علاجية ووقائية للحفاظ على ابتسامتك صحية وجذابة.",
    },
    {
      id: 3,
      name: "د. محمد طارق",
      specialty: "أخصائي علاج طبيعي",
      image: "https://images.unsplash.com/photo-1603398938378-e54eab4466c5?auto=format&w=300&q=80",
      description: "متخصص في إعادة التأهيل الحركي والعلاج الفيزيائي، يساعد المرضى على استعادة قدراتهم بعد الإصابات والعمليات الجراحية.",
    },
    {
      id: 4,
      name: "د. منى حسن",
      specialty: "أخصائية تغذية",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&w=300&q=80",
      description: "أخصائية تغذية متخصصة في وضع خطط غذائية تساعد على تحسين نمط الحياة والحفاظ على صحة الجسم بشكل متوازن.",
    },
  ];

  return (
    <motion.section
      id="doctors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-b from-blue-50 to-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">فريق الأطباء</h2>
      <div className="grid gap-8 px-6 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </motion.section>
  );
}

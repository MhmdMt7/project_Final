
import { useLanguage } from "../../context/LanguageContext"; // المسار حسب مكانك الفعلي

// -------------------------------------------
// مكون التوجل البسيط بين EN / AR
// -------------------------------------------
export default function BtnLanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">EN</span>

      {/* زر التوجل */}
      <button
        onClick={toggleLanguage}
        className={`w-14 h-7 flex items-center rounded-full transition-all duration-300 ${
          lang === "ar" ? "bg-blue-500 justify-end" : "bg-gray-300 justify-start"
        }`}
      >
        <span
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300`}
        ></span>
      </button>

      <span className="text-sm font-medium">AR</span>
    </div>
  );
}

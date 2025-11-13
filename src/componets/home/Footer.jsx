import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* الشعار والمقدمة */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2">Health Unit</h1>
          <p className="text-gray-300 text-sm max-w-xs text-center md:text-left">
            نقدم رعاية صحية موثوقة بأفضل الأطباء والخدمات الطبية المتميزة لضمان صحتك وسلامتك.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-green-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* روابط سريعة */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
          <a href="#about" className="text-gray-300 hover:text-green-400 transition mb-2">من نحن</a>
          <a href="#services" className="text-gray-300 hover:text-green-400 transition mb-2">خدماتنا</a>
          <a href="#doctors" className="text-gray-300 hover:text-green-400 transition mb-2">فريق الأطباء</a>
        </div>

        {/* التواصل */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
          <p className="text-gray-300 mb-2">📧 info@healthunit.com</p>
          <p className="text-gray-300 mb-2">📞 +20 123 456 789</p>
          <p className="text-gray-300">🏢 شارع الصحة، القاهرة، مصر</p>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Health Unit. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

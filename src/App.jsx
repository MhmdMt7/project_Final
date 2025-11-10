import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { LanguageProvider } from "./context/LanguageContext"; // ✅ استدعاء الـ Provider

export default function App() {
  return (
    // ✅ غلف المشروع كله داخل LanguageProvider
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

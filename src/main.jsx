import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css";              // Core CSS
import "primeicons/primeicons.css";                           // Icons
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import Footer from './features/homePage/footer/footer.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import CompanyPolicyPage from './pages/CompanyPolicyPage.jsx';
import Header from './features/header/Header.jsx';
createRoot(document.getElementById('root')).render(

    <BrowserRouter>
     <Header/>
      <Routes>
       
        <Route path="/" element={<HomePage/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
      <Route path="/company-policy" element={<CompanyPolicyPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
)

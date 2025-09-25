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
import Footer from './features/footer/Index.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import CompanyPolicyPage from './pages/CompanyPolicyPage.jsx';
import Header from './features/header/Header.jsx';
import TermsAndConditionPage from './pages/TermsAndConditionPage.jsx';
import DisclaimerPage from './pages/DisclaimerPage.jsx';
createRoot(document.getElementById('root')).render(

    <BrowserRouter>
     <Header/>
      <Routes>
       
        <Route path="/" element={<HomePage/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
      <Route path="/company-policy" element={<CompanyPolicyPage/>} />
       <Route path="/disclaimer" element={<DisclaimerPage/>} />
        <Route path="/terms-condition" element={<TermsAndConditionPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
)

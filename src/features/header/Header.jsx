
import React from "react";
import logo from "../../assets/logo.jpg"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="py-3 shadow-sm">
            <div className="px-5 d-flex justify-content-between align-items-center">
                {/* Logo / Brand */}
                <div className="d-flex align-items-center">
                   <Link to ="/"><img className="d-block cursor-pointer"
                        alt="logo"
                        src={logo}
                         style={{ height: "2.75rem" }}

                    /> </Link>
                    <div className="ms-2">
                        <h3 className="fw-bold m-0  ">ClassConnect</h3>
                        <h3 className="fw-500 fs-18 m-0 text-start">EduTech Pvt Ltd</h3>
                    </div>

                </div>
                {/* Navigation */}
                <nav>
                    <a href="#features" className="me-3 text-dark text-decoration-none">
                        Features
                    </a>
                    <a href="#whychoose" className="me-3 text-dark text-decoration-none">
                        Why Us
                    </a>
                    <a href="#signup" className="btn btn-primary btn-sm">
                        Contact Us
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">ClassConnect EduTech Pvt Ltd.</h5>
            <p>
              A complete school management platform to automate fee collection,
              manage student records, and improve parent engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/privacy-policy" className="text-white text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/company-policy" className="text-white text-decoration-none">
                  Company Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-white text-decoration-none">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms-condition" className="text-white text-decoration-none">
                  Terms And Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="mb-1">
              📍 C-2316, Gaur City-2, 12th Avenue
            </p>
            <p className="mb-1">
              PO: Roza Yakubpur, DIST: Gautam Buddha Nagar
            </p>
            <p className="mb-1">
              Greater Noida West, Sec-16C
            </p>
            <p className="mb-1">
              Uttar Pradesh - 201009
            </p>
            <p className="mb-1">📞 +91 (977)355-2592</p>
            <p>✉️ support@classconect.com</p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Follow Us</h6>
            <a href="https://facebook.com" className="text-white me-3 fs-4">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-white me-3 fs-4">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-white me-3 fs-4">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://instagram.com" className="text-white fs-4">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-light" />

        {/* Copyright */}
        <div className="text-center">
          <p className="m-0">
            © 2025 <strong>ClassConnect EduTech Pvt Ltd</strong> | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

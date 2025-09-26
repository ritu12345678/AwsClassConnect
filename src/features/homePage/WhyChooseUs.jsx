import React from "react";
import dpsLogo from "../../assets/dpsLogo.svg"
import school2Logo from "../../assets/school2Logo.png"
import school3Logo from "../../assets/school3Logo.png"
import ryanLogo from "../../assets/ryanLogo.png"
const WhyChooseUs = () => {
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-md-8 shadow-sm">
                    <section id="whychoose" className="py-5 bg-light ">
                        <div className="container text-start">
                            <h2 className="fw-bold mb-4 text-start">Why Choose Us</h2>
                            <ul className="list-unstyled fs-4 fw-light">
                                <li className="mb-2">
                                    <span className="text-danger fs-20 fw-bold">✔</span>Save Time
                                </li>
                                <li className="mb-2">
                                    <span className="text-danger fs-20 fw-bold">✔</span> Reduce Manual Errors
                                </li>
                                <li className="mb-2">
                                    <span className="text-danger fs-20 fw-bold">✔</span> Boost Parent Engagement
                                </li>
                            </ul>
                            <h2 className="mt-3 fw-bold">
                                Trusted by 20+ Schools
                            </h2>
                            <div className="d-flex align-items-center flex-wrap">
                                {/* DPS Logo & Name */}
                                <div className="d-flex align-items-center me-3 mb-3">
                                    <img
                                        src={dpsLogo}
                                        alt="Delhi Public School"
                                        style={{ height: "50px", width: "auto", }}
                                        className="me-2"
                                    />
                                    <span className="fw-400 fs-5 text-capitalize">DELHI PUBLIC SCHOOL</span>
                                </div>

                                {/* Ryan International Logo & Name */}
                                <div className="d-flex align-items-center me-3 mb-3">
                                    <img
                                        src={ryanLogo}
                                        alt="Ryan International School"
                                        style={{ height: "50px", width: "auto" }}
                                        className="me-2"
                                    />
                                    <span className="fw-400 fs-5">RYAN</span>
                                </div>
                                <img
                                    src={school2Logo}
                                
                                    alt="Ryan International School"
                                    style={{ height: "50px", width: "auto" }}
                                    className="me-3 mb-3"
                                />
                                <img
                                    src={school3Logo}
                                    alt="Ryan International School"
                                    style={{ height: "50px", width: "auto" }}
                                    className="me-2 mb-3"
                                />
                                {/* Add more school logos here in the same format */}
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-4 shadow p-4 rounded bg-white">
                    <div className="row justify-content-center">
                        <div className="">
                            <h3 className="fw-bold mb-3 text-center">Sign Up </h3>
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="School Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <button type="submit" className="btn btn-danger w-100 text-white bg-danger">
                                    Request Demo
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>);
};

export default WhyChooseUs;

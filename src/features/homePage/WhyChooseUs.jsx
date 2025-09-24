import React from "react";

const WhyChooseUs = () => {
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-md-8 shadow-sm">
                    <section id="whychoose" className="py-5 bg-light ">
                        <div className="container text-start">
                            <h2 className="fw-bold mb-4 text-start">Why Choose Us</h2>
                            <ul className="list-unstyled fs-4 fw-300">
                                <li className="mb-2 ">✅ Save Time</li>
                                <li className="mb-2">✅ Reduce Manual Errors</li>
                                <li className="mb-2">✅ Boost Parent Engagement</li>
                            </ul>
                            <h2 className="mt-3 fw-bold">
                                Trusted by 20+ Schools
                            </h2>
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

import React from 'react'
import bannerImage from "../../assets/bannerImage.jpg"
const Banner = () => {
    return (

        <section className="banner text-white d-flex justify-content-between align-items-start px-5">

            <div className=" py-5 ">

                <div className="py-5 d-flex flex-column text-start">
                    <h1 className="fw-bold mb-0">One Platform to</h1>
                    <h1 className="fw-bold mb-0">Manage Your</h1>
                    <h1 className="fw-bold mb-2">Entire School</h1>
                    <p className="mb-0">Automate fees collection, manage stu-</p>
                    <p className="mb-0">-dent records, and communicate with</p>
                    <p className="mb-4">parents from a single platform.</p>
                    <button id="signUp" className="btn btn-light btn-lg fw-semibold text-danger align-self-start">Request Demo </button>
                </div>

            </div>
            <div className=''>
             <img src={bannerImage}  style={{ height: "25rem", paddingTop: "7rem",width:"35rem" }} />
            </div>
        </section>
    )
}

export default Banner

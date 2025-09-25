import React from "react";

const Disclaimer = () => {
  return (
 
      <section className="privacy-policy py-5">
      <div className="container">
       
        <div className="p-4 rounded bg-white">
        {/* Heading */}
        <h2 className="fw-bold mb-4 pb-2 border-bottom text-start">
          Disclaimer –
        </h2>

        {/* Content */}
        <p className="text-muted mb-3 text-start">
          ClassConnect provides a digital platform for schools. We do not control
          school policies, fee amounts, refunds, or admissions.
        </p>
        <p className="text-muted mb-3 text-start">
          All payments made through ClassConnect are credited directly to the
          respective school’s account.
        </p>
        <p className="text-muted mb-3 text-start">
          Responsibility for accuracy of student/parent information lies with the
          school/guardian.
        </p>
        <p className="text-muted mb-3 text-start">
          We are not liable for disputes between schools and parents regarding
          fees, refunds, or admissions.
        </p>
        <p className="text-muted text-start">
          Our liability is strictly limited to providing a functional and secure
          technology platform.
        </p>
      </div>
      </div>
      
    </section>
  );
};

export default Disclaimer;

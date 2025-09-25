import React from "react";

const CompanyPolicy = () => {
  return (
    <section className="company-policy py-5">
      <div className="container">
        {/* Removed shadow-sm */}
        <div className="p-4 rounded bg-white">
          <h2 className="fw-bold mb-4 text-start border-bottom pb-2">Company Policy -</h2>

          <p className="text-start">
            <strong>Purpose:</strong> To provide schools with reliable, secure, and easy-to-use digital tools for student management and online fee collection.
          </p>

          <p className="text-start">
            <strong>Responsibility:</strong> ClassConnect acts only as a technology service provider. Fee structures, refund/cancellation decisions are entirely under the school’s authority.
          </p>

          <p className="text-start">
            <strong>Compliance:</strong> We follow all applicable laws, RBI/Bank guidelines, and data privacy standards.
          </p>

          <p className="text-start">
            <strong>Transparency:</strong> Clear communication with schools and parents is our priority.
          </p>

          <p className="text-start">
            <strong>Support:</strong> Any technical issues will be addressed by our support team promptly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyPolicy;

import React from "react";

const TermsAndConditions = () => {
  return (
      <section className="privacy-policy py-5">
      <div className="container">
       
        <div className="p-4 rounded bg-white">
          {/* Main Heading */}
          <h2 className="fw-bold mb-4 text-start border-bottom pb-2">
            Terms & Conditions –
          </h2>

          {/* Content */}
          <p className="text-start text-muted mb-3">
            <strong>1. Introduction:</strong> Welcome to ClassConnect EduTech Pvt Ltd (“ClassConnect”, “we”, “our”, “us”). By accessing or using our website, mobile application, or services, you agree to these Terms & Conditions.
          </p>

          <p className="text-start text-muted mb-3">
            <strong>2. Services Provided:</strong> ClassConnect offers schools a digital platform to manage student records, admissions, and fee collection.
          </p>
          <p className="text-start text-muted mb-3">
            Parents/guardians can use the platform to make secure fee payments.
          </p>
          <p className="text-start text-muted mb-3">
            We act as a technology service provider only. The responsibility for academic, administrative, and financial policies rests entirely with the school.
          </p>

          <p className="text-start text-muted mb-3">
            <strong>3. User Responsibilities:</strong> Schools must ensure the accuracy of the information they upload.
          </p>
          <p className="text-start text-muted mb-3">
            Parents/guardians must verify fee details before making payments.
          </p>
          <p className="text-start text-muted mb-3">
            Any misuse, fraudulent activity, or unauthorized access may result in suspension of access.
          </p>

          <p className="text-start text-muted mb-3">
            <strong>4. Payments:</strong> All payments made through ClassConnect are credited directly to the respective school’s designated account.
          </p>
          <p className="text-start text-muted mb-3">
            ClassConnect does not control fee structures, refund eligibility, or cancellation of payments. These are solely determined by the school.
          </p>
          <p className="text-start text-muted mb-3">
            Payment gateway charges (if applicable) are displayed during the transaction process.
          </p>

          <p className="text-start text-muted mb-3">
            <strong>5. Refunds & Cancellations:</strong> Refunds or cancellations of fee payments are governed strictly by the school’s policy.
          </p>
          <p className="text-start text-muted mb-3">
            ClassConnect cannot process or approve refunds without school authorization.
          </p>
          <p className="text-start text-muted mb-3">
            In case of technical failures (e.g., amount debited but transaction failed), refunds will be processed automatically within <strong>[7 working days]</strong> after confirmation with the bank/payment gateway.
          </p>

          <p className="text-start text-muted mb-3">
            <strong>6. Data Privacy:</strong> ClassConnect collects and stores only the information necessary to provide services.
          </p>
          <p className="text-start text-muted mb-3">
            We are committed to protecting personal data in accordance with applicable laws.
          </p>
          <p className="text-start text-muted mb-3">
            Please refer to our Privacy Policy for full details.
          </p>

          <p className="text-start text-muted mb-3">
            <strong>7. Limitation of Liability:</strong> ClassConnect shall not be liable for disputes between schools and parents/guardians regarding fee amounts, refunds, or admissions.
          </p>
          <p className="text-start text-muted mb-3">
            Our liability is limited solely to maintaining the functionality and security of the platform.
          </p>

          <p className="text-start text-muted">
            <strong>8. Amendments:</strong> We reserve the right to update or modify these Terms & Conditions at any time. Updates will be posted on our website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;

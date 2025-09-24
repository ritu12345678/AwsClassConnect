import React from "react";

const featuresData = [
  {
    icon: "bi bi-credit-card",
    title: "Automatic Fee Collection",
    description: "Automate fee collection with ease and accuracy.",
  },
  {
    icon: "bi bi-people",
    title: "Student Records Management",
    description: "Maintain complete student data efficiently.",
  },
  {
    icon: "bi bi-chat-dots",
    title: "Parent Notifications",
    description: "Send instant updates via SMS & WhatsApp.",
  },
  {
    icon: "bi bi-bar-chart-line",
    title: "Class-wise Reports & Analytics",
    description: "Get detailed insights & performance reports.",
  },
  {
    icon: "bi bi-shield-lock",
    title: "Secure Payment Gateway",
    description: "Enable safe and seamless online transactions.",
  },
  {
    icon: "bi bi-laptop",
    title: "Multi-Device Access",
    description: "Access platform on both web & mobile devices.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <h2 className="text-start fw-bold mb-4">Features</h2>
        <div className="row g-4">
          {featuresData.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="feature-box p-4 shadow-sm h-100 text-center">
                <i className={`${feature.icon} fs-1 text-primary`}></i>
                <h5 className="mt-3 heading">{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
